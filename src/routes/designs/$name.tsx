import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";

const LABELS: Record<string, { label: string; accent: string }> = {
  aurora: { label: "Aurora (Emerald dark)", accent: "#10b981" },
  clarity: { label: "Clarity (Light blue)", accent: "#2563eb" },
  prism: { label: "Prism (Violet gradient)", accent: "#5b21b6" },
  meridian: { label: "Meridian (Amber luxury)", accent: "#d97706" },
  horizon: { label: "Horizon (Navy + gold)", accent: "#c5a55a" },
};

export const Route = createFileRoute("/designs/$name")({
  component: PrototypeRoute,
});

function PrototypeRoute() {
  const { name } = useParams({ strict: false });
  const meta = LABELS[name as string] || { label: name, accent: "#2563eb" };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-[var(--bg)]">
      <div className="flex h-16 shrink-0 items-center gap-3 border-b bg-[var(--surface)] px-5" style={{ borderColor: "var(--border)" }}>
        <Link to="/designs" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
          <span className="hidden sm:block font-display text-[15px] font-semibold tracking-tight">CodeSpark</span>
          <span className="hidden lg:inline-flex rounded-full border bg-[var(--surface-2)] px-2 py-1 text-[10px] font-medium tracking-widest" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>CLARITY</span>
        </Link>
        <span className="hidden sm:block h-4 w-px bg-[var(--border)]" />
        <span className="hidden sm:block text-sm font-semibold tracking-tight">{meta.label}</span>
        <Badge variant="soft" className="rounded-full px-2.5 py-1 text-[10px] tracking-widest">PROTOTYPE</Badge>
        <Link to="/designs" className="ml-auto text-sm font-medium text-[var(--accent)] hover:underline">← All designs</Link>
        <span className="hidden md:inline text-xs" style={{ color: "var(--muted-2)" }}>/designs/{String(name)}/</span>
      </div>
      <iframe
        src={`/designs/${String(name)}/`}
        title={meta.label}
        className="flex-1 w-full border-0 bg-white"
      />
    </div>
  );
}
