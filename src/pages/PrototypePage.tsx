export function PrototypePage() {
  return (
    <iframe
      src="/designs/aurora/index.html"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: 0, zIndex: 9999 }}
      title="Prototype"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
