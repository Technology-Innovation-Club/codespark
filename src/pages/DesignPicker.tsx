import { HeadContent } from "@tanstack/react-router";

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
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 48, fontFamily: "system-ui, sans-serif", color: "#0a0a0b", background: "#fafaf7", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 800, letterSpacing: "-.04em", marginBottom: 12 }}>Design picker</h1>
        <p style={{ fontSize: 18, color: "#6b6a65", maxWidth: 640, marginBottom: 32, lineHeight: 1.5 }}>
          Five redesigned surfaces for the innovation hub. Click any card to view the interactive prototype.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {designs.map((d) => (
            <a key={d.name} href={`/designs/${d.name}/`} style={{ display: "block", background: "#fff", border: "1px solid #e7e3d8", borderRadius: 16, padding: 24, textDecoration: "none", color: "inherit", boxShadow: "0 2px 8px rgba(15,17,23,.04)", transition: "transform .2s, box-shadow .2s" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)", e.currentTarget.style.boxShadow = "0 12px 28px rgba(15,17,23,.08)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "none", e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,17,23,.04)")}>
              <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#9a978f", fontWeight: 600, marginBottom: 8 }}>{d.name}</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: "-.01em" }}>{d.label}</h2>
              <p style={{ fontSize: 14, color: "#6b6a65", marginTop: 6 }}>{d.desc}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
