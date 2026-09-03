import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
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
  LogOut,
} from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { toast } from "sonner";
import { useProfile, useStreak } from "@/lib/data";
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

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("codespark-theme") as "light" | "dark" | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("codespark-theme", theme);
  }, [theme]);
  return [theme, setTheme] as const;
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { data: profile } = useProfile();
  const { data: streak } = useStreak();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [theme, setTheme] = useTheme();
  const [userMenu, setUserMenu] = useState(false);
  const { signOut } = useAuthActions();
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const isAuthed = !!(profile?.username || profile?.full_name);

  useEffect(() => {
    if (!userMenu) return;
    function onDown(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) setUserMenu(false);
    }
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setUserMenu(false); }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [userMenu]);

  async function handleSignOut() {
    setUserMenu(false);
    try {
      await signOut();
      toast.success("Signed out");
      navigate({ to: "/challenge-resource-hub/auth", replace: true });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sign out failed");
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* top bar 64px clarity like hub header in clarity.html */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b bg-[var(--surface)]" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between gap-4 px-5">
          <Link to="/challenge-resource-hub/dashboard" className="flex min-w-0 items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
            <span className="font-display text-[17px] font-semibold tracking-tight">Hub</span>
            <span className="hidden md:inline-flex rounded-full border bg-[var(--surface-2)] px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              Cohort 2026
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white" style={{ borderColor: "var(--accent)" }}>
              <Flame className="h-3.5 w-3.5" /> {streak?.current_streak ?? 0} day streak
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full border bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold" style={{ borderColor: "var(--border)" }}>
              {profile?.xp ?? 0} XP
            </span>

            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                aria-label="Open user menu"
                aria-haspopup="menu"
                aria-expanded={userMenu}
                onClick={() => setUserMenu((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border bg-[var(--surface)] pl-1 pr-3 py-1 hover:bg-[var(--surface-2)] transition-colors"
                style={{ borderColor: "var(--border)" }}
              >
                <img src="https://picsum.photos/seed/hub-avatar/80/80" alt="" className="h-7 w-7 rounded-full object-cover" style={{ border: "1px solid var(--border)" }} />
                <span className="hidden lg:inline max-w-[10rem] truncate text-sm font-medium">{profile?.username ?? profile?.full_name ?? "Participant"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {userMenu && (
                <div
                  role="menu"
                  className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[220px] rounded-[16px] border bg-[var(--surface)] p-2 shadow-[var(--shadow-strong)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="px-3 py-2">
                    <p className="text-sm font-semibold truncate">{profile?.username ?? profile?.full_name ?? "Participant"}</p>
                    <p className="mt-0.5 text-xs truncate" style={{ color: "var(--muted)" }}>{profile?.team ? `Team ${profile.team}` : "CodeSpark Hub"}</p>
                  </div>
                  <div className="my-1 h-px" style={{ background: "var(--border)" }} />
                  <button
                    role="menuitem"
                    onClick={handleSignOut}
                    disabled={!isAuthed}
                    className="flex w-full items-center gap-2 rounded-[12px] px-3 py-2 text-sm font-medium text-[var(--ink)] hover:bg-[var(--surface-2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>

            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4M1 12h2M21 12h2"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)] lg:hidden"
              style={{ borderColor: "var(--border)" }}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* desktop nav row */}
        <div className="mx-auto hidden max-w-[1280px] items-center gap-1 px-5 pb-3 lg:flex">
          {NAV.map((item) => (
            <NavPill key={item.to} {...item} active={pathname.startsWith(item.to)} />
          ))}
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/20 lg:hidden" onClick={() => setOpen(false)}>
          <nav className="ml-auto flex h-full w-72 flex-col gap-2 border-l bg-[var(--surface)] p-4" style={{ borderColor: "var(--border)" }} onClick={(e) => e.stopPropagation()} aria-label="Mobile">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border" style={{ borderColor: "var(--border)" }}>
                <X className="h-4 w-4" />
              </button>
            </div>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-medium",
                  pathname.startsWith(item.to) ? "bg-[var(--surface-2)] text-[var(--ink)] font-semibold" : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]",
                )}
              >
                <item.icon className="h-4 w-4" /> {item.label}
              </Link>
            ))}
            <div className="mt-3 rounded-[16px] border bg-[var(--surface-2)] p-3 text-sm font-medium" style={{ borderColor: "var(--border)" }}>
              {profile?.username ?? profile?.full_name ?? "Participant"}
              {profile?.team ? ` · ${profile.team}` : ""}
            </div>
          </nav>
        </div>
      )}

      <main className="mx-auto max-w-[1280px] px-5 py-8">{children}</main>

      <footer className="border-t bg-[var(--surface)] px-5 py-6 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
        CodeSpark Innovation Hub — keep learning, keep shipping.
      </footer>
    </div>
  );
}

function NavPill({ to, label, icon: Icon, active }: { to: string; label: string; icon: typeof Library; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)]",
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function PageHeader({ eyebrow, title, subtitle, right }: { eyebrow?: string; title: string; subtitle?: string; right?: ReactNode }) {
  return (
    <div className="mb-8 grid gap-4 sm:flex sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && <span className="font-display text-[11px] font-medium uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>{eyebrow}</span>}
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm" style={{ color: "var(--muted)" }}>{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}
