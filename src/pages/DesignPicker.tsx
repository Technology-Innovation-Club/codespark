import { HeadContent } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DesignPicker() {
  const designs = [
    { name: "aurora", label: "Aurora (Emerald dark)", desc: "Geist sans on ink-black, emerald accent, glass cards." },
    { name: "clarity", label: "Clarity (Light blue)", desc: "Outfit display, cream surfaces, single electric-blue accent." },
    { name: "prism", label: "Prism (Violet gradient)", desc: "Sora + Space Grotesk, violet gradient, interactive bento." },
    { name: "meridian", label: "Meridian (Amber luxury)", desc: "DM Sans on near-black, amber accent, full 3-col hub." },
    { name: "horizon", label: "Horizon (Navy + gold)", desc: "Playfair Display + Inter, deep navy, gold luxury." },
  ];

  return (
    <>
      <HeadContent title="CodeSpark / Designs" />
      <main className="min-h-screen bg-[var(--bg)] px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
            <span className="font-display text-[17px] font-semibold tracking-tight">CodeSpark</span>
            <Badge variant="outline" className="hidden sm:inline-flex rounded-full bg-[var(--surface-2)] px-2 py-0.5 text-[10px] tracking-widest">CLARITY</Badge>
            <Badge variant="soft" className="ml-2 rounded-full px-2.5 py-1 text-[10px] tracking-widest">PROTOTYPE</Badge>
          </div>

          <h1 className="mt-8 font-display text-[36px] sm:text-[48px] font-semibold tracking-tight leading-[0.95]">Design picker</h1>
          <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Five redesigned surfaces for the innovation hub. Click any card to view the interactive prototype.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {designs.map((d) => (
              <a
                key={d.name}
                href={`/designs/${d.name}/`}
                className="group block"
              >
                <Card hover className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>{d.name}</span>
                    <Badge variant="soft" className="rounded-full px-2 py-0.5 text-[10px] tracking-widest">PROTOTYPE</Badge>
                  </div>
                  <h2 className="mt-4 font-display text-[18px] font-semibold tracking-tight leading-tight">{d.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                    Open prototype <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
