import { useEffect, useState } from "react";

const STORAGE_KEY = "codespark-theme";

/* Shared theme source of truth. Every shell/route that renders themed UI should
   use this hook so a hard refresh on any route keeps the visitor's choice. */
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  return [theme, setTheme] as const;
}
