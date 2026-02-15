import { motion } from "motion/react";
import type { CSSProperties } from "react";

type VersionId = 1 | 2 | 3 | 4 | 5;

type DynamicLogoProps = {
  version: VersionId;
  showWordmark?: boolean;
  compact?: boolean;
  className?: string;
};

type VersionTheme = {
  markClass: string;
  letterClass: string;
  wordClass: string;
  accentClass: string;
  fontFamily: string;
  shape?: CSSProperties;
  glow?: CSSProperties;
  label: string;
};

const themes: Record<VersionId, VersionTheme> = {
  1: {
    markClass:
      "bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg shadow-amber-500/20",
    letterClass: "text-[#0a0f1c]",
    wordClass: "text-white",
    accentClass: "text-amber-400",
    fontFamily: '"Playfair Display", serif',
    label: "Navy & Gold",
  },
  2: {
    markClass: "bg-black border-2 border-black",
    letterClass: "text-white",
    wordClass: "text-black uppercase",
    accentClass: "text-black",
    fontFamily: '"Archivo Black", sans-serif',
    label: "Brutalist",
  },
  3: {
    markClass:
      "bg-[#c45d3e] rounded-2xl shadow-lg shadow-[#c45d3e]/20",
    letterClass: "text-[#faf8f5]",
    wordClass: "text-[#2d2418]",
    accentClass: "text-[#c45d3e]",
    fontFamily: '"Fraunces", serif',
    label: "Earth Tones",
  },
  4: {
    markClass: "bg-[#1a1a2e] border-2 border-[#00fff0]",
    letterClass: "text-[#00fff0]",
    wordClass: "text-white uppercase",
    accentClass: "text-[#00fff0]",
    fontFamily: '"Syne", sans-serif',
    shape: {
      clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
    },
    glow: {
      boxShadow: "0 0 20px rgba(0, 255, 240, 0.45)",
      textShadow: "0 0 10px #00fff0",
    },
    label: "Cyber Neon",
  },
  5: {
    markClass:
      "rounded-2xl bg-gradient-to-br from-[#e8e4f0] to-[#fce4ec] shadow-sm",
    letterClass: "text-[#6b5b95]",
    wordClass: "text-[#2d2d2d]",
    accentClass: "text-[#6b5b95]",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    label: "Pastel",
  },
};

export function DynamicLogo({
  version,
  showWordmark = true,
  compact = false,
  className = "",
}: DynamicLogoProps) {
  if (version === 4) {
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

  const theme = themes[version];
  const size = compact ? "w-9 h-9 text-base" : "w-10 h-10 sm:w-11 sm:h-11 text-lg";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <motion.div
        aria-label={`CodeSpark ${theme.label} logo`}
        initial={{ scale: 0.94, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0, 1] }}
        className={`${size} ${theme.markClass} flex items-center justify-center relative overflow-hidden`}
        style={theme.shape}
      >
        <span
          className={`${theme.letterClass} font-bold leading-none relative z-10`}
          style={{
            fontFamily: theme.fontFamily,
            ...(theme.glow ?? {}),
          }}
        >
          C
        </span>
      </motion.div>

      {showWordmark && (
        <motion.span
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.08 }}
          className={`text-lg sm:text-xl font-bold tracking-tight ${theme.wordClass}`}
          style={{
            fontFamily: theme.fontFamily,
          }}
        >
          Code<span className={theme.accentClass}>Spark</span>
        </motion.span>
      )}
    </div>
  );
}
