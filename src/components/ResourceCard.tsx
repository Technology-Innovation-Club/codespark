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
import { NBButton, NBCard, Sticker, Tag, accentOf, NBSkeleton } from "@/components/nb";
import { cn } from "@/lib/utils";

const DIFFICULTY_TONE: Record<string, string> = {
  beginner: "green",
  intermediate: "yellow",
  advanced: "pink",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  const { data: progress } = useResourceProgress();
  const { data: categories } = useCategories();
  const update = useUpdateResourceProgress();
  const [justDone, setJustDone] = useState(false);

  const p = progress?.find((x) => x.resource_id === resource.id);
  const done = p?.status === "completed";
  const category = categories?.find((c) => c.id === resource.category_id);

  function set(patch: Parameters<typeof update.mutate>[0]["patch"], msg: string) {
    update.mutate(
      { resource: resource.id, patch, minutes: resource.duration_minutes },
      { onSuccess: () => toast.success(msg) },
    );
  }

  function toggleComplete() {
    if (done) {
      set({ status: "not_started" }, "Marked as not started");
      return;
    }
    setJustDone(true);
    celebrate();
    set({ status: "completed" }, `Nice! +50 XP for ${resource.title}`);
    setTimeout(() => setJustDone(false), 400);
  }

  return (
    <NBCard hover className={cn("flex h-full flex-col p-5", justDone && "animate-pop")}>
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-xl border-[3px] border-ink font-display text-base font-extrabold shadow-brutal-sm",
            accentOf(category?.color),
          )}
          aria-hidden
        >
          {(resource.platform ?? resource.title).charAt(0)}
        </span>
        <div className="flex gap-1">
          <IconToggle
            active={!!p?.bookmarked}
            label="Save for later"
            onClick={() => set({ bookmarked: !p?.bookmarked }, p?.bookmarked ? "Removed" : "Saved to My Library")}
          >
            <Bookmark className={cn("h-4 w-4", p?.bookmarked && "fill-current")} />
          </IconToggle>
          <IconToggle
            active={!!p?.favorite}
            label="Favourite"
            onClick={() => set({ favorite: !p?.favorite }, p?.favorite ? "Removed" : "Favourited")}
          >
            <Heart className={cn("h-4 w-4", p?.favorite && "fill-current")} />
          </IconToggle>
        </div>
      </div>

      <h3 className="mt-4 text-lg leading-tight">{resource.title}</h3>
      {resource.platform && (
        <p className="mt-0.5 font-display text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
          {resource.platform}
        </p>
      )}
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{resource.description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {resource.tags.slice(0, 3).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <Sticker tone={DIFFICULTY_TONE[resource.difficulty]}>{resource.difficulty}</Sticker>
        <span className="inline-flex items-center gap-1 font-semibold text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {formatDuration(resource.duration_minutes)}
        </span>
        {resource.has_certificate && (
          <span className="inline-flex items-center gap-1 font-semibold text-muted-foreground">
            <BadgeCheck className="h-3.5 w-3.5" /> Certificate
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 pt-1">
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex-1">
          <NBButton tone="blue" size="sm" className="w-full">
            Open <ExternalLink className="h-4 w-4" />
          </NBButton>
        </a>
        <NBButton tone={done ? "green" : "paper"} size="sm" onClick={toggleComplete}>
          <Check className="h-4 w-4" /> {done ? "Done" : "Mark done"}
        </NBButton>
      </div>
    </NBCard>
  );
}

function IconToggle({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "nb-focus nb-press grid h-9 w-9 place-items-center rounded-xl border-[3px] border-ink",
        active ? "bg-brand-pink shadow-brutal-sm" : "bg-paper hover:bg-cream",
      )}
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
      <NBCard className="p-10 text-center">
        <h3 className="text-xl">Nothing here yet</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Try clearing a filter or searching for something else.
        </p>
      </NBCard>
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
        <NBSkeleton key={i} className="h-72" />
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
        [r.title, r.platform, r.description, ...r.tags]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
    }
    if (filter.category) out = out.filter((r) => r.category_id === filter.category);
    if (filter.difficulty) out = out.filter((r) => r.difficulty === filter.difficulty);
    if (filter.certificate) out = out.filter((r) => r.has_certificate);
    if (filter.onlyCompleted)
      out = out.filter((r) =>
        progress?.some((p) => p.resource_id === r.id && p.status === "completed"),
      );
    if (filter.onlyBookmarked)
      out = out.filter((r) => progress?.some((p) => p.resource_id === r.id && p.bookmarked));

    if (filter.sort === "recommended")
      out = [...out].sort((a, b) => Number(b.is_recommended) - Number(a.is_recommended));
    if (filter.sort === "shortest")
      out = [...out].sort((a, b) => a.duration_minutes - b.duration_minutes);
    if (filter.sort === "newest")
      out = [...out].sort((a, b) => b.created_at.localeCompare(a.created_at));

    return out;
  }, [resources, progress, filter]);

  return { list, isLoading };
}
