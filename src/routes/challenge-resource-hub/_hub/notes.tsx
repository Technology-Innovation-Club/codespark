import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Pin, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useNotes, useSaveNote, useDeleteNote } from "@/lib/data";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/notes")({
  head: () => ({
    meta: [
      { title: "Learning notes — CodeSpark Innovation Hub" },
      { name: "description", content: "Your autosaving notebook for the challenge: pin what matters, search everything." },
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

  const list = (notes ?? []).filter((n) => `${n.title} ${n.content}`.toLowerCase().includes(search.trim().toLowerCase()));
  const active = notes?.find((n) => n.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      save.mutate({ id: activeId, title: title || "Untitled note", content }, { onSuccess: () => setSavedAt(new Date().toLocaleTimeString()) });
    }, 900);
    return () => { if (timer.current) clearTimeout(timer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content, activeId]);

  function openNote(id: string, t: string, c: string) {
    setActiveId(id); setTitle(t); setContent(c); setSavedAt(null);
  }

  function newNote() {
    save.mutate({ title: "Untitled note", content: "" }, {
      onSuccess: (id) => { openNote(id, "Untitled note", ""); toast.success("New note created"); },
    });
  }

  return (
    <div>
      <PageHeader
        eyebrow="Your second brain"
        title="Learning notes"
        subtitle="Markdown-friendly, autosaved, and searchable. Write the thing you'd want to reread in week 8."
        right={<Button onClick={newNote}><Plus className="h-4 w-4" /> New note</Button>}
      />

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-3">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "var(--muted)" }} />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notes…" aria-label="Search notes" className="rounded-full pl-9" />
          </label>

          {list.length === 0 && <Card className="p-5 text-sm" style={{ color: "var(--muted)" }}>No notes yet. Start one after your next session.</Card>}

          {list.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => openNote(n.id, n.title, n.content ?? "")}
              className={cn("w-full rounded-[16px] border p-4 text-left transition-colors", activeId === n.id ? "bg-[var(--accent-soft)] border-[color-mix(in_srgb,var(--accent)_20%,transparent)]" : "bg-[var(--surface)] border-[var(--border)] hover:bg-[var(--surface-2)]")}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display text-sm font-semibold leading-tight">{n.title}</span>
                {n.pinned && <Pin className="h-4 w-4 shrink-0 fill-current text-[var(--accent)]" />}
              </div>
              <p className="mt-1 line-clamp-2 text-xs" style={{ color: "var(--muted)" }}>{n.content}</p>
            </button>
          ))}
        </div>

        <Card className="p-5">
          {active ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="min-w-0 flex-1 bg-transparent font-display text-xl font-semibold outline-none" aria-label="Note title" />
                <div className="flex items-center gap-2">
                  {savedAt && <Badge variant="soft">Saved {savedAt}</Badge>}
                  <Button variant={active.pinned ? "default" : "outline"} size="icon" aria-label="Pin note" onClick={() => save.mutate({ id: active.id, title, content, pinned: !active.pinned })}>
                    <Pin className={cn("h-4 w-4", active.pinned && "fill-current")} />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Delete note" onClick={() => { del.mutate(active.id, { onSuccess: () => toast.success("Note deleted") }); setActiveId(null); }}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={20} placeholder="# What I learned today…" aria-label="Note content" className="mt-4 w-full resize-y rounded-[12px] border bg-[var(--surface)] p-3 font-mono text-sm leading-relaxed outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_14%,transparent)]" style={{ borderColor: "var(--border)" }} />
            </>
          ) : (
            <div className="grid min-h-[280px] place-items-center text-center">
              <div>
                <h2 className="font-display text-xl font-semibold">Pick a note, or start a new one</h2>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Everything autosaves as you type.</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
