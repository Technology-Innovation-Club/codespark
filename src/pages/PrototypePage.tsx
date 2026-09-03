import { Badge } from "@/components/ui/badge";

export function PrototypePage() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-[var(--bg)]">
      <div className="flex h-[64px] shrink-0 items-center gap-3 border-b bg-[var(--surface)] px-5" style={{ borderColor: "var(--border)" }}>
        <a href="/designs" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">C</span>
          <span className="hidden sm:block font-display text-[15px] font-semibold tracking-tight">CodeSpark</span>
          <span className="hidden lg:inline-flex rounded-full border bg-[var(--surface-2)] px-2 py-1 text-[10px] font-medium tracking-widest" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>CLARITY</span>
        </a>
        <span className="text-[11px] tracking-widest font-medium" style={{ color: "var(--muted-2)" }}>|</span>
        <Badge variant="soft" className="rounded-full px-2.5 py-1 text-[10px] tracking-widest">PROTOTYPE</Badge>
        <a href="/designs" className="ml-auto text-sm font-medium text-[var(--accent)] hover:underline">← All designs</a>
      </div>
      <iframe
        src="/designs/clarity/index.html"
        title="Prototype — Clarity"
        className="flex-1 w-full border-0 bg-white"
      />
    </div>
  );
}
