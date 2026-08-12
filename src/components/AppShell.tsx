import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Rocket,
  LayoutDashboard,
  Library,
  BookOpen,
  Award,
  Sparkles,
  NotebookPen,
  Bookmark,
  BarChart3,
  Menu,
  X,
  Flame,
  CalendarCheck,
} from "lucide-react";
import { useProfile, useStreak } from "@/lib/data";
import { NBButton } from "@/components/nb";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/challenge-resource-hub/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/challenge-resource-hub/resources", label: "Resources", icon: Library },
  { to: "/challenge-resource-hub/books", label: "Books", icon: BookOpen },
  { to: "/challenge-resource-hub/certifications", label: "Certificates", icon: Award },
  { to: "/challenge-resource-hub/ai-toolkit", label: "AI Toolkit", icon: Sparkles },
  { to: "/challenge-resource-hub/attendance", label: "Attendance", icon: CalendarCheck },
  { to: "/challenge-resource-hub/notes", label: "Notes", icon: NotebookPen },
  { to: "/challenge-resource-hub/my-library", label: "My Library", icon: Bookmark },
  { to: "/challenge-resource-hub/progress", label: "Progress", icon: BarChart3 },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { data: profile } = useProfile();
  const { data: streak } = useStreak();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="hub-root min-h-screen bg-cream">
      <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 lg:flex lg:justify-between">
          <Link to="/challenge-resource-hub/dashboard" className="flex min-w-0 items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-[3px] border-ink bg-brand-orange shadow-brutal-sm">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="truncate font-display text-lg font-extrabold">CodeSpark Hub</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1 rounded-full border-[3px] border-ink bg-brand-orange px-3 py-1 font-display text-sm font-extrabold shadow-brutal-sm sm:inline-flex">
              <Flame className="h-4 w-4 animate-flame" />
              {streak?.current_streak ?? 0}
            </span>
            <span className="hidden items-center gap-1 rounded-full border-[3px] border-ink bg-brand-yellow px-3 py-1 font-display text-sm font-extrabold shadow-brutal-sm sm:inline-flex">
              {profile?.xp ?? 0} XP
            </span>
            <NBButton
              tone="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </NBButton>
            <span className="hidden max-w-[14rem] truncate rounded-full border-[3px] border-ink bg-paper px-3 py-1 font-display text-sm font-extrabold shadow-brutal-sm lg:inline-flex">
              {profile?.username ?? profile?.full_name ?? "Participant"}
            </span>

          </div>
        </div>

        <nav
          className="mx-auto hidden max-w-7xl gap-1 overflow-x-auto px-4 pb-3 lg:flex"
          aria-label="Main"
        >
          {NAV.map((item) => (
            <NavPill key={item.to} {...item} active={pathname.startsWith(item.to)} />
          ))}
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/40 lg:hidden" onClick={() => setOpen(false)}>
          <nav
            className="ml-auto flex h-full w-72 flex-col gap-2 border-l-[3px] border-ink bg-paper p-4"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-lg font-extrabold">Menu</span>
              <NBButton tone="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </NBButton>
            </div>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border-[3px] border-ink px-3 py-2 font-display font-extrabold",
                  pathname.startsWith(item.to) ? "bg-brand-yellow shadow-brutal-sm" : "bg-paper",
                )}
              >
                <item.icon className="h-4 w-4" /> {item.label}
              </Link>
            ))}
            <div className="mt-2 rounded-xl border-[3px] border-ink bg-cream px-3 py-2 font-display text-sm font-extrabold">
              {profile?.username ?? profile?.full_name ?? "Participant"}
              {profile?.team ? ` · ${profile.team}` : ""}
            </div>

          </nav>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>

      <footer className="border-t-[3px] border-ink bg-paper px-4 py-6 text-center text-sm text-muted-foreground">
        CodeSpark Innovation Hub — keep learning, keep shipping.
      </footer>
    </div>
  );
}

function NavPill({
  to,
  label,
  icon: Icon,
  active,
}: {
  to: string;
  label: string;
  icon: typeof Library;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "nb-press flex shrink-0 items-center gap-2 rounded-xl border-[3px] border-ink px-3 py-2 font-display text-sm font-extrabold",
        active ? "bg-brand-yellow shadow-brutal-sm" : "bg-paper hover:bg-cream",
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="mb-8 grid gap-4 sm:flex sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && (
          <span className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-1 text-3xl sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}
