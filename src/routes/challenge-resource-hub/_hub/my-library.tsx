import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useResources, useBooks, useBookProgress, useResourceProgress } from "@/lib/data";
import { ResourceGrid } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/challenge-resource-hub/_hub/my-library")({
  head: () => ({
    meta: [
      { title: "My library — CodeSpark Innovation Hub" },
      { name: "description", content: "Everything you bookmarked, favourited and completed, in one place." },
      { property: "og:title", content: "My library — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Your saved resources, books and finished courses." },
    ],
  }),
  component: MyLibraryPage,
});

const TABS = ["Bookmarked", "Favourites", "Completed", "Books"] as const;

function MyLibraryPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Bookmarked");
  const { data: resources } = useResources();
  const { data: progress } = useResourceProgress();
  const { data: books } = useBooks();
  const { data: bookProgress } = useBookProgress();

  const byFlag = (fn: (p: NonNullable<typeof progress>[number]) => boolean) =>
    (resources ?? []).filter((r) => progress?.some((p) => p.resource_id === r.id && fn(p)));

  const savedBooks = (books ?? []).filter((b) => bookProgress?.some((p) => p.book_id === b.id && (p.favorite || p.bookmarked)));

  return (
    <div>
      <PageHeader eyebrow="Saved by you" title="My library" subtitle="The shortlist you keep coming back to." />

      <div className="mb-8 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${tab === t ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface)] border-[var(--border)] hover:bg-[var(--surface-2)]"}`} style={tab !== t ? { borderColor: "var(--border)", color: "var(--muted)" } : undefined}>
            {t}
          </button>
        ))}
      </div>

      {tab === "Bookmarked" && <ResourceGrid resources={byFlag((p) => p.bookmarked)} />}
      {tab === "Favourites" && <ResourceGrid resources={byFlag((p) => p.favorite)} />}
      {tab === "Completed" && <ResourceGrid resources={byFlag((p) => p.status === "completed")} />}
      {tab === "Books" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedBooks.length === 0 && (
            <Card className="p-8 text-center sm:col-span-2 lg:col-span-3">
              <h3 className="font-display text-lg font-semibold">No saved books yet</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Favourite a book on the shelf and it shows up here.</p>
            </Card>
          )}
          {savedBooks.map((b) => (
            <Card key={b.id} hover className="p-5">
              <Badge variant="soft">{b.difficulty}</Badge>
              <h3 className="mt-3 font-display text-lg font-semibold leading-tight">{b.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{b.author}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
