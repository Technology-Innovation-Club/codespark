import { useCallback, useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import { AnimatePresence, motion } from "motion/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/panel")({
  head: () => ({
    meta: [
      { title: "Ask the Room — CodeSpark Panel" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Panel,
});

const VOTED_KEY = "codespark_panel_voted_v1";
const NAME_KEY = "codespark_panel_name";
const HOST_KEY = "codespark_panel_host_v1";

function readVoted(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(VOTED_KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

function timeAgo(ts: number): string {
  const s = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function Panel() {
  const questions = useQuery(api.panel.list);
  const askQuestion = useMutation(api.panel.ask);
  const upvote = useMutation(api.panel.upvote);
  const unvote = useMutation(api.panel.unvote);
  const verifyHost = useMutation(api.panel.verifyHost);
  const setAnswered = useMutation(api.panel.setAnswered);
  const setPinned = useMutation(api.panel.setPinned);
  const removeQuestion = useMutation(api.panel.remove);

  const [voted, setVoted] = useState<Set<string>>(() => new Set(readVoted()));
  const [pendingVotes, setPendingVotes] = useState<Record<string, number>>({});
  const [sort, setSort] = useState<"top" | "new">("top");
  const [theme, setTheme] = useTheme();

  const [text, setText] = useState("");
  const [name, setName] = useState(() =>
    typeof window === "undefined" ? "" : (localStorage.getItem(NAME_KEY) ?? ""),
  );
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  const [hostPassword, setHostPassword] = useState(() =>
    typeof window === "undefined" ? "" : (sessionStorage.getItem(HOST_KEY) ?? ""),
  );
  const [hostDialog, setHostDialog] = useState(false);
  const [hostError, setHostError] = useState("");
  const isHost = hostPassword.length > 0;

  const [stageId, setStageId] = useState<string | null>(null);

  const ordered = useMemo(() => {
    const copy = [...(questions ?? [])];
    copy.sort((a, b) => {
      // Pinned questions always rise to the top, whatever the filter.
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return sort === "top"
        ? b.votes - a.votes || b.createdAt - a.createdAt
        : b.createdAt - a.createdAt;
    });
    return copy;
  }, [questions, sort]);

  const totalVotes = useMemo(
    () => (questions ?? []).reduce((sum, q) => sum + q.votes, 0),
    [questions],
  );

  const displayedVotes = useCallback(
    (id: string, base: number) => base + (pendingVotes[id] ?? 0),
    [pendingVotes],
  );

  const markVoted = useCallback((id: string) => {
    setVoted((prev) => {
      const next = new Set(prev);
      next.add(id);
      localStorage.setItem(VOTED_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const unmarkVoted = useCallback((id: string) => {
    setVoted((prev) => {
      const next = new Set(prev);
      next.delete(id);
      localStorage.setItem(VOTED_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const handleToggleVote = useCallback(
    async (id: Id<"panel_questions">) => {
      if (pendingVotes[id]) return;
      const removing = voted.has(id);
      if (removing) unmarkVoted(id);
      else markVoted(id);
      setPendingVotes((p) => ({ ...p, [id]: removing ? -1 : 1 }));
      try {
        if (removing) await unvote({ id });
        else await upvote({ id });
      } catch {
        if (removing) markVoted(id);
        else unmarkVoted(id);
      } finally {
        setPendingVotes((p) => {
          const next = { ...p };
          delete next[id];
          return next;
        });
      }
    },
    [voted, pendingVotes, markVoted, unmarkVoted, upvote, unvote],
  );

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    const value = text.trim();
    if (value.length < 4) {
      setFormError("Give us a little more than that.");
      return;
    }
    setSending(true);
    try {
      await askQuestion({ text: value, author: name.trim() || undefined });
      if (name.trim()) localStorage.setItem(NAME_KEY, name.trim());
      setText("");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Could not send that.");
    } finally {
      setSending(false);
    }
  }

  async function handleHostUnlock(e: React.FormEvent) {
    e.preventDefault();
    setHostError("");
    const ok = await verifyHost({ password: hostPassword });
    if (!ok) {
      setHostError("Wrong password.");
      return;
    }
    sessionStorage.setItem(HOST_KEY, hostPassword);
    setHostDialog(false);
  }

  function exitHost() {
    sessionStorage.removeItem(HOST_KEY);
    setHostPassword("");
    setStageId(null);
  }

  // Stage keyboard controls.
  useEffect(() => {
    if (!stageId) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setStageId(null);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const idx = ordered.findIndex((q) => q.id === stageId);
        if (idx === -1) return;
        const delta = e.key === "ArrowRight" ? 1 : -1;
        const next = ordered[Math.min(ordered.length - 1, Math.max(0, idx + delta))];
        if (next) setStageId(next.id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stageId, ordered]);

  const staged = ordered.find((q) => q.id === stageId) ?? null;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent)]" />

      <div className="relative mx-auto max-w-[820px] px-5 pb-28 pt-10 sm:pt-16">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="eyebrow">CodeSpark · Live Q&amp;A</span>
            </div>
            <h1 className="mt-3 font-display text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Ask the room.
            </h1>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
              Drop your question below. Upvote the ones you want answered first — the top
              questions rise to the top.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border bg-[var(--surface)] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              style={{ borderColor: "var(--border)" }}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
            <div
              className="hidden h-11 items-center gap-2.5 rounded-full border bg-[var(--surface)] px-4 sm:flex"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="font-display text-base font-semibold tabular-nums leading-none">
                {questions?.length ?? 0}
              </span>
              <span className="h-4 w-px bg-[var(--border)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-2)]">
                questions
              </span>
            </div>
            {isHost ? (
              <button
                onClick={exitHost}
                className="h-11 rounded-full border bg-[var(--surface)] px-4 text-[13px] font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                style={{ borderColor: "var(--border)" }}
              >
                Exit host
              </button>
            ) : (
              <button
                onClick={() => { setHostDialog(true); setHostError(""); }}
                className="h-11 rounded-full border bg-[var(--surface)] px-4 text-[13px] font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                style={{ borderColor: "var(--border)" }}
              >
                Host mode
              </button>
            )}
          </div>
        </header>

        <form onSubmit={handleAsk} className="mt-8 clarity-card p-4 sm:p-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={280}
            rows={2}
            placeholder="What do you want to ask?"
            className="w-full resize-none bg-transparent px-1 py-1 font-display text-[clamp(1.05rem,2.4vw,1.35rem)] font-medium leading-snug outline-none placeholder:text-[var(--muted-2)]"
          />
          <div className="mt-3 flex flex-col gap-3 border-t pt-3 sm:flex-row sm:items-center" style={{ borderColor: "var(--border)" }}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
              placeholder="Your name (optional)"
              className="clarity-input h-10 w-full px-3.5 text-sm sm:max-w-[220px]"
            />
            <div className="flex items-center justify-between gap-3 sm:ml-auto">
              <span className={cn("text-xs tabular-nums", text.length > 260 ? "text-[var(--destructive)]" : "text-[var(--muted-2)]")}>
                {text.length}/280
              </span>
              <button
                type="submit"
                disabled={sending || text.trim().length < 4}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50"
              >
                {sending ? "Sending…" : "Ask question"}
              </button>
            </div>
          </div>
          {formError && <p className="mt-2 text-xs font-medium text-[var(--destructive)]">{formError}</p>}
        </form>

        <div className="mt-10 flex items-center justify-between">
          <h2 className="font-display text-sm font-semibold tracking-tight">
            {ordered.length} question{ordered.length === 1 ? "" : "s"}
          </h2>
          <div className="flex rounded-full border bg-[var(--surface)] p-1" style={{ borderColor: "var(--border)" }}>
            {(["top", "new"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSort(key)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-colors",
                  sort === key ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--ink)]",
                )}
              >
                {key === "top" ? "Top voted" : "Newest"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {questions === undefined && (
            <>
              <div className="h-24 animate-pulse rounded-[20px] border bg-[var(--surface-2)]" style={{ borderColor: "var(--border)" }} />
              <div className="h-24 animate-pulse rounded-[20px] border bg-[var(--surface-2)]" style={{ borderColor: "var(--border)" }} />
            </>
          )}

          {questions !== undefined && ordered.length === 0 && (
            <div className="clarity-card grid place-items-center px-6 py-16 text-center">
              <p className="font-display text-lg font-semibold">No questions yet.</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Be the first to ask something.</p>
            </div>
          )}

          <AnimatePresence initial={false}>
            {ordered.map((q, i) => {
              const hasVoted = voted.has(q.id);
              const votes = displayedVotes(q.id, q.votes);
              return (
                <motion.div
                  key={q.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "clarity-card flex gap-4 p-4 sm:p-5",
                    q.answered && "opacity-60",
                    q.pinned && !q.answered && "border-[color-mix(in_srgb,var(--accent)_45%,var(--border))] shadow-[var(--shadow-strong)]",
                  )}
                >
                  <button
                    onClick={() => handleToggleVote(q.id)}
                    aria-pressed={hasVoted}
                    aria-label={hasVoted ? "Remove your upvote" : "Upvote this question"}
                    title={hasVoted ? "Remove your upvote" : "Upvote"}
                    className={cn(
                      "flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border transition-all",
                      hasVoted
                        ? "border-transparent bg-[var(--accent)] text-white hover:-translate-y-0.5"
                        : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--ink)] hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]",
                    )}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    <span className="mt-0.5 font-display text-sm font-bold tabular-nums">{votes}</span>
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2">
                      <p className="font-display text-[17px] font-medium leading-snug sm:text-[19px]">
                        {q.text}
                      </p>
                      {q.pinned && (
                        <span className="mt-0.5 shrink-0 rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--accent-ink)]">
                          Pinned
                        </span>
                      )}
                      {q.answered && (
                        <span className="mt-0.5 shrink-0 rounded-full bg-[#ecfdf5] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#047857]">
                          Answered
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted-2)]">
                      <span className="font-medium text-[var(--muted)]">{q.author ?? "Anonymous"}</span>
                      <span>·</span>
                      <span>{timeAgo(q.createdAt)}</span>
                      {isHost && (
                        <span className="ml-auto flex items-center gap-1.5">
                          <button
                            onClick={() => setStageId(q.id)}
                            className="rounded-full border px-3 py-1 text-[11px] font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--surface-2)]"
                            style={{ borderColor: "var(--border)" }}
                          >
                            Zoom in
                          </button>
                          <button
                            onClick={() => setPinned({ id: q.id, pinned: !q.pinned, password: hostPassword })}
                            className={cn(
                              "rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors",
                              q.pinned
                                ? "border-transparent bg-[var(--accent)] text-white"
                                : "text-[var(--muted)] hover:text-[var(--ink)]",
                            )}
                            style={q.pinned ? undefined : { borderColor: "var(--border)" }}
                          >
                            {q.pinned ? "Unpin" : "Pin"}
                          </button>
                          <button
                            onClick={() => setAnswered({ id: q.id, answered: !q.answered, password: hostPassword })}
                            className="rounded-full border px-3 py-1 text-[11px] font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                            style={{ borderColor: "var(--border)" }}
                          >
                            {q.answered ? "Unmark" : "Answered"}
                          </button>
                          <button
                            onClick={() => removeQuestion({ id: q.id, password: hostPassword })}
                            className="rounded-full border px-3 py-1 text-[11px] font-semibold text-[var(--destructive)] transition-colors hover:bg-[var(--surface-2)]"
                            style={{ borderColor: "var(--border)" }}
                          >
                            Remove
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="hidden self-center font-display text-2xl font-bold tabular-nums text-[var(--border)] sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <p className="mt-10 text-center text-xs text-[var(--muted-2)]">
          {totalVotes} vote{totalVotes === 1 ? "" : "s"} cast · updates live
        </p>
      </div>

      {/* Host password dialog */}
      <AnimatePresence>
        {hostDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setHostDialog(false)}
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleHostUnlock}
              className="w-full max-w-sm rounded-[20px] border bg-[var(--surface)] p-6 shadow-[var(--shadow-strong)]"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="font-display text-xl font-semibold">Host mode</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Enter the event password to present questions on the big screen.
              </p>
              <input
                type="password"
                autoFocus
                value={hostPassword}
                onChange={(e) => setHostPassword(e.target.value)}
                placeholder="Event password"
                className="clarity-input mt-4 h-11 w-full px-3.5 text-sm"
              />
              {hostError && <p className="mt-2 text-xs font-medium text-[var(--destructive)]">{hostError}</p>}
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setHostDialog(false)}
                  className="h-10 rounded-full border px-4 text-sm font-semibold text-[var(--muted)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-10 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white"
                >
                  Unlock
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projector "zoom" stage */}
      <AnimatePresence>
        {staged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#050507] text-white"
          >
            <div className="flex items-center justify-between px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <span>Presenting</span>
              <span>
                {(ordered.findIndex((q) => q.id === staged.id) + 1)} / {ordered.length}
              </span>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center sm:px-16">
              <div className="mb-8 flex items-center gap-3 text-[var(--accent)]">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                <span className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tabular-nums">
                  {displayedVotes(staged.id, staged.votes)}
                </span>
              </div>
              <p className="max-w-[18ch] font-display text-[clamp(2rem,6.5vw,6rem)] font-semibold leading-[1.05] tracking-[-0.03em] sm:max-w-[26ch]">
                {staged.text}
              </p>
              <p className="mt-8 text-[clamp(1rem,2vw,1.5rem)] text-white/50">
                {staged.author ?? "Anonymous"}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 px-6 pb-8">
              <button
                onClick={() => {
                  const idx = ordered.findIndex((q) => q.id === staged.id);
                  const next = ordered[Math.max(0, idx - 1)];
                  if (next) setStageId(next.id);
                }}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10"
                aria-label="Previous question"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => setAnswered({ id: staged.id, answered: !staged.answered, password: hostPassword })}
                className={cn(
                  "h-12 rounded-full border px-6 text-sm font-semibold transition-colors",
                  staged.answered
                    ? "border-transparent bg-[#10b981] text-white"
                    : "border-white/15 text-white/80 hover:bg-white/10",
                )}
              >
                {staged.answered ? "Answered ✓" : "Mark answered"}
              </button>
              <button
                onClick={() => setStageId(null)}
                className="h-12 rounded-full border border-white/15 px-6 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const idx = ordered.findIndex((q) => q.id === staged.id);
                  const next = ordered[Math.min(ordered.length - 1, idx + 1)];
                  if (next) setStageId(next.id);
                }}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10"
                aria-label="Next question"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
