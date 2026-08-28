import { createFileRoute, Link } from "@tanstack/react-router";

const DESIGNS = [
  { name: "aurora", label: "Aurora", desc: "Emerald dark", accent: "#10b981", surface: "#09090b" },
  { name: "clarity", label: "Clarity", desc: "Light blue", accent: "#2563eb", surface: "#fafaf9" },
  { name: "prism", label: "Prism", desc: "Violet gradient", accent: "#5b21b6", surface: "#fbfbf8" },
  { name: "meridian", label: "Meridian", desc: "Amber luxury", accent: "#d97706", surface: "#0c0a09" },
  { name: "horizon", label: "Horizon", desc: "Navy + gold", accent: "#c5a55a", surface: "#050a14" },
];

export const Route = createFileRoute("/designs/")({
  component: DesignPicker,
});

function DesignPicker() {
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "auto", background: "#fafaf7", fontFamily: "system-ui, sans-serif", color: "#0a0a0b" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 80px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 12 }}>
          <Link to="/" style={{ color: "#6b6a65", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>← Back to CodeSpark</Link>
        </div>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 0.95, margin: 0, color: "#0a0a0b" }}>Designs</h1>
        <p style={{ fontSize: 18, color: "#6b6a65", maxWidth: 640, marginTop: 16, marginBottom: 48, lineHeight: 1.5 }}>
          Five redesigned surfaces. Click a card to open the prototype — it takes over the full page.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {DESIGNS.map((d) => (
            <Link
              key={d.name}
              to="/designs/$name"
              params={{ name: d.name }}
              style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #e7e3d8", borderRadius: 16, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(15,17,23,.04)", transition: "transform .2s, box-shadow .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)", e.currentTarget.style.boxShadow = "0 12px 28px rgba(15,17,23,.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none", e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,17,23,.04)")}
            >
              <div style={{ height: 8, background: d.accent }} />
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#9a978f", fontWeight: 600, marginBottom: 6 }}>{d.desc}</div>
                <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, letterSpacing: "-.02em", color: "#0a0a0b" }}>{d.label}</h2>
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: d.accent }}>
                  Open prototype <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
