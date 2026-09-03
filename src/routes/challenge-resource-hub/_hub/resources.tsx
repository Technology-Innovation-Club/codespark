import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useCategories } from "@/lib/data";
import { ResourceGrid, ResourceGridSkeleton, useFilteredResources } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/resources")({
  head: () => ({
    meta: [
      { title: "Resource library — CodeSpark Innovation Hub" },
      { name: "description", content: "Browse 70+ curated official learning resources across 16 categories, filtered by difficulty, duration and certificate." },
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

  const { list, isLoading } = useFilteredResources({ search, category, difficulty, certificate, sort, onlyCompleted, onlyBookmarked });

  return (
    <div>
      <PageHeader eyebrow="The heart of the Hub" title="Resource library" subtitle="Every resource is official, free to start, and mapped to a CodeSpark module." />

      <Card className="mb-6 p-4">
        <div className="flex flex-col gap-4">
          <label className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "var(--muted)" }} />
            <Input className="h-11 rounded-full pl-9" placeholder="Search resources, platforms or skills…" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search resources" />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
            </span>
            {["beginner", "intermediate", "advanced"].map((d) => (
              <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(difficulty === d ? null : d)}>{d}</Chip>
            ))}
            <Chip active={certificate} onClick={() => setCertificate(!certificate)}>Certificate</Chip>
            <Chip active={onlyBookmarked} onClick={() => setOnlyBookmarked(!onlyBookmarked)}>Bookmarked</Chip>
            <Chip active={onlyCompleted} onClick={() => setOnlyCompleted(!onlyCompleted)}>Completed</Chip>
            <span className="mx-1 hidden h-6 w-px bg-[var(--border)] sm:block" />
            {SORTS.map((s) => (
              <Chip key={s.key} active={sort === s.key} onClick={() => setSort(s.key)}>{s.label}</Chip>
            ))}
          </div>
        </div>
      </Card>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <label className="inline-flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>Browse by category</span>
          <select
            value={category ?? ""}
            onChange={(e) => setCategory(e.target.value === "" ? null : e.target.value)}
            className="h-11 min-w-56 cursor-pointer rounded-full border bg-[var(--surface)] px-4 text-sm font-medium focus-visible:outline-none focus-visible:border-[var(--accent)] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_14%,transparent)]"
            style={{ borderColor: "var(--border)" }}
            aria-label="Filter by category"
          >
            <option value="">All categories</option>
            {(categories ?? []).map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
        {!category && <p className="text-xs" style={{ color: "var(--muted)" }}>Or jump straight into a category below.</p>}
      </div>

      {!category && (
        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(categories ?? []).slice(0, 8).map((c) => (
            <Link key={c.id} to="/challenge-resource-hub/category/$slug" params={{ slug: c.slug }}>
              <Card hover className="h-full p-4">
                <Badge variant="soft" className="capitalize">{c.name}</Badge>
                <p className="mt-2 line-clamp-2 text-xs" style={{ color: "var(--muted)" }}>{c.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <div className="mb-4 flex items-center gap-3">
        <h2 className="font-display text-xl font-semibold">{list.length} resources</h2>
        <Badge variant="soft">Updated weekly</Badge>
      </div>

      {isLoading ? <ResourceGridSkeleton /> : <ResourceGrid resources={list} />}
    </div>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-medium capitalize transition-colors",
        active ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface)] border-[var(--border)] hover:bg-[var(--surface-2)]",
      )}
      style={!active ? { borderColor: "var(--border)", color: "var(--muted)" } : undefined}
    >
      {children}
    </button>
  );
}
