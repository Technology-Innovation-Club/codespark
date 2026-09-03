import { siteData } from "../data/siteData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function displayCategory(category: string): string {
  if (category === "EdTech") return "Education";
  if (category === "MarTech") return "Marketing";
  if (category === "Sustainability") return "Sustainability";
  if (category === "Accessibility Tech") return "Accessibility";
  return category;
}

function categoryBadgeVariant(category: string): "soft" | "secondary" | "muted" | "outline" {
  if (category === "EdTech") return "soft";
  if (category === "MarTech") return "secondary";
  if (category === "Sustainability") return "soft";
  if (category === "Accessibility Tech") return "muted";
  return "soft";
}

function categorySoftStyle(category: string): React.CSSProperties | undefined {
  if (category === "Sustainability") {
    return { background: "#ecfdf5", color: "#065f46", borderColor: "#a7f3d0" };
  }
  return undefined;
}

export function Startups() {
  const industryCount = new Set(siteData.startupsList.map((s) => s.category)).size;
  const hasLiveWebsite = (website: string) =>
    website.startsWith("http://") || website.startsWith("https://");

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-5 pt-10 sm:pt-16 pb-10 text-center">
        <h1 className="font-semibold tracking-tight mx-auto" style={{ fontFamily: "Outfit, system-ui, sans-serif", fontSize: "clamp(30px,6vw,48px)", lineHeight: 1.05, maxWidth: "14ch" }}>
          Student ventures built to ship
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
          Student-built ventures from the CodeSpark Incubator. Six teams, four sectors, real users and revenue.
        </p>
      </section>

      {/* Stats bar */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-7 text-center">
            <div className="text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif", lineHeight: 1 }}>{siteData.startupsList.length}</div>
            <div className="mt-2 text-[11px] tracking-[0.08em] font-medium" style={{ color: "var(--muted)" }}>Active startups</div>
          </Card>
          <Card className="p-7 text-center">
            <div className="text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif", lineHeight: 1 }}>{industryCount}</div>
            <div className="mt-2 text-[11px] tracking-[0.08em] font-medium" style={{ color: "var(--muted)" }}>Industries</div>
          </Card>
          <Card className="p-7 text-center" style={{ background: "var(--accent)", borderColor: "var(--accent)", color: "#fff" }}>
            <div className="text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif", lineHeight: 1 }}>₦10M+</div>
            <div className="mt-2 text-[11px] tracking-[0.08em] font-medium opacity-80">Total raised</div>
          </Card>
        </div>
      </section>

      {/* Startups grid */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.startupsList.map((startup, i) => {
            const hasWebsite = hasLiveWebsite(startup.website);
            const variant = categoryBadgeVariant(startup.category);
            const softStyle = categorySoftStyle(startup.category);
            return (
              <Card key={i} hover className="p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Badge variant={variant} style={softStyle} className="shrink-0">
                    {displayCategory(startup.category)}
                  </Badge>
                  {hasWebsite && (
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${startup.name} website`}
                      title={`Visit ${startup.name}`}
                      className="shrink-0 w-8 h-8 rounded-full grid place-items-center transition-colors"
                      style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--accent)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 4h6v6" />
                        <path d="M10 14 20 4" />
                        <path d="M20 13v7H4V4h7" />
                      </svg>
                    </a>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
                  {startup.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {startup.description}
                </p>

                <div className="mt-5 pt-4 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                      TRACTION
                    </span>
                    <span className="text-xs leading-relaxed pt-0.5" style={{ color: "var(--ink)" }}>
                      {startup.traction}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest" style={{ background: "var(--accent-soft)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)", color: "var(--accent-ink)" }}>
                      STAT
                    </span>
                    <span className="text-xs leading-relaxed pt-0.5" style={{ color: "var(--ink)" }}>
                      {startup.stats}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Sector map legend */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <Card className="p-6 md:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>Sector map</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>Four sectors represented across the portfolio.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Education", variant: "soft", style: undefined },
                { label: "Marketing", variant: "secondary", style: undefined },
                { label: "Sustainability", variant: "soft", style: { background: "#ecfdf5", color: "#065f46", borderColor: "#a7f3d0" } as React.CSSProperties },
                { label: "Accessibility", variant: "muted", style: undefined },
              ].map((chip) => (
                <span key={chip.label} className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium border" style={{ background: chip.style?.background ?? (chip.variant === "soft" ? "var(--accent-soft)" : chip.variant === "secondary" ? "var(--surface-2)" : "var(--surface-2)"), color: chip.style?.color ?? (chip.variant === "soft" ? "var(--accent-ink)" : "var(--ink)"), borderColor: chip.style?.borderColor ?? "var(--border)" }}>
                  <span className="w-2 h-2 rounded-full mr-2" style={{ background: chip.label === "Sustainability" ? "#10b981" : chip.label === "Accessibility" ? "var(--muted)" : "var(--accent)" }} />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <Card className="p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
            Build the next one
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Your startup could be featured here. Apply to the incubator and ship with mentors, labs, and a stage.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <a href="https://tix.africa/discover/codespark-tech-entrepreneurship-event" target="_blank" rel="noopener noreferrer">Join community</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="mailto:prosperity.olorunfemi@pau.edu.ng">Partner with us</a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
