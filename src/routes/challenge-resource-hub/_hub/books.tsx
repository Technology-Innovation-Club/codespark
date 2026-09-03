import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, ExternalLink, Heart, Check } from "lucide-react";
import { toast } from "sonner";
import { useBooks, useBookProgress, useUpdateBookProgress, useCategories, type Book } from "@/lib/data";
import { celebrate } from "@/lib/celebrate";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/books")({
  head: () => ({
    meta: [
      { title: "Bookshelf — CodeSpark Innovation Hub" },
      { name: "description", content: "Founder classics with reading progress, reflections, downloads and weekly reading challenges." },
      { property: "og:title", content: "Bookshelf — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Read, track and reflect on founder classics." },
    ],
  }),
  component: BooksPage,
});

function BooksPage() {
  const { data: books, isLoading } = useBooks();
  const { data: progress } = useBookProgress();
  const finished = (progress ?? []).filter((p) => p.status === "completed").length;

  return (
    <div>
      <PageHeader eyebrow="Read something that changes how you think" title="Bookshelf" subtitle="Books live in Drive — track your reading, jot reflections and finish what you start." />

      <Card className="mb-8 grid items-center gap-6 p-6 md:grid-cols-[1.4fr_320px]" style={{ background: "var(--accent-soft)", borderColor: "color-mix(in srgb, var(--accent) 14%, transparent)" }}>
        <div>
          <Badge variant="soft">Reading challenge</Badge>
          <h2 className="mt-3 font-display text-2xl font-semibold">Finish one book every two weeks</h2>
          <p className="mt-2 max-w-lg text-sm" style={{ color: "var(--muted)" }}>Four books by the end of the challenge. You've finished {finished} so far.</p>
          <div className="mt-4 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={cn("grid h-9 w-9 place-items-center rounded-full border text-xs", i < finished ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface)] border-[var(--border)]")} style={i >= finished ? { borderColor: "var(--border)", color: "var(--muted)" } : undefined}>
                <BookOpen className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
        <div className="hidden place-items-center md:grid">
          <div className="grid h-32 w-32 place-items-center rounded-full bg-[var(--surface)] text-[var(--accent)]" style={{ border: "1px solid var(--border)" }}>
            <BookOpen className="h-10 w-10" />
          </div>
        </div>
      </Card>

      {isLoading ? (
        <p className="text-sm" style={{ color: "var(--muted)" }}>Loading the shelf…</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(books ?? []).map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      )}
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  const { data: progress } = useBookProgress();
  const { data: categories } = useCategories();
  const update = useUpdateBookProgress();
  const p = progress?.find((x) => x.book_id === book.id);
  const [pct, setPct] = useState(p?.progress_pct ?? 0);
  const [reflection, setReflection] = useState(p?.reflection ?? "");
  const category = categories?.find((c) => c.id === book.category_id);

  function save(patch: Parameters<typeof update.mutate>[0]["patch"], msg: string) {
    update.mutate({ book: book.id, patch }, { onSuccess: () => toast.success(msg) });
  }

  const done = p?.status === "completed";

  return (
    <Card hover className="flex h-full flex-col p-5">
      <div className="grid h-40 place-items-center overflow-hidden rounded-[16px] border bg-[var(--surface-2)] p-3 text-center" style={{ borderColor: "var(--border)" }}>
        {book.cover_url ? (
          <img src={book.cover_url} alt={`Cover of ${book.title}`} loading="lazy" className="h-full w-auto rounded-lg object-contain" />
        ) : (
          <span className="font-display text-lg font-semibold leading-tight">{book.title}</span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-tight">{book.title}</h3>
      <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>{book.author}</p>
      <p className="mt-2 line-clamp-3 text-sm" style={{ color: "var(--muted)" }}>{book.description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant="soft">{book.difficulty}</Badge>
        {category && <Badge variant="secondary">{category.name}</Badge>}
        <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>~{Math.round(book.reading_minutes / 60)} hrs</span>
      </div>

      <div className="mt-4">
        <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>Reading progress — {pct}%</label>
        <input
          type="range" min={0} max={100} step={5} value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          onPointerUp={() => save({ progress_pct: pct, status: pct >= 100 ? "completed" : "in_progress" }, "Progress saved")}
          className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[var(--surface-2)] accent-[var(--accent)]"
          aria-label={`Reading progress for ${book.title}`}
        />
      </div>

      <details className="mt-3">
        <summary className="cursor-pointer text-sm font-medium" style={{ color: "var(--ink)" }}>Reflection</summary>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          onBlur={() => reflection !== p?.reflection && save({ reflection }, "Reflection saved")}
          rows={3}
          placeholder="What idea will you actually use?"
          className="mt-2 w-full rounded-[12px] border bg-[var(--surface)] p-3 text-sm outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_14%,transparent)]"
          style={{ borderColor: "var(--border)" }}
        />
      </details>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {book.drive_url && (
          <a href={book.drive_url} target="_blank" rel="noopener noreferrer">
            <Button size="sm">Open <ExternalLink className="h-4 w-4" /></Button>
          </a>
        )}
        {book.download_url && (
          <a href={book.download_url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm"><Download className="h-4 w-4" /> Download</Button>
          </a>
        )}
        <Button
          variant={done ? "default" : "outline"} size="sm"
          className={done ? "bg-[#10b981] hover:bg-[#0d9a6b] border-[#10b981] text-white" : ""}
          onClick={() => {
            if (!done) { celebrate(); setPct(100); }
            save({ status: done ? "in_progress" : "completed", progress_pct: done ? pct : 100 }, done ? "Back to reading" : "Book finished! +150 XP");
          }}
        >
          <Check className="h-4 w-4" /> {done ? "Finished" : "Mark finished"}
        </Button>
        <Button
          variant={p?.favorite ? "soft" : "outline"} size="icon" aria-label="Favourite book"
          onClick={() => save({ favorite: !p?.favorite }, p?.favorite ? "Removed" : "Favourited")}
        >
          <Heart className={cn("h-4 w-4", p?.favorite && "fill-current")} />
        </Button>
      </div>
    </Card>
  );
}
