import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ---------------------------------- colors --------------------------------- */

export const accentBg: Record<string, string> = {
  orange: "bg-brand-orange",
  yellow: "bg-brand-yellow",
  blue: "bg-brand-blue",
  purple: "bg-brand-purple",
  teal: "bg-brand-teal",
  green: "bg-brand-green",
  pink: "bg-brand-pink",
};

export function accentOf(key?: string | null) {
  return accentBg[key ?? "yellow"] ?? accentBg.yellow;
}

/* ---------------------------------- button --------------------------------- */

const buttonVariants = cva(
  "nb-focus nb-press inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-ink font-display font-extrabold tracking-tight disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      tone: {
        yellow: "bg-brand-yellow text-ink shadow-brutal",
        orange: "bg-brand-orange text-ink shadow-brutal",
        blue: "bg-brand-blue text-paper shadow-brutal",
        purple: "bg-brand-purple text-paper shadow-brutal",
        teal: "bg-brand-teal text-ink shadow-brutal",
        green: "bg-brand-green text-ink shadow-brutal",
        pink: "bg-brand-pink text-ink shadow-brutal",
        ink: "bg-ink text-paper shadow-brutal",
        paper: "bg-paper text-ink shadow-brutal",
        ghost: "border-transparent bg-transparent text-ink hover:bg-muted",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-14 px-7 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { tone: "yellow", size: "md" },
  },
);

export interface NBButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const NBButton = forwardRef<HTMLButtonElement, NBButtonProps>(
  ({ className, tone, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ tone, size }), className)} {...props} />
  ),
);
NBButton.displayName = "NBButton";

export { buttonVariants };

/* ----------------------------------- card ---------------------------------- */

export function NBCard({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={cn("nb-surface", hover && "nb-lift", className)}>{children}</div>
  );
}

/* ---------------------------------- sticker -------------------------------- */

export function Sticker({
  children,
  tone = "yellow",
  className,
}: {
  children: ReactNode;
  tone?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border-[3px] border-ink px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wide shadow-brutal-sm",
        accentOf(tone),
        tone === "blue" || tone === "purple" ? "text-paper" : "text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border-2 border-ink bg-cream px-2 py-0.5 text-[11px] font-semibold text-ink">
      {children}
    </span>
  );
}

/* ------------------------------- progress ring ------------------------------ */

export function ProgressRing({
  value,
  size = 96,
  label,
  tone = "var(--brand-orange)",
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
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ink)" strokeWidth={stroke + 5} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--cream)" strokeWidth={stroke} />
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
      <div className="absolute text-center font-display text-lg font-extrabold leading-none">
        {label ?? `${Math.round(pct)}%`}
      </div>
    </div>
  );
}

/* --------------------------------- blobs ----------------------------------- */

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute left-[6%] top-[18%] h-16 w-16 animate-float rounded-full border-[3px] border-ink bg-brand-pink shadow-brutal" />
      <div className="absolute right-[10%] top-[12%] h-20 w-20 animate-float-slow rotate-12 rounded-3xl border-[3px] border-ink bg-brand-teal shadow-brutal" />
      <div className="absolute bottom-[14%] left-[14%] h-12 w-12 animate-float-slow rotate-45 border-[3px] border-ink bg-brand-yellow shadow-brutal" />
      <div className="absolute bottom-[22%] right-[8%] h-14 w-14 animate-float rounded-full border-[3px] border-ink bg-brand-purple shadow-brutal" />
    </div>
  );
}

/* -------------------------------- skeleton --------------------------------- */

export function NBSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse rounded-2xl border-[3px] border-ink bg-muted", className)} />
  );
}
