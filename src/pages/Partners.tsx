import { siteData } from "../data/siteData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Partners() {
  const partners = siteData.partners;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-5 pt-10 sm:pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--muted)", boxShadow: "var(--shadow)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
          PARTNERSHIPS OPEN
        </div>
        <h1 className="mt-4 font-semibold tracking-tight mx-auto" style={{ fontFamily: "Outfit, system-ui, sans-serif", fontSize: "clamp(30px,6vw,48px)", lineHeight: 1.0, maxWidth: "16ch" }}>
          Partner with the next generation of African founders
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
          {partners.headline} Join our ecosystem and help shape the future of African entrepreneurship.
        </p>
      </section>

      {/* Why partner */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <div className="flex items-end justify-between gap-4 mb-5">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>Why partner</h2>
          <span className="hidden sm:inline text-xs" style={{ color: "var(--muted)" }}>4 reasons to join</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {partners.whyPartner.map((reason, i) => (
            <Card key={i} className="p-6 flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 rounded-full grid place-items-center text-xs font-semibold" style={{ background: "var(--accent-soft)", color: "var(--accent-ink)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--ink)" }}>
                {reason}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Partnership options */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-5" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>Partnership options</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {partners.options.map((option, i) => (
            <Card key={i} hover className="p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <Badge variant="soft" className="shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </Badge>
                <span className="w-8 h-8 rounded-full grid place-items-center shrink-0" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--accent)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>{option.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{option.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-5" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>Your impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Builders Reached" },
            { value: "14", label: "Startups Incubated" },
            { value: "6+", label: "Universities" },
            { value: "₦10M+", label: "Capital Raised" },
          ].map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-[28px] font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif", lineHeight: 1 }}>{stat.value}</div>
              <div className="mt-2 text-[11px] tracking-widest font-medium" style={{ color: "var(--muted)" }}>{stat.label.toUpperCase()}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <Card className="p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
            Let&apos;s build together
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Shape the future of African tech entrepreneurship. We&apos;re looking for partners who want early access to talent and ideas.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--ink)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
            {siteData.brand.partnerEmail}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:prosperity.olorunfemi@pau.edu.ng">Become a Partner</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="https://drive.google.com/file/d/1GsOA8psdMa-VLyg9ZeIBna43jane0Ahq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Sponsor Event
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
