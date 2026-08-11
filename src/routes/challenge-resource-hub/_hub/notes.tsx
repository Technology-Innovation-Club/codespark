import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Pin, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useNotes, useSaveNote, useDeleteNote } from "@/lib/data";
import { NBButton, NBCard, Sticker } from "@/components/nb";
import { PageHeader } from "@/components/AppShell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/notes")({
  head: () => ({
    meta: [
      { title: "Learning notes — CodeSpark Innovation Hub" },
      {
        name: "description",
        content: "Your autosaving notebook for the challenge: pin what matters, search everything.",
      },
      { property: "og:title", content: "Learning notes — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Capture what you learn so it actually sticks." },
    ],
  }),
  component: NotesPage,
});

function NotesPage() {
  const { data: notes } = useNotes();
  const save = useSaveNote();
  const del = useDeleteNote();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const list = (notes ?? []).filter((n) =>
    `${n.title} ${n.content}`.toLowerCase().includes(search.trim().toLowerCase()),
  );
  const active = notes?.find((n) => n.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      save.mutate(
        { id: activeId, title: title || "Untitled note", content },
        { onSuccess: () => setSavedAt(new Date().toLocaleTimeString()) },
      );
    }, 900);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content, activeId]);

  function openNote(id: string, t: string, c: string) {
    setActiveId(id);
    setTitle(t);
    setContent(c);
    setSavedAt(null);
  }

  function newNote() {
    save.mutate(
      { title: "Untitled note", content: "" },
      {
        onSuccess: (id) => {
          openNote(id, "Untitled note", "");
          toast.success("New note created");
        },
      },
    );
  }

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Your second brain"
        title="Learning notes"
        subtitle="Markdown-friendly, autosaved, and searchable. Write the thing you'd want to reread in week 8."
        right={
          <NBButton tone="orange" onClick={newNote}>
            <Plus className="h-5 w-5" /> New note
          </NBButton>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-3">
          <label className="flex h-11 items-center gap-2 rounded-xl border-[3px] border-ink bg-paper px-3 shadow-brutal">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes…"
              aria-label="Search notes"
              className="h-full w-full bg-transparent outline-hidden"
            />
          </label>

          {list.length === 0 && (
            <NBCard className="p-5 text-sm text-muted-foreground">
              No notes yet. Start one after your next session.
            </NBCard>
          )}

          {list.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => openNote(n.id, n.title, n.content ?? "")}
              className={cn(
                "nb-press w-full rounded-2xl border-[3px] border-ink p-4 text-left shadow-brutal",
                activeId === n.id ? "bg-brand-yellow" : "bg-paper hover:bg-cream",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display font-extrabold">{n.title}</span>
                {n.pinned && <Pin className="h-4 w-4 shrink-0 fill-current" />}
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-ink/70">{n.content}</p>
            </button>
          ))}
        </div>

        <NBCard className="p-5">
          {active ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent font-display text-2xl font-extrabold outline-hidden"
                  aria-label="Note title"
                />
                <div className="flex items-center gap-2">
                  {savedAt && <Sticker tone="green">Saved {savedAt}</Sticker>}
                  <NBButton
                    tone={active.pinned ? "yellow" : "paper"}
                    size="icon"
                    aria-label="Pin note"
                    onClick={() =>
                      save.mutate({ id: active.id, title, content, pinned: !active.pinned })
                    }
                  >
                    <Pin className={cn("h-4 w-4", active.pinned && "fill-current")} />
                  </NBButton>
                  <NBButton
                    tone="paper"
                    size="icon"
                    aria-label="Delete note"
                    onClick={() => {
                      del.mutate(active.id, { onSuccess: () => toast.success("Note deleted") });
                      setActiveId(null);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </NBButton>
                </div>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                placeholder="# What I learned today…"
                aria-label="Note content"
                className="mt-4 w-full resize-y bg-transparent font-mono text-sm leading-relaxed outline-hidden"
              />
            </>
          ) : (
            <div className="grid min-h-[280px] place-items-center text-center">
              <div>
                <h2 className="text-2xl">Pick a note, or start a new one</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Everything autosaves as you type.
                </p>
              </div>
            </div>
          )}
        </NBCard>
      </div>
    </div>
  );
}
