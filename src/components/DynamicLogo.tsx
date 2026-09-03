import { Link } from "@tanstack/react-router";

type DynamicLogoProps = {
  showWordmark?: boolean;
  compact?: boolean;
  className?: string;
};

export function DynamicLogo({
  showWordmark = true,
  compact = false,
  className = "",
}: DynamicLogoProps) {
  const showText = showWordmark && !compact;

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="CodeSpark home">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shrink-0">C</span>
      {showText && (
        <>
          <span className="font-display text-[17px] font-semibold tracking-tight text-[var(--ink)]">CodeSpark</span>
          <span
            className="hidden lg:inline-flex rounded-full border bg-[var(--surface-2)] px-2 py-1 text-[10px] font-medium tracking-widest"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            CLARITY
          </span>
        </>
      )}
    </Link>
  );
}
