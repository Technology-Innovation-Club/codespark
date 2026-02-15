import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function V4NotFound() {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(26,72,255,0.35)_0%,rgba(9,16,63,0.88)_45%,rgba(5,6,30,1)_100%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 240, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 240, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[580px] h-[580px] border border-[#1747ff]/40 rounded-full" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] border border-[#ff00ff]/30 rounded-full" />
      <div className="absolute -left-16 bottom-16 w-64 h-64 bg-[#003dff]/20 rounded-full blur-[110px]" />
      <div className="absolute -right-20 top-24 w-72 h-72 bg-[#ff00ff]/15 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl w-full text-center border border-[#1f49ff]/70 bg-[#060a2d]/88 rounded-2xl px-6 py-10 sm:px-10 sm:py-14 shadow-[0_0_45px_rgba(9,57,255,0.25)]"
      >
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2f72ff]/60 bg-[#09124c]/80 text-[#d8ddff] text-xs sm:text-sm uppercase tracking-[0.22em]">
          <span className="w-2 h-2 rounded-full bg-[#00fff0]" />
          404 // Route Not Found
        </p>

        <h1
          className="mt-8 text-5xl sm:text-7xl font-bold text-[#ff17ad]"
          style={{
            fontFamily: '"Syne", sans-serif',
            textShadow: "0 0 25px rgba(255, 23, 173, 0.55)",
          }}
        >
          LOST IN THE GRID
        </h1>

        <p
          className="mt-4 text-2xl sm:text-4xl font-semibold text-[#ffe027]"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          This route does not exist.
        </p>

        <p className="mt-5 text-sm sm:text-base text-[#b8c5ff]/85 max-w-xl mx-auto leading-relaxed">
          {`> The page you requested is not mapped in this build. Navigate back to the root route to continue exploring CodeSpark.`}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-[#00fff0] text-[#04103a] font-bold uppercase tracking-wider hover:bg-[#78fff8] transition-colors"
            style={{
              fontFamily: '"Syne", sans-serif',
              clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
              boxShadow: "0 0 28px rgba(0, 255, 240, 0.45)",
            }}
          >
            Return Home
          </Link>
          <Link
            to="/for-partners"
            className="px-8 py-3 border-2 border-[#ff17ad] text-[#ff5ac5] font-bold uppercase tracking-wider hover:bg-[#ff17ad]/10 transition-colors"
            style={{
              fontFamily: '"Syne", sans-serif',
              clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
            }}
          >
            Sponsor CodeSpark
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
