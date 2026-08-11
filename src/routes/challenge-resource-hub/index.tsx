import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Rocket,
  BookOpen,
  Award,
  Sparkles,
  Trophy,
  NotebookPen,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-learning.png";
import { NBButton, NBCard, Sticker, FloatingShapes, accentOf } from "@/components/nb";

export const Route = createFileRoute("/challenge-resource-hub/")({
  head: () => ({
    meta: [
      { title: "CodeSpark Innovation Hub — Your learning companion" },
      {
        name: "description",
        content:
          "The learning companion for every CodeSpark Innovation Challenge participant: curated resources, books, certifications, AI tools, streaks and progress tracking.",
      },
      { property: "og:title", content: "CodeSpark Innovation Hub" },
      {
        property: "og:description",
        content:
          "Curated resources, books, certifications and AI tools — with streaks, notes and progress tracking for the 8-week challenge.",
      },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  {
    icon: Rocket,
    tone: "orange",
    title: "Resource library",
    body: "70+ curated official resources across 16 categories, mapped to the 8-week curriculum.",
  },
  {
    icon: BookOpen,
    tone: "teal",
    title: "Book shelf",
    body: "Founder classics with reading progress, reflections and weekly reading challenges.",
  },
  {
    icon: Award,
    tone: "green",
    title: "Certification hub",
    body: "Every certificate-bearing course in one place, sorted by level and tracked to completion.",
  },
  {
    icon: Sparkles,
    tone: "purple",
    title: "AI toolkit",
    body: "The nine tools worth learning, with use cases and prompt templates you can steal.",
  },
  {
    icon: NotebookPen,
    tone: "pink",
    title: "Learning notes",
    body: "Your own notebook that autosaves — pin what matters, search everything.",
  },
  {
    icon: Trophy,
    tone: "yellow",
    title: "Streaks & XP",
    body: "Daily streaks, achievements and levels that make coming back the easy choice.",
  },
];

const MODULES = [
  { n: 1, title: "Entrepreneurial Mindset", weeks: "Week 1", tone: "orange" },
  { n: 2, title: "Design Thinking", weeks: "Weeks 2–6", tone: "purple" },
  { n: 3, title: "Go-To-Market", weeks: "Weeks 7–8", tone: "teal" },
];

function Landing() {
  return (
    <div className="hub-root min-h-screen bg-cream">
      <header className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-[3px] border-ink bg-brand-orange shadow-brutal-sm">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="truncate font-display text-lg font-extrabold">CodeSpark Hub</span>
          </div>
          <Link to="/challenge-resource-hub/auth">
            <NBButton tone="yellow">Get started</NBButton>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-sky">
        <div className="dotted-paper absolute inset-0" aria-hidden />
        <FloatingShapes className="hidden lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-rise">
            <Sticker tone="yellow">CodeSpark Innovation Challenge</Sticker>
            <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Innovation Hub
            </h1>
            <p className="mt-4 max-w-xl font-display text-xl font-bold sm:text-2xl">
              The learning companion for every participant.
            </p>
            <p className="mt-4 max-w-xl text-base text-ink/80 sm:text-lg">
              Not a pile of links. A place you open every day for eight weeks — curated resources,
              books, certifications and AI tools, with streaks and progress that prove how far
              you've come.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/challenge-resource-hub/auth">
                <NBButton tone="orange" size="lg">
                  Start learning <ArrowRight className="h-5 w-5" />
                </NBButton>
              </Link>
              <a href="#what-you-get">
                <NBButton tone="paper" size="lg">
                  See what's inside
                </NBButton>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Sticker tone="orange">
                <Flame className="h-3.5 w-3.5" /> Daily streaks
              </Sticker>
              <Sticker tone="teal">70+ resources</Sticker>
              <Sticker tone="pink">8 weeks</Sticker>
            </div>
          </div>

          <div className="relative">
            <div className="rotate-1 rounded-3xl border-[3px] border-ink bg-paper p-4 shadow-brutal-xl">
              <img
                src={heroImage}
                alt="Illustration of young founders learning together around a laptop with rockets and books"
                width={1200}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          <Sticker tone="purple">What's inside</Sticker>
          <h2 className="mt-4 text-4xl sm:text-5xl">Everything you need between sessions</h2>
          <p className="mt-3 text-muted-foreground">
            Live sessions spark the idea. This is where the competence gets built.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <NBCard key={f.title} hover className="p-6">
              <span
                className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border-[3px] border-ink shadow-brutal-sm ${accentOf(f.tone)}`}
              >
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </NBCard>
          ))}
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-brand-yellow py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl sm:text-5xl">Built around the curriculum</h2>
          <p className="mt-3 max-w-xl text-ink/80">
            Every resource lands under the module and week it belongs to, so you always know what to
            study next.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {MODULES.map((m) => (
              <NBCard key={m.n} hover className="p-6">
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl border-[3px] border-ink font-display text-xl font-extrabold shadow-brutal-sm ${accentOf(m.tone)}`}
                  >
                    {m.n}
                  </span>
                  <Sticker tone="paper" className="bg-cream">
                    {m.weeks}
                  </Sticker>
                </div>
                <h3 className="mt-4 text-2xl">{m.title}</h3>
              </NBCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl">Leave with habits, not just notes</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Certificates earned, books finished, a portfolio of what you learned — and a streak you
          don't want to break.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/challenge-resource-hub/auth">
            <NBButton tone="orange" size="lg">
              Get started <ArrowRight className="h-5 w-5" />
            </NBButton>
          </Link>
        </div>
      </section>

      <footer className="border-t-[3px] border-ink bg-paper px-4 py-8 text-center text-sm text-muted-foreground">
        CodeSpark Innovation Hub — keep learning, keep shipping.
      </footer>
    </div>
  );
}
