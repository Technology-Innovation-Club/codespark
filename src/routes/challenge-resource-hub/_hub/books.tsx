import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, ExternalLink, Heart, Check } from "lucide-react";
import { toast } from "sonner";
import {
  useBooks,
  useBookProgress,
  useUpdateBookProgress,
  useCategories,
  type Book,
} from "@/lib/data";
import { celebrate } from "@/lib/celebrate";
import { NBButton, NBCard, Sticker, accentOf } from "@/components/nb";
import { PageHeader } from "@/components/AppShell";
import booksIllustration from "@/assets/books-illustration.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/books")({
  head: () => ({
    meta: [
      { title: "Bookshelf — CodeSpark Innovation Hub" },
      {
        name: "description",
        content:
          "Founder classics with reading progress, reflections, downloads and weekly reading challenges.",
      },
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
    <div className="animate-rise">
      <PageHeader
        eyebrow="Read something that changes how you think"
        title="Bookshelf"
        subtitle="Books live in Drive — track your reading, jot reflections and finish what you start."
      />

      <NBCard className="mb-8 grid items-center gap-6 bg-brand-teal p-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Sticker tone="paper" className="bg-paper">
            Reading challenge
          </Sticker>
          <h2 className="mt-3 text-3xl">Finish one book every two weeks</h2>
          <p className="mt-2 max-w-lg text-sm text-ink/80">
            Four books by the end of the challenge. You've finished {finished} so far.
          </p>
          <div className="mt-4 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-xl border-[3px] border-ink shadow-brutal-sm",
                  i < finished ? "bg-brand-yellow" : "bg-paper/60",
                )}
              >
                <BookOpen className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
        <img
          src={booksIllustration}
          alt="Illustration of a stack of colourful books"
          width={900}
          height={700}
          className="h-auto w-full max-w-xs justify-self-center"
        />
      </NBCard>

      {isLoading ? (
        <p className="text-muted-foreground">Loading the shelf…</p>
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
    <NBCard hover className="flex h-full flex-col p-5">
      <div
        className={cn(
          "grid h-40 place-items-center rounded-xl border-[3px] border-ink p-4 text-center shadow-brutal-sm",
          accentOf(book.color),
        )}
      >
        {book.cover_url ? (
          <img
            src={book.cover_url}
            alt={`Cover of ${book.title}`}
            loading="lazy"
            className="h-full w-auto object-contain"
          />
        ) : (
          <span className="font-display text-xl font-extrabold leading-tight">{book.title}</span>
        )}
      </div>

      <h3 className="mt-4 text-lg leading-tight">{book.title}</h3>
      <p className="text-sm font-semibold text-muted-foreground">{book.author}</p>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{book.description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Sticker tone={book.color}>{book.difficulty}</Sticker>
        {category && <Sticker tone="paper" className="bg-cream">{category.name}</Sticker>}
        <span className="text-xs font-semibold text-muted-foreground">
          ~{Math.round(book.reading_minutes / 60)} hrs
        </span>
      </div>

      <div className="mt-4">
        <label className="font-display text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
          Reading progress — {pct}%
        </label>
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          onPointerUp={() =>
            save({ progress_pct: pct, status: pct >= 100 ? "completed" : "in_progress" }, "Progress saved")
          }
          className="nb-focus mt-2 h-3 w-full cursor-pointer appearance-none rounded-full border-[3px] border-ink bg-cream accent-[var(--brand-teal)]"
          aria-label={`Reading progress for ${book.title}`}
        />
      </div>

      <details className="mt-3">
        <summary className="cursor-pointer font-display text-sm font-extrabold">Reflection</summary>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          onBlur={() => reflection !== p?.reflection && save({ reflection }, "Reflection saved")}
          rows={3}
          placeholder="What idea will you actually use?"
          className="nb-focus mt-2 w-full rounded-xl border-[3px] border-ink bg-paper p-2 text-sm outline-hidden"
        />
      </details>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {book.drive_url && (
          <a href={book.drive_url} target="_blank" rel="noopener noreferrer">
            <NBButton tone="blue" size="sm">
              Open <ExternalLink className="h-4 w-4" />
            </NBButton>
          </a>
        )}
        {book.download_url && (
          <a href={book.download_url} target="_blank" rel="noopener noreferrer">
            <NBButton tone="paper" size="sm">
              <Download className="h-4 w-4" /> Download
            </NBButton>
          </a>
        )}
        <NBButton
          tone={done ? "green" : "paper"}
          size="sm"
          onClick={() => {
            if (!done) {
              celebrate();
              setPct(100);
            }
            save(
              { status: done ? "in_progress" : "completed", progress_pct: done ? pct : 100 },
              done ? "Back to reading" : "Book finished! +150 XP",
            );
          }}
        >
          <Check className="h-4 w-4" /> {done ? "Finished" : "Mark finished"}
        </NBButton>
        <NBButton
          tone={p?.favorite ? "pink" : "paper"}
          size="icon"
          aria-label="Favourite book"
          onClick={() => save({ favorite: !p?.favorite }, p?.favorite ? "Removed" : "Favourited")}
        >
          <Heart className={cn("h-4 w-4", p?.favorite && "fill-current")} />
        </NBButton>
      </div>
    </NBCard>
  );
}
