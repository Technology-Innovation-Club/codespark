import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Flame, Clock, Target, BookOpen } from "lucide-react";
import { useDailyActivity, useResources, useResourceProgress, useCategories, useStreak, useBookProgress, useProfile } from "@/lib/data";
import { ProgressRing } from "@/components/nb";
import { PageHeader } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/challenge-resource-hub/_hub/progress")({
  head: () => ({
    meta: [
      { title: "Learning analytics — CodeSpark Innovation Hub" },
      { name: "description", content: "Hours learned, streaks, completion rate, heatmap and your most studied categories." },
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
  const completionPct = courseResources.length ? (completed.length / courseResources.length) * 100 : 0;
  const totalMinutes = (activity ?? []).reduce((s, a) => s + a.minutes, 0);

  const perCategory = (categories ?? [])
    .map((c) => ({ category: c, count: completed.filter((p) => courseResources.find((r) => r.id === p.resource_id)?.category_id === c.id).length }))
    .sort((a, b) => b.count - a.count);
  const top = perCategory[0];

  return (
    <div>
      <PageHeader eyebrow="Proof of work" title="Learning analytics" subtitle="Consistency compounds. Here's what the last eight weeks actually look like." />

      <div className="grid gap-4 lg:grid-cols-4">
        <Card className="flex items-center gap-4 p-5 text-white" style={{ background: "var(--accent)", borderColor: "var(--accent)" }}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><Flame className="h-5 w-5" /></span>
          <div>
            <p className="font-display text-2xl font-semibold leading-none">{streak?.current_streak ?? 0}</p>
            <p className="text-xs font-medium opacity-80">day streak</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"><Clock className="h-5 w-5" /></span>
          <div>
            <p className="font-display text-2xl font-semibold leading-none">{Math.round(totalMinutes / 60)}</p>
            <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>hours learned</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"><Target className="h-5 w-5" /></span>
          <div>
            <p className="font-display text-2xl font-semibold leading-none">{completed.length}</p>
            <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>resources completed</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"><BookOpen className="h-5 w-5" /></span>
          <div>
            <p className="font-display text-2xl font-semibold leading-none">{(bookProgress ?? []).filter((b) => b.status === "completed").length}</p>
            <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>books finished</p>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold">Minutes learned — last 14 days</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={days}>
                <CartesianGrid strokeDasharray="4 4" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} width={30} />
                <Tooltip contentStyle={{ border: "1px solid var(--border)", borderRadius: 12, background: "var(--surface)", fontWeight: 600 }} />
                <Bar dataKey="minutes" fill="var(--accent)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-4 p-6">
          <ProgressRing value={completionPct} size={140} tone="var(--accent)" />
          <div className="text-center">
            <p className="font-display text-base font-semibold">Challenge completion</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>Level {profile?.level ?? 1} • {profile?.xp ?? 0} XP</p>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-lg font-semibold">Consistency heatmap</h2>
            <Badge variant="soft">Last 8 weeks</Badge>
          </div>
          <div className="mt-4 grid grid-flow-col grid-rows-7 gap-1.5">
            {heatmap.map((d) => (
              <span
                key={d.date}
                title={`${d.date}: ${d.minutes} min`}
                className={cn(
                  "h-4 w-4 rounded-md border",
                  d.minutes === 0 ? "bg-[var(--surface-2)] border-[var(--border)]" : d.minutes < 30 ? "bg-[#dbeafe] border-[#bfdbfe]" : d.minutes < 90 ? "bg-[var(--accent)] border-[var(--accent)]" : "bg-[#1e40af] border-[#1e40af]",
                )}
              />
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-semibold">Most studied</h2>
          {top && top.count > 0 ? (
            <>
              <div className="mt-4 rounded-[16px] border bg-[var(--accent-soft)] p-4" style={{ borderColor: "color-mix(in srgb, var(--accent) 14%, transparent)" }}>
                <p className="font-display text-base font-semibold" style={{ color: "var(--accent-ink)" }}>{top.category.name}</p>
                <p className="text-sm" style={{ color: "var(--accent-ink)" }}>{top.count} completed</p>
              </div>
              <ul className="mt-4 space-y-2">
                {perCategory.slice(1, 5).map((c) => (
                  <li key={c.category.id} className="flex justify-between text-sm font-medium">
                    <span className="truncate">{c.category.name}</span>
                    <span style={{ color: "var(--muted)" }}>{c.count}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>Complete a resource and this fills in.</p>
          )}
        </Card>
      </div>
    </div>
  );
}
