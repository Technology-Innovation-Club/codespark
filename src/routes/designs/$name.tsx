import { createFileRoute, Link, useParams } from "@tanstack/react-router";

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
  const meta = LABELS[name] || { label: name, accent: "#0a0a0b" };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0a0a0b", display: "flex", flexDirection: "column", zIndex: 9999 }}>
      <div style={{ height: 44, flexShrink: 0, background: "#0a0a0b", borderBottom: "1px solid #23242b", display: "flex", alignItems: "center", padding: "0 20px", gap: 16, fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#fafaf7" }}>
        <Link to="/designs" style={{ color: meta.accent, textDecoration: "none", fontWeight: 600 }}>← All designs</Link>
        <span style={{ color: "#3a3a45" }}>|</span>
        <span style={{ fontWeight: 700, color: "#fafaf7" }}>{meta.label}</span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#6f6b65", fontFamily: "ui-monospace, monospace" }}>/designs/{name}/</span>
      </div>
      <iframe
        src={`/designs/${name}/`}
        title={meta.label}
        style={{ flex: 1, width: "100%", height: "100%", border: 0, background: "#fff" }}
      />
    </div>
  );
}
