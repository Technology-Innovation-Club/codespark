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
import { NBButton, NBCard, ProgressRing, Sticker, accentOf } from "@/components/nb";
import { ResourceCard } from "@/components/ResourceCard";
import { PageHeader } from "@/components/AppShell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CodeSpark Innovation Hub" },
      {
        name: "description",
        content: "Your streak, completion, current module and recommended next resources.",
      },
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
  const completionPct = courseResources.length
    ? (completed.length / courseResources.length) * 100
    : 0;
  const minutes = (activity ?? []).reduce((s, a) => s + a.minutes, 0);
  const certsEarned = completed.filter((p) =>
    courseResources.find((r) => r.id === p.resource_id)?.has_certificate,
  ).length;
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
    <div className="animate-rise">
      <PageHeader
        eyebrow="Welcome back"
        title={`Hey ${firstName} 👋`}
        subtitle="Small steps every day beat heroic weekends. Here's where you left off."
        right={
          nextUp ? (
            <a href={nextUp.url} target="_blank" rel="noopener noreferrer">
              <NBButton tone="orange" size="lg">
                Continue learning <ArrowRight className="h-5 w-5" />
              </NBButton>
            </a>
          ) : null
        }
      />

      {announcements && announcements.length > 0 && (
        <NBCard className="mb-6 flex items-start gap-4 bg-brand-yellow p-5">
          <Megaphone className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <h3 className="text-lg">{announcements[0].title}</h3>
            <p className="mt-1 text-sm">{announcements[0].body}</p>
          </div>
        </NBCard>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <NBCard className="flex items-center gap-5 bg-brand-orange p-6 lg:col-span-1">
          <Flame className="h-14 w-14 animate-flame" />
          <div>
            <p className="font-display text-5xl font-extrabold leading-none">
              {streak?.current_streak ?? 0}
            </p>
            <p className="mt-1 font-display font-extrabold">day streak</p>
            <p className="text-xs text-ink/70">Longest: {streak?.longest_streak ?? 0} days</p>
          </div>
        </NBCard>

        <NBCard className="flex items-center gap-5 p-6">
          <ProgressRing value={completionPct} />
          <div>
            <p className="font-display text-xl font-extrabold">Challenge progress</p>
            <p className="text-sm text-muted-foreground">
              {completed.length} of {courseResources.length} resources completed
            </p>
          </div>
        </NBCard>

        <NBCard className="p-6">
          <Sticker tone={currentModule?.color ?? "purple"}>
            Module {currentModule?.number ?? 1}
          </Sticker>
          <h3 className="mt-3 text-2xl">{currentModule?.title ?? "Entrepreneurial Mindset"}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{currentModule?.subtitle}</p>
          <Link to="/challenge-resource-hub/resources" className="mt-4 inline-block">
            <NBButton tone="paper" size="sm">
              Browse module resources
            </NBButton>
          </Link>
        </NBCard>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Stat icon={Target} tone="teal" label="Resources done" value={completed.length} />
        <Stat icon={Clock} tone="blue" label="Hours learned" value={Math.round(minutes / 60)} />
        <Stat icon={Award} tone="green" label="Certificates" value={certsEarned} />
        <Stat icon={BookOpen} tone="purple" label="Books finished" value={booksFinished} />
        <Stat icon={Trophy} tone="yellow" label="Learning score" value={profile?.xp ?? 0} />
        <Stat icon={Bookmark} tone="pink" label="Bookmarks" value={bookmarks} />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl">Recommended for you</h2>
            <Link to="/challenge-resource-hub/resources" className="font-display text-sm font-extrabold underline decoration-[3px] underline-offset-4">
              See all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {recommended.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <NBCard className="p-6">
            <h2 className="text-xl">Weekly challenge</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete 3 resources and write 1 learning note this week.
            </p>
            <div className="mt-4">
              <ProgressRing
                value={Math.min(100, (completed.length / 3) * 100)}
                size={80}
                tone="var(--brand-purple)"
                label={`${Math.min(completed.length, 3)}/3`}
              />
            </div>
          </NBCard>

          <NBCard className="p-6">
            <h2 className="text-xl">Currently reading</h2>
            {readingBook ? (
              <div className="mt-3">
                <p className="font-display font-extrabold">{readingBook.title}</p>
                <p className="text-sm text-muted-foreground">{readingBook.author}</p>
                <div className="mt-3 h-4 w-full overflow-hidden rounded-full border-[3px] border-ink bg-cream">
                  <div
                    className="h-full bg-brand-teal"
                    style={{ width: `${reading?.progress_pct ?? 0}%` }}
                  />
                </div>
              </div>
            ) : (
              <>
                <p className="mt-2 text-sm text-muted-foreground">
                  No book in progress. Pick one from the shelf.
                </p>
                <Link to="/challenge-resource-hub/books" className="mt-4 inline-block">
                  <NBButton tone="teal" size="sm">
                    <BookOpen className="h-4 w-4" /> Open bookshelf
                  </NBButton>
                </Link>
              </>
            )}
          </NBCard>

          <NBCard className="p-6">
            <h2 className="text-xl">Achievements</h2>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {(achievements ?? []).slice(0, 8).map((a) => {
                const has = earned?.some((e) => e.achievement_id === a.id);
                return (
                  <span
                    key={a.id}
                    title={`${a.title} — ${a.description}`}
                    className={cn(
                      "grid aspect-square place-items-center rounded-xl border-[3px] border-ink text-lg shadow-brutal-sm",
                      has ? accentOf(a.color) : "bg-muted opacity-45",
                    )}
                  >
                    <Sparkles className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </NBCard>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  tone,
  label,
  value,
}: {
  icon: typeof Target;
  tone: string;
  label: string;
  value: number;
}) {
  return (
    <NBCard hover className="p-4">
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-lg border-[3px] border-ink shadow-brutal-sm",
          accentOf(tone),
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-3 font-display text-3xl font-extrabold leading-none">{value}</p>
      <p className="mt-1 text-xs font-semibold text-muted-foreground">{label}</p>
    </NBCard>
  );
}
