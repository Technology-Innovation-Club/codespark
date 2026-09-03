import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* clarity compat — maps old brutal tokens to clarity blue system.
   Keep same exports so hub pages keep working until fully migrated to shadcn clarity components. */

/* ---------------------------------- colors --------------------------------- */
export const accentBg: Record<string, string> = {
  orange: "bg-[var(--accent)] text-white",
  yellow: "bg-[var(--accent)] text-white",
  blue: "bg-[var(--accent)] text-white",
  purple: "bg-[var(--accent)] text-white",
  teal: "bg-[var(--accent)] text-white",
  green: "bg-[#10b981] text-white",
  pink: "bg-[#f43f5e] text-white",
};

export function accentOf(key?: string | null) {
  // all legacy colors now map to clarity blue for consistency
  if (!key) return "bg-[var(--accent)] text-white";
  return accentBg[key] ?? "bg-[var(--accent)] text-white";
}

/* ---------------------------------- button --------------------------------- */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      tone: {
        yellow: "bg-[var(--accent)] text-white shadow-[var(--shadow)] hover:bg-[#1d4ed8]",
        orange: "bg-[var(--accent)] text-white shadow-[var(--shadow)] hover:bg-[#1d4ed8]",
        blue: "bg-[var(--accent)] text-white shadow-[var(--shadow)] hover:bg-[#1d4ed8]",
        purple: "bg-[var(--accent)] text-white shadow-[var(--shadow)] hover:bg-[#1d4ed8]",
        teal: "bg-[var(--accent)] text-white shadow-[var(--shadow)] hover:bg-[#1d4ed8]",
        green: "bg-[#10b981] text-white shadow-[var(--shadow)] hover:bg-[#0d9a6b]",
        pink: "bg-[#f43f5e] text-white shadow-[var(--shadow)] hover:bg-[#e11d48]",
        ink: "bg-[var(--ink)] text-white shadow-[var(--shadow)] hover:bg-black",
        paper: "bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] hover:bg-[var(--surface-2)]",
        ghost: "bg-transparent text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { tone: "yellow", size: "md" },
  },
);

export interface NBButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const NBButton = forwardRef<HTMLButtonElement, NBButtonProps>(({ className, tone, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ tone, size }), className)} {...props} />
));
NBButton.displayName = "NBButton";

export { buttonVariants };

/* ----------------------------------- card ---------------------------------- */
export function NBCard({ children, className, hover = false }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-[20px] border bg-[var(--surface)] text-[var(--ink)] shadow-[var(--shadow)] border-[var(--border)]",
        hover && "transition-[box-shadow,border-color,transform] duration-200 hover:shadow-[var(--shadow-strong)] hover:border-[color-mix(in_srgb,var(--accent)_20%,var(--border))] hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------------------------- sticker -------------------------------- */
export function Sticker({ children, tone = "yellow", className }: { children: ReactNode; tone?: string; className?: string }) {
  const isAccent = ["yellow", "orange", "blue", "purple"].includes(tone);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        isAccent
          ? "border-transparent bg-[var(--accent)] text-white"
          : tone === "green"
            ? "border-[color-mix(in_srgb,#10b981_20%,transparent)] bg-[#ecfdf5] text-[#047857]"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--muted)]">
      {children}
    </span>
  );
}

/* ------------------------------- progress ring ------------------------------ */
export function ProgressRing({
  value,
  size = 96,
  label,
  tone = "var(--accent)",
}: {
  value: number;
  size?: number;
  label?: ReactNode;
  tone?: string;
}) {
  const stroke = 10;
  const r = (size - stroke) / 2 - 3;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke + 4} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-2)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={tone}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (pct / 100) * c}
          style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute text-center font-display text-lg font-semibold leading-none text-[var(--ink)]">
        {label ?? `${Math.round(pct)}%`}
      </div>
    </div>
  );
}

/* --------------------------------- blobs ----------------------------------- */
export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute left-[6%] top-[18%] h-16 w-16 animate-[float_6s_ease-in-out_infinite] rounded-full bg-[var(--accent-soft)] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)]" />
      <div className="absolute right-[10%] top-[12%] h-20 w-20 animate-[float_9s_ease-in-out_infinite] rotate-12 rounded-[20px] bg-[var(--accent-soft)] border border-[color-mix(in_srgb,var(--accent)_14%,transparent)]" />
      <div className="absolute bottom-[14%] left-[14%] h-12 w-12 animate-[float_9s_ease-in-out_infinite] rotate-45 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]" />
      <div className="absolute bottom-[22%] right-[8%] h-14 w-14 animate-[float_6s_ease-in-out_infinite] rounded-full bg-[var(--surface-2)] border border-[var(--border)]" />
    </div>
  );
}

/* -------------------------------- skeleton --------------------------------- */
export function NBSkeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)]", className)} />;
}
