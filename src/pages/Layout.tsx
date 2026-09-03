import { Outlet, Link, useRouterState, type LinkProps } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../data/siteData";

function navTo(path: string, basePath: string) {
  if (path === "") return (basePath || "/") as LinkProps["to"];
  return `${basePath}/${path}` as LinkProps["to"];
}

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

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useRouterState({ select: (s) => s.location });
  const basePath = "";
  const attendLink = "https://tix.africa/discover/codespark-tech-entrepreneurship-event";
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // map nav path to clarity label
  const navItems = siteData.navigation;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Header 68px clarity */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ height: 68, background: "color-mix(in srgb, var(--bg) 86%, transparent)", borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-6 px-5">
          <Link to={navTo("", basePath)} className="flex shrink-0 items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
            <span className="hidden sm:block font-display text-[17px] font-semibold tracking-tight">CodeSpark</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-[14px] font-medium" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = pathname === `${basePath}/${item.path}` || (item.path === "" && (pathname === basePath || pathname === "/"));
              return (
                <Link
                  key={item.name}
                  to={navTo(item.path, basePath)}
                  className={`relative rounded-full px-3.5 py-2 transition-colors ${isActive ? "bg-[var(--surface-2)] font-semibold text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                  {item.name}
                  {isActive && <span className="absolute inset-x-3.5 bottom-1 h-0.5 rounded-full bg-[var(--accent)]" />}
                </Link>
              );
            })}
            <Link
              to="/challenge-resource-hub/dashboard"
              className={`relative rounded-full px-3.5 py-2 transition-colors ${pathname.startsWith("/challenge-resource-hub") ? "bg-[var(--surface-2)] font-semibold text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
            >
              Hub
              {pathname.startsWith("/challenge-resource-hub") && <span className="absolute inset-x-3.5 bottom-1 h-0.5 rounded-full bg-[var(--accent)]" />}
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <a href={attendLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex h-9 items-center rounded-full border bg-[var(--surface)] px-5 text-[13px] font-semibold" style={{ borderColor: "var(--border)", color: "var(--ink)" }}>
              Attend
            </a>
            <a href="https://forms.gle/JaoSqfifwc9acdpH7" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex h-9 items-center rounded-full bg-[var(--accent)] px-5 text-[13px] font-semibold text-white">
              Apply now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-11 w-11 place-items-center rounded-full border bg-[var(--surface)] lg:hidden"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute inset-x-0 top-[68px] p-3 lg:hidden"
            >
              <div className="rounded-[20px] border bg-[var(--surface)] p-3 shadow-[var(--shadow-strong)]" style={{ borderColor: "var(--border)" }}>
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={navTo(item.path, basePath)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-[12px] px-4 py-3 text-[15px] font-medium text-[var(--ink)] hover:bg-[var(--surface-2)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/challenge-resource-hub/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-[12px] px-4 py-3 text-[15px] font-medium text-[var(--ink)] hover:bg-[var(--surface-2)]"
                  >
                    Innovation Hub
                  </Link>
                </nav>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a href={attendLink} target="_blank" rel="noopener noreferrer" className="grid h-11 place-items-center rounded-full border bg-[var(--surface-2)] text-sm font-semibold" style={{ borderColor: "var(--border)" }}>
                    Attend
                  </a>
                  <a href="https://forms.gle/JaoSqfifwc9acdpH7" target="_blank" rel="noopener noreferrer" className="grid h-11 place-items-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                    Apply now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {mobileMenuOpen && (
        <button type="button" aria-label="Close menu overlay" onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 top-[68px] z-40 bg-transparent lg:hidden" />
      )}

      <main className="relative">
        <Outlet />
      </main>

      <footer className="border-t bg-[var(--surface)]" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1280px] px-5 py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
                <span className="font-display text-[17px] font-semibold tracking-tight">CodeSpark</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {siteData.brand.tagline}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {siteData.brand.description}
              </p>
              <div className="mt-6 flex gap-2">
                {siteData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface-2)] text-xs font-semibold transition-colors hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
                    style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  >
                    {link.name[0]}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold tracking-tight">Explore</h4>
              <ul className="mt-4 space-y-3">
                {siteData.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link to={navTo(item.path, basePath)} className="text-sm hover:text-[var(--accent)]" style={{ color: "var(--muted)" }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold tracking-tight">Connect</h4>
              <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
                <li>
                  <span className="font-medium text-[var(--ink)]">Email</span> <br />
                  <a href={`mailto:${siteData.brand.email}`} className="hover:text-[var(--accent)] hover:underline">{siteData.brand.email}</a>
                </li>
                <li>
                  <span className="font-medium text-[var(--ink)]">Partners</span> <br />
                  <a href={`mailto:${siteData.brand.partnerEmail}`} className="hover:text-[var(--accent)] hover:underline">{siteData.brand.partnerEmail}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row" style={{ borderColor: "var(--border)" }}>
            <p className="text-xs" style={{ color: "var(--muted-2)" }}>
              © {new Date().getFullYear()} CodeSpark. All rights reserved.
            </p>
            <p className="text-xs font-medium tracking-wide" style={{ color: "var(--muted-2)" }}>
              BUILDING THE FUTURE — 15 UNIVERSITIES • 20 TEAMS • 8 WEEKS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
