import { motion } from "motion/react";

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
  const src =
    !showWordmark || compact
      ? "/codespark-logo-mark-white.webp"
      : "/codespark-logo-white.webp";

  return (
    <div className={`flex items-center ${className}`}>
      <motion.img
        aria-label="CodeSpark logo"
        initial={{ scale: 0.94, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0, 1] }}
        src={src}
        alt="CodeSpark"
        className={`h-9 sm:h-10 w-auto object-contain ${compact ? "max-w-9 sm:max-w-10" : "max-w-[190px] sm:max-w-[210px]"}`}
      />
    </div>
  );
}
