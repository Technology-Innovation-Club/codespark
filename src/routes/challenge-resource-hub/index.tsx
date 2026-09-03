import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Rocket, BookOpen, Award, Sparkles, Trophy, NotebookPen, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/challenge-resource-hub/")({
  head: () => ({
    meta: [
      { title: "CodeSpark Innovation Hub — Your learning companion" },
      { name: "description", content: "The learning companion for every CodeSpark Innovation Challenge participant: curated resources, books, certifications, AI tools, streaks and progress tracking." },
      { property: "og:title", content: "CodeSpark Innovation Hub" },
      { property: "og:description", content: "Curated resources, books, certifications and AI tools — with streaks, notes and progress tracking for the 8-week challenge." },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: Rocket, title: "Resource library", body: "70+ curated official resources across 16 categories, mapped to the 8-week curriculum." },
  { icon: BookOpen, title: "Book shelf", body: "Founder classics with reading progress, reflections and weekly reading challenges." },
  { icon: Award, title: "Certification hub", body: "Every certificate-bearing course in one place, sorted by level and tracked to completion." },
  { icon: Sparkles, title: "AI toolkit", body: "The nine tools worth learning, with use cases and prompt templates you can steal." },
  { icon: NotebookPen, title: "Learning notes", body: "Your own notebook that autosaves — pin what matters, search everything." },
  { icon: Trophy, title: "Streaks & XP", body: "Daily streaks, achievements and levels that make coming back the easy choice." },
];

const MODULES = [
  { n: 1, title: "Entrepreneurial Mindset", weeks: "Week 1" },
  { n: 2, title: "Design Thinking", weeks: "Weeks 2–6" },
  { n: 3, title: "Go-To-Market", weeks: "Weeks 7–8" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="sticky top-0 z-40 border-b bg-[var(--surface)] backdrop-blur-xl" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-5 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
            <span className="font-display text-[17px] font-semibold tracking-tight">CodeSpark Hub</span>
            <Badge variant="soft" className="hidden sm:inline-flex">Clarity</Badge>
          </div>
          <Link to="/challenge-resource-hub/auth"><Button>Get started</Button></Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-5 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge variant="soft">CodeSpark Innovation Challenge</Badge>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl">Innovation Hub</h1>
            <p className="mt-4 font-display text-xl font-medium">The learning companion for every participant.</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Not a pile of links. A place you open every day for eight weeks — curated resources, books, certifications and AI tools, with streaks and progress that prove how far you've come.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/challenge-resource-hub/auth"><Button size="lg">Start learning <ArrowRight className="h-4 w-4" /></Button></Link>
              <a href="#what-you-get"><Button variant="outline" size="lg">See what's inside</Button></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="soft"><Flame className="h-3.5 w-3.5" /> Daily streaks</Badge>
              <Badge variant="secondary">70+ resources</Badge>
              <Badge variant="secondary">8 weeks</Badge>
            </div>
          </div>
          <Card className="overflow-hidden p-2.5">
            <div className="overflow-hidden rounded-[16px] bg-[var(--surface-2)] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-4">
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>Active sprint</p>
                  <p className="mt-1 font-display text-sm font-semibold">Week 5 — Production</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--surface-2)]"><div className="h-full rounded-full bg-[var(--accent)]" style={{ width: "64%" }} /></div>
                  <div className="mt-2 flex justify-between text-xs" style={{ color: "var(--muted)" }}><span>64% complete</span><span>11 days left</span></div>
                </Card>
                <Card className="hidden flex-col gap-2 p-4 sm:flex">
                  <div className="flex items-center justify-between"><span className="text-xs font-semibold">Team Atlas</span><span className="h-2 w-2 rounded-full bg-[var(--accent)]" /></div>
                  <div className="h-px bg-[var(--border)]" />
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 rounded-full border bg-[var(--surface-2)] px-3 py-2" style={{ borderColor: "var(--border)" }}><span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--accent)] text-[10px] text-white">✓</span> Demo ready</div>
                    <div className="flex items-center gap-2 rounded-full border bg-[var(--surface)] px-3 py-2" style={{ borderColor: "var(--border)" }}><span className="grid h-5 w-5 place-items-center rounded-full border bg-[var(--surface)]" style={{ borderColor: "var(--border)" }}>◍</span> Pitch review</div>
                  </div>
                </Card>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs" style={{ color: "var(--muted)" }}>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--accent)]" /> Live cohort — 20 teams</span><span>Next review today 4pm</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="what-you-get" className="mx-auto max-w-[1280px] px-5 py-16">
        <div className="max-w-2xl">
          <Badge variant="soft">What's inside</Badge>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need between sessions</h2>
          <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>Live sessions spark the idea. This is where the competence gets built.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} hover className="p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"><f.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-8">
        <Card className="p-7" style={{ background: "var(--accent-soft)", borderColor: "color-mix(in srgb, var(--accent) 14%, transparent)" }}>
          <h2 className="font-display text-2xl font-semibold">Built around the curriculum</h2>
          <p className="mt-2 max-w-xl text-sm" style={{ color: "var(--muted)" }}>Every resource lands under the module and week it belongs to, so you always know what to study next.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {MODULES.map((m) => (
              <Card key={m.n} className="p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)] font-display text-sm font-bold text-white">{m.n}</span>
                  <Badge variant="secondary">{m.weeks}</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{m.title}</h3>
              </Card>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h2 className="font-display text-3xl font-semibold">Leave with habits, not just notes</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm" style={{ color: "var(--muted)" }}>Certificates earned, books finished, a portfolio of what you learned — and a streak you don't want to break.</p>
        <div className="mt-8 flex justify-center"><Link to="/challenge-resource-hub/auth"><Button size="lg">Get started <ArrowRight className="h-4 w-4" /></Button></Link></div>
      </section>

      <footer className="border-t bg-[var(--surface)] px-5 py-8 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>CodeSpark Innovation Hub — keep learning, keep shipping.</footer>
    </div>
  );
}
