import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DESIGNS = [
  { name: "aurora", label: "Aurora", desc: "Emerald dark", accent: "#10b981" },
  { name: "clarity", label: "Clarity", desc: "Light blue", accent: "#2563eb" },
  { name: "prism", label: "Prism", desc: "Violet gradient", accent: "#5b21b6" },
  { name: "meridian", label: "Meridian", desc: "Amber luxury", accent: "#d97706" },
  { name: "horizon", label: "Horizon", desc: "Navy + gold", accent: "#c5a55a" },
];

export const Route = createFileRoute("/designs/")({
  component: DesignPicker,
});

function DesignPicker() {
  return (
    <div className="fixed inset-0 overflow-auto bg-[var(--bg)]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
          <span className="font-display text-[17px] font-semibold tracking-tight">CodeSpark</span>
          <span className="hidden sm:inline-flex rounded-full border bg-[var(--surface-2)] px-2 py-1 text-[10px] font-medium tracking-widest" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>CLARITY</span>
          <Badge variant="soft" className="ml-1 rounded-full px-2.5 py-1 text-[10px] tracking-widest">PROTOTYPE</Badge>
        </div>

        <Link to="/" className="mt-6 inline-flex text-sm font-medium hover:underline" style={{ color: "var(--muted)" }}>
          ← Back to CodeSpark
        </Link>

        <h1 className="mt-4 font-display text-[40px] sm:text-[56px] font-semibold tracking-tight leading-[0.95]">Designs</h1>
        <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
          Five redesigned surfaces. Click a card to open the prototype — it takes over the full page.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESIGNS.map((d) => (
            <Link
              key={d.name}
              to="/designs/$name"
              params={{ name: d.name }}
              className="group"
            >
              <Card hover className="flex h-full flex-col overflow-hidden p-0">
                <div className="h-1.5 w-full" style={{ background: d.accent }} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>{d.desc}</span>
                    <Badge variant="soft" className="rounded-full px-2 py-0.5 text-[10px] tracking-widest">PROTOTYPE</Badge>
                  </div>
                  <h2 className="mt-3 font-display text-[22px] font-semibold tracking-tight leading-none">{d.label}</h2>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: d.accent }}>
                    Open prototype <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
