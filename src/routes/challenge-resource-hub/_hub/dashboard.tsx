import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Trophy,
  BookOpen,
  Award,
  Clock,
  Target,
  Bookmark,
  ArrowRight,
  Megaphone,
  Sparkles,
} from "lucide-react";
import {
  useProfile,
  useStreak,
  useResources,
  useResourceProgress,
  useBooks,
  useBookProgress,
  useModules,
  useDailyActivity,
  useAchievements,
  useUserAchievements,
  useAnnouncements,
} from "@/lib/data";
import { ProgressRing } from "@/components/nb";
import { ResourceCard } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CodeSpark Innovation Hub" },
      { name: "description", content: "Your streak, completion, current module and recommended next resources." },
      { property: "og:title", content: "Dashboard — CodeSpark Innovation Hub" },
      { property: "og:description", content: "Track your CodeSpark learning journey day by day." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { data: profile } = useProfile();
  const { data: streak } = useStreak();
  const { data: resources } = useResources();
  const { data: progress } = useResourceProgress();
  const { data: books } = useBooks();
  const { data: bookProgress } = useBookProgress();
  const { data: modules } = useModules();
  const { data: activity } = useDailyActivity();
  const { data: achievements } = useAchievements();
  const { data: earned } = useUserAchievements();
  const { data: announcements } = useAnnouncements();

  const courseResources = (resources ?? []).filter((r) => r.resource_type !== "ai_tool");
  const completed = (progress ?? []).filter((p) => p.status === "completed");
  const completionPct = courseResources.length ? (completed.length / courseResources.length) * 100 : 0;
  const minutes = (activity ?? []).reduce((s, a) => s + a.minutes, 0);
  const certsEarned = completed.filter((p) => courseResources.find((r) => r.id === p.resource_id)?.has_certificate).length;
  const booksFinished = (bookProgress ?? []).filter((b) => b.status === "completed").length;
  const reading = (bookProgress ?? []).find((b) => b.status === "in_progress");
  const readingBook = books?.find((b) => b.id === reading?.book_id);
  const bookmarks = (progress ?? []).filter((p) => p.bookmarked).length;

  const currentModule = modules?.[0];
  const recommended = courseResources
    .filter((r) => !completed.some((c) => c.resource_id === r.id))
    .sort((a, b) => Number(b.is_recommended) - Number(a.is_recommended))
    .slice(0, 3);
  const nextUp = recommended[0];
  const firstName = (profile?.full_name ?? "there").split(" ")[0];

  return (
    <div>
      <PageHeader
        eyebrow="Welcome back"
        title={`Hey ${firstName} 👋`}
        subtitle="Small steps every day beat heroic weekends. Here's where you left off."
        right={
          nextUp ? (
            <a href={nextUp.url} target="_blank" rel="noopener noreferrer">
              <Button>
                Continue learning <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          ) : null
        }
      />

      {announcements && announcements.length > 0 && (
        <Card className="mb-6 flex items-start gap-4 p-5 border-[var(--accent)] bg-[var(--accent)] text-white">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20 text-white">
            <Megaphone className="h-4 w-4" />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-white">{announcements[0].title}</h3>
            <p className="mt-1 text-sm text-white/85">{announcements[0].body}</p>
          </div>
        </Card>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="flex items-center gap-5 p-6 text-white bg-[var(--accent)] border-[var(--accent)]">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/20 text-white">
            <Flame className="h-7 w-7" />
          </span>
          <div>
            <p className="font-display text-4xl font-semibold leading-none text-white">{streak?.current_streak ?? 0}</p>
            <p className="mt-1 text-sm font-semibold text-white/90">day streak</p>
            <p className="text-xs text-white/75">Longest: {streak?.longest_streak ?? 0} days</p>
          </div>
        </Card>

        <Card className="flex items-center gap-5 p-6">
          <ProgressRing value={completionPct} />
          <div>
            <p className="font-display text-lg font-semibold">Challenge progress</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {completed.length} of {courseResources.length} resources completed
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <Badge variant="soft">Module {currentModule?.number ?? 1}</Badge>
          <h3 className="mt-3 font-display text-xl font-semibold">{currentModule?.title ?? "Entrepreneurial Mindset"}</h3>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{currentModule?.subtitle}</p>
          <Link to="/challenge-resource-hub/resources" className="mt-4 inline-block">
            <Button variant="outline" size="sm">
              Browse module resources
            </Button>
          </Link>
        </Card>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Stat icon={Target} label="Resources done" value={completed.length} />
        <Stat icon={Clock} label="Hours learned" value={Math.round(minutes / 60)} />
        <Stat icon={Award} label="Certificates" value={certsEarned} />
        <Stat icon={BookOpen} label="Books finished" value={booksFinished} />
        <Stat icon={Trophy} label="Learning score" value={profile?.xp ?? 0} />
        <Stat icon={Bookmark} label="Bookmarks" value={bookmarks} />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-display text-xl font-semibold">Recommended for you</h2>
            <Link to="/challenge-resource-hub/resources" className="text-sm font-medium hover:opacity-70" style={{ color: "var(--accent)" }}>
              See all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {recommended.slice(0, 2).map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
          {recommended.length === 0 && (
            <Card className="p-8 text-center text-sm" style={{ color: "var(--muted)" }}>All caught up — no recommendations right now.</Card>
          )}
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-display text-base font-semibold">Weekly challenge</h3>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>Complete 3 resources and write 1 learning note this week.</p>
            <div className="mt-4 flex items-center gap-4">
              <ProgressRing value={Math.min(100, (completed.length / 3) * 100)} size={80} tone="var(--accent)" label={`${Math.min(completed.length, 3)}/3`} />
              <p className="text-xs" style={{ color: "var(--muted)" }}>{Math.min(completed.length, 3)} of 3 done</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-base font-semibold">Currently reading</h3>
            {readingBook ? (
              <div className="mt-3">
                <p className="font-display text-sm font-semibold">{readingBook.title}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{readingBook.author}</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
                  <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${reading?.progress_pct ?? 0}%` }} />
                </div>
                <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{reading?.progress_pct ?? 0}% complete</p>
              </div>
            ) : (
              <>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>No book in progress. Pick one from the shelf.</p>
                <Link to="/challenge-resource-hub/books" className="mt-4 inline-block">
                  <Button variant="outline" size="sm">
                    <BookOpen className="h-4 w-4" /> Open bookshelf
                  </Button>
                </Link>
              </>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-base font-semibold">Achievements</h3>
            <div className="mt-4 grid grid-cols-4 gap-2.5">
              {(achievements ?? []).slice(0, 8).map((a) => {
                const has = earned?.some((e) => e.achievement_id === a.id);
                return (
                  <span
                    key={a.id}
                    title={`${a.title} — ${a.description}`}
                    className={cn(
                      "grid aspect-square place-items-center rounded-full border text-sm",
                      has ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface-2)] border-[var(--border)] opacity-40",
                    )}
                  >
                    <Sparkles className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
            {(achievements ?? []).length === 0 && (
              <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>Achievements will appear as you learn.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Target; label: string; value: number }) {
  return (
    <Card hover className="p-4">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-3 font-display text-2xl font-semibold leading-none">{value}</p>
      <p className="mt-1 text-xs font-semibold" style={{ color: "var(--muted)" }}>{label}</p>
    </Card>
  );
}
