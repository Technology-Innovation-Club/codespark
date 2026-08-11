import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useResources, useBooks, useBookProgress, useResourceProgress } from "@/lib/data";
import { NBButton, NBCard, Sticker } from "@/components/nb";
import { ResourceGrid } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";

export const Route = createFileRoute("/challenge-resource-hub/_hub/my-library")({
  head: () => ({
    meta: [
      { title: "My library — CodeSpark Innovation Hub" },
      {
        name: "description",
        content: "Everything you bookmarked, favourited and completed, in one place.",
      },
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

  const savedBooks = (books ?? []).filter((b) =>
    bookProgress?.some((p) => p.book_id === b.id && (p.favorite || p.bookmarked)),
  );

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Saved by you"
        title="My library"
        subtitle="The shortlist you keep coming back to."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <NBButton key={t} tone={tab === t ? "ink" : "paper"} size="sm" onClick={() => setTab(t)}>
            {t}
          </NBButton>
        ))}
      </div>

      {tab === "Bookmarked" && <ResourceGrid resources={byFlag((p) => p.bookmarked)} />}
      {tab === "Favourites" && <ResourceGrid resources={byFlag((p) => p.favorite)} />}
      {tab === "Completed" && <ResourceGrid resources={byFlag((p) => p.status === "completed")} />}
      {tab === "Books" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedBooks.length === 0 && (
            <NBCard className="p-8 text-center sm:col-span-2 lg:col-span-3">
              <h3 className="text-xl">No saved books yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Favourite a book on the shelf and it shows up here.
              </p>
            </NBCard>
          )}
          {savedBooks.map((b) => (
            <NBCard key={b.id} hover className="p-5">
              <Sticker tone={b.color}>{b.difficulty}</Sticker>
              <h3 className="mt-3 text-lg leading-tight">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.author}</p>
            </NBCard>
          ))}
        </div>
      )}
    </div>
  );
}
