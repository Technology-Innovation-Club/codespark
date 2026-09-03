import { useMemo, useState } from "react";
import { ExternalLink, Check, Bookmark, Heart, Clock, BadgeCheck } from "lucide-react";
import { toast } from "sonner";
import {
  useResources,
  useResourceProgress,
  useUpdateResourceProgress,
  useCategories,
  type Resource,
} from "@/lib/data";
import { celebrate } from "@/lib/celebrate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DIFFICULTY_VARIANT: Record<string, "soft" | "secondary" | "default"> = {
  beginner: "soft",
  intermediate: "secondary",
  advanced: "default",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  const { data: progress } = useResourceProgress();
  const { data: categories } = useCategories();
  const update = useUpdateResourceProgress();
  const [justDone, setJustDone] = useState(false);

  const p = progress?.find((x) => x.resource_id === resource.id);
  const done = p?.status === "completed";
  const category = categories?.find((c) => c.id === resource.category_id);

  function setPatch(patch: Parameters<typeof update.mutate>[0]["patch"], msg: string) {
    update.mutate(
      { resource: resource.id, patch, minutes: resource.duration_minutes },
      { onSuccess: () => toast.success(msg) },
    );
  }

  function toggleComplete() {
    if (done) {
      setPatch({ status: "not_started" }, "Marked as not started");
      return;
    }
    setJustDone(true);
    celebrate();
    setPatch({ status: "completed" }, `Nice! +50 XP for ${resource.title}`);
    setTimeout(() => setJustDone(false), 400);
  }

  return (
    <Card hover className={cn("flex h-full flex-col p-5", justDone && "animate-[pop_0.28s_ease]")}>
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white"
          aria-hidden
        >
          {(resource.platform ?? resource.title).charAt(0).toUpperCase()}
        </span>
        <div className="flex gap-1">
          <IconToggle
            active={!!p?.bookmarked}
            label="Save for later"
            onClick={() => setPatch({ bookmarked: !p?.bookmarked }, p?.bookmarked ? "Removed" : "Saved to My Library")}
          >
            <Bookmark className={cn("h-4 w-4", p?.bookmarked && "fill-current text-[var(--accent)]")} />
          </IconToggle>
          <IconToggle
            active={!!p?.favorite}
            label="Favourite"
            onClick={() => setPatch({ favorite: !p?.favorite }, p?.favorite ? "Removed" : "Favourited")}
          >
            <Heart className={cn("h-4 w-4", p?.favorite && "fill-current text-[#f43f5e]")} />
          </IconToggle>
        </div>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-tight">{resource.title}</h3>
      {resource.platform && (
        <p className="mt-1 text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
          {resource.platform}
        </p>
      )}
      {category && (
        <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
          {category.name}
        </p>
      )}
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {resource.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {resource.tags.slice(0, 3).map((t) => (
          <span key={t} className="rounded-full border bg-[var(--surface-2)] px-2.5 py-1 text-[11px] font-medium" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <Badge variant={DIFFICULTY_VARIANT[resource.difficulty] ?? "secondary"}>{resource.difficulty}</Badge>
        <span className="inline-flex items-center gap-1 font-medium" style={{ color: "var(--muted)" }}>
          <Clock className="h-3.5 w-3.5" />
          {formatDuration(resource.duration_minutes)}
        </span>
        {resource.has_certificate && (
          <span className="inline-flex items-center gap-1 font-medium" style={{ color: "var(--muted)" }}>
            <BadgeCheck className="h-3.5 w-3.5" /> Certificate
          </span>
        )}
      </div>

      <div className="mt-5 flex gap-2">
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="default" size="sm" className="w-full">
            Open <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
        <Button variant={done ? "secondary" : "outline"} size="sm" onClick={toggleComplete} className={done ? "bg-[#10b981] text-white border-[#10b981] hover:bg-[#0d9a6b]" : ""}>
          <Check className="h-4 w-4" /> {done ? "Done" : "Mark done"}
        </Button>
      </div>
    </Card>
  );
}

function IconToggle({ active, label, onClick, children }: { active: boolean; label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full border transition-colors",
        active ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]" : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
      )}
      style={!active ? { borderColor: "var(--border)" } : undefined}
    >
      {children}
    </button>
  );
}

export function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.round(minutes / 60);
  return `${h} hr${h > 1 ? "s" : ""}`;
}

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  if (resources.length === 0) {
    return (
      <Card className="p-10 text-center">
        <h3 className="font-display text-xl font-semibold">Nothing here yet</h3>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          Try clearing a filter or searching for something else.
        </p>
      </Card>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((r) => (
        <ResourceCard key={r.id} resource={r} />
      ))}
    </div>
  );
}

export function ResourceGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-72 animate-pulse rounded-[20px] border bg-[var(--surface-2)]" style={{ borderColor: "var(--border)" }} />
      ))}
    </div>
  );
}

export function useFilteredResources(filter: {
  search: string;
  category?: string | null;
  difficulty?: string | null;
  certificate?: boolean;
  sort?: string;
  onlyCompleted?: boolean;
  onlyBookmarked?: boolean;
}) {
  const { data: resources, isLoading } = useResources();
  const { data: progress } = useResourceProgress();

  const list = useMemo(() => {
    let out = (resources ?? []).filter((r) => r.resource_type !== "ai_tool");
    const q = filter.search.trim().toLowerCase();
    if (q) {
      out = out.filter((r) =>
        [r.title, r.platform, r.description, ...r.tags].filter(Boolean).join(" ").toLowerCase().includes(q),
      );
    }
    if (filter.category) out = out.filter((r) => r.category_id === filter.category);
    if (filter.difficulty) out = out.filter((r) => r.difficulty === filter.difficulty);
    if (filter.certificate) out = out.filter((r) => r.has_certificate);
    if (filter.onlyCompleted) out = out.filter((r) => progress?.some((p) => p.resource_id === r.id && p.status === "completed"));
    if (filter.onlyBookmarked) out = out.filter((r) => progress?.some((p) => p.resource_id === r.id && p.bookmarked));

    if (filter.sort === "recommended") out = [...out].sort((a, b) => Number(b.is_recommended) - Number(a.is_recommended));
    if (filter.sort === "shortest") out = [...out].sort((a, b) => a.duration_minutes - b.duration_minutes);
    if (filter.sort === "newest") out = [...out].sort((a, b) => b.created_at.localeCompare(a.created_at));

    return out;
  }, [resources, progress, filter]);

  return { list, isLoading };
}
