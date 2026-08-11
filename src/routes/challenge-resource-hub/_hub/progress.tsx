import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Flame, Clock, Target, BookOpen } from "lucide-react";
import {
  useDailyActivity,
  useResources,
  useResourceProgress,
  useCategories,
  useStreak,
  useBookProgress,
  useProfile,
} from "@/lib/data";
import { NBCard, ProgressRing, Sticker, accentOf } from "@/components/nb";
import { PageHeader } from "@/components/AppShell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/progress")({
  head: () => ({
    meta: [
      { title: "Learning analytics — CodeSpark Innovation Hub" },
      {
        name: "description",
        content:
          "Hours learned, streaks, completion rate, heatmap and your most studied categories.",
      },
      { property: "og:title", content: "Learning analytics — CodeSpark Innovation Hub" },
      { property: "og:description", content: "See the shape of your learning over eight weeks." },
    ],
  }),
  component: ProgressPage,
});

function lastDays(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(Date.now() - (n - 1 - i) * 86400000);
    return d.toISOString().slice(0, 10);
  });
}

function ProgressPage() {
  const { data: activity } = useDailyActivity();
  const { data: resources } = useResources();
  const { data: progress } = useResourceProgress();
  const { data: categories } = useCategories();
  const { data: streak } = useStreak();
  const { data: bookProgress } = useBookProgress();
  const { data: profile } = useProfile();

  const days = lastDays(14).map((date) => ({
    date,
    label: new Date(date).toLocaleDateString(undefined, { weekday: "short" }),
    minutes: activity?.find((a) => a.activity_date === date)?.minutes ?? 0,
  }));

  const heatmap = lastDays(56).map((date) => ({
    date,
    minutes: activity?.find((a) => a.activity_date === date)?.minutes ?? 0,
  }));

  const courseResources = (resources ?? []).filter((r) => r.resource_type !== "ai_tool");
  const completed = (progress ?? []).filter((p) => p.status === "completed");
  const completionPct = courseResources.length
    ? (completed.length / courseResources.length) * 100
    : 0;
  const totalMinutes = (activity ?? []).reduce((s, a) => s + a.minutes, 0);

  const perCategory = (categories ?? [])
    .map((c) => ({
      category: c,
      count: completed.filter(
        (p) => courseResources.find((r) => r.id === p.resource_id)?.category_id === c.id,
      ).length,
    }))
    .sort((a, b) => b.count - a.count);
  const top = perCategory[0];

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Proof of work"
        title="Learning analytics"
        subtitle="Consistency compounds. Here's what the last eight weeks actually look like."
      />

      <div className="grid gap-6 lg:grid-cols-4">
        <NBCard className="flex items-center gap-4 bg-brand-orange p-5">
          <Flame className="h-10 w-10 animate-flame" />
          <div>
            <p className="font-display text-3xl font-extrabold leading-none">
              {streak?.current_streak ?? 0}
            </p>
            <p className="text-xs font-semibold">day streak</p>
          </div>
        </NBCard>
        <NBCard className="flex items-center gap-4 p-5">
          <Clock className="h-8 w-8" />
          <div>
            <p className="font-display text-3xl font-extrabold leading-none">
              {Math.round(totalMinutes / 60)}
            </p>
            <p className="text-xs font-semibold text-muted-foreground">hours learned</p>
          </div>
        </NBCard>
        <NBCard className="flex items-center gap-4 p-5">
          <Target className="h-8 w-8" />
          <div>
            <p className="font-display text-3xl font-extrabold leading-none">{completed.length}</p>
            <p className="text-xs font-semibold text-muted-foreground">resources completed</p>
          </div>
        </NBCard>
        <NBCard className="flex items-center gap-4 p-5">
          <BookOpen className="h-8 w-8" />
          <div>
            <p className="font-display text-3xl font-extrabold leading-none">
              {(bookProgress ?? []).filter((b) => b.status === "completed").length}
            </p>
            <p className="text-xs font-semibold text-muted-foreground">books finished</p>
          </div>
        </NBCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <NBCard className="p-6 lg:col-span-2">
          <h2 className="text-2xl">Minutes learned — last 14 days</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={days}>
                <CartesianGrid strokeDasharray="4 4" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} width={30} />
                <Tooltip
                  contentStyle={{
                    border: "3px solid var(--ink)",
                    borderRadius: 12,
                    background: "var(--paper)",
                    fontWeight: 700,
                  }}
                />
                <Bar dataKey="minutes" fill="var(--brand-blue)" radius={[6, 6, 0, 0]} stroke="var(--ink)" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </NBCard>

        <NBCard className="flex flex-col items-center justify-center gap-4 p-6">
          <ProgressRing value={completionPct} size={140} tone="var(--brand-purple)" />
          <div className="text-center">
            <p className="font-display text-lg font-extrabold">Challenge completion</p>
            <p className="text-sm text-muted-foreground">
              Level {profile?.level ?? 1} • {profile?.xp ?? 0} XP
            </p>
          </div>
        </NBCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <NBCard className="p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl">Consistency heatmap</h2>
            <Sticker tone="teal">Last 8 weeks</Sticker>
          </div>
          <div className="mt-4 grid grid-flow-col grid-rows-7 gap-1.5">
            {heatmap.map((d) => (
              <span
                key={d.date}
                title={`${d.date}: ${d.minutes} min`}
                className={cn(
                  "h-4 w-4 rounded-[4px] border-2 border-ink",
                  d.minutes === 0
                    ? "bg-cream"
                    : d.minutes < 30
                      ? "bg-brand-teal/50"
                      : d.minutes < 90
                        ? "bg-brand-teal"
                        : "bg-brand-green",
                )}
              />
            ))}
          </div>
        </NBCard>

        <NBCard className="p-6">
          <h2 className="text-2xl">Most studied</h2>
          {top && top.count > 0 ? (
            <>
              <div
                className={cn(
                  "mt-4 rounded-xl border-[3px] border-ink p-4 shadow-brutal-sm",
                  accentOf(top.category.color),
                )}
              >
                <p className="font-display text-lg font-extrabold">{top.category.name}</p>
                <p className="text-sm">{top.count} completed</p>
              </div>
              <ul className="mt-4 space-y-2">
                {perCategory.slice(1, 5).map((c) => (
                  <li key={c.category.id} className="flex justify-between text-sm font-semibold">
                    <span className="truncate">{c.category.name}</span>
                    <span className="text-muted-foreground">{c.count}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              Complete a resource and this fills in.
            </p>
          )}
        </NBCard>
      </div>
    </div>
  );
}
