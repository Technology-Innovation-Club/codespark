import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useCategories } from "@/lib/data";
import { NBButton, NBCard, Sticker, accentOf } from "@/components/nb";
import { ResourceGrid, ResourceGridSkeleton, useFilteredResources } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/resources")({
  head: () => ({
    meta: [
      { title: "Resource library — CodeSpark Innovation Hub" },
      {
        name: "description",
        content:
          "Browse 70+ curated official learning resources across 16 categories, filtered by difficulty, duration and certificate.",
      },
      { property: "og:title", content: "Resource library — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Curated official resources for every CodeSpark module." },
    ],
  }),
  component: ResourcesPage,
});

const SORTS = [
  { key: "recommended", label: "Recommended" },
  { key: "newest", label: "Newest" },
  { key: "shortest", label: "Quickest" },
];

function ResourcesPage() {
  const { data: categories } = useCategories();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [certificate, setCertificate] = useState(false);
  const [onlyCompleted, setOnlyCompleted] = useState(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [sort, setSort] = useState("recommended");

  const { list, isLoading } = useFilteredResources({
    search,
    category,
    difficulty,
    certificate,
    sort,
    onlyCompleted,
    onlyBookmarked,
  });

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="The heart of the Hub"
        title="Resource library"
        subtitle="Every resource is official, free to start, and mapped to a CodeSpark module."
      />

      <div className="mb-6 grid gap-3">
        <label className="flex h-12 items-center gap-2 rounded-xl border-[3px] border-ink bg-paper px-3 shadow-brutal">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            className="h-full w-full bg-transparent outline-hidden"
            placeholder="Search resources, platforms or skills…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search resources"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 font-display text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
          </span>
          {["beginner", "intermediate", "advanced"].map((d) => (
            <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(difficulty === d ? null : d)}>
              {d}
            </Chip>
          ))}
          <Chip active={certificate} onClick={() => setCertificate(!certificate)}>
            Certificate
          </Chip>
          <Chip active={onlyBookmarked} onClick={() => setOnlyBookmarked(!onlyBookmarked)}>
            Bookmarked
          </Chip>
          <Chip active={onlyCompleted} onClick={() => setOnlyCompleted(!onlyCompleted)}>
            Completed
          </Chip>
          <span className="mx-1 hidden h-6 w-[3px] bg-ink/15 sm:block" />
          {SORTS.map((s) => (
            <Chip key={s.key} active={sort === s.key} onClick={() => setSort(s.key)}>
              {s.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <label className="inline-flex flex-col gap-1">
          <span className="font-display text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
            Browse by category
          </span>
          <select
            value={category ?? ""}
            onChange={(e) => setCategory(e.target.value === "" ? null : e.target.value)}
            className="h-11 min-w-56 cursor-pointer rounded-xl border-[3px] border-ink bg-paper px-3 font-display text-sm font-bold capitalize shadow-brutal outline-hidden"
            aria-label="Filter by category"
          >
            <option value="">All categories</option>
            {(categories ?? []).map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        {!category && (
          <p className="text-xs font-medium text-ink/60">
            Or jump straight into a category below.
          </p>
        )}
      </div>

      {!category && (
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(categories ?? []).slice(0, 8).map((c) => (
            <Link key={c.id} to="/challenge-resource-hub/category/$slug" params={{ slug: c.slug }}>
              <NBCard hover className={cn("h-full p-4", accentOf(c.color))}>
                <h3 className="text-lg leading-tight">{c.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs font-medium text-ink/75">{c.description}</p>
              </NBCard>
            </Link>
          ))}
        </div>
      )}

      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-2xl">{list.length} resources</h2>
        <Sticker tone="teal">Updated weekly</Sticker>
      </div>

      {isLoading ? <ResourceGridSkeleton /> : <ResourceGrid resources={list} />}
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
  tone,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  tone?: string;
}) {
  return (
    <NBButton
      tone={active ? "ink" : "paper"}
      size="sm"
      onClick={onClick}
      className={cn("capitalize", active && tone && accentOf(tone), active && tone && "text-ink")}
    >
      {children}
    </NBButton>
  );
}
