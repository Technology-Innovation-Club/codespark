import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V4Startups() {
  const categoryColors: Record<
    string,
    { border: string; text: string; shadow: string }
  > = {
    EdTech: {
      border: "#00fff0",
      text: "#00fff0",
      shadow: "rgba(0, 255, 240, 0.3)",
    },
    MarTech: {
      border: "#f0ff00",
      text: "#f0ff00",
      shadow: "rgba(240, 255, 0, 0.3)",
    },
    Sustainability: {
      border: "#00ff88",
      text: "#00ff88",
      shadow: "rgba(0, 255, 136, 0.3)",
    },
    "Accessibility Tech": {
      border: "#ff00ff",
      text: "#ff00ff",
      shadow: "rgba(255, 0, 255, 0.3)",
    },
  };

  const getColors = (category: string) =>
    categoryColors[category] || categoryColors["EdTech"];
  const industryCount = new Set(siteData.startupsList.map((s) => s.category)).size;

  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero */}
      <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 px-6">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#00fff0]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#ff00ff]/10 rounded-full blur-[120px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 240, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 240, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 30px rgba(240, 255, 0, 0.5)" }}
            >
              {"< "}
            </span>
            <span className="text-white block sm:inline">PORTFOLIO</span>
            <span
              className="text-[#00fff0] block sm:inline"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              _STARTUPS
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 30px rgba(240, 255, 0, 0.5)" }}
            >
              {" />"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            {`> Student-built ventures from the CodeSpark Incubator_`}
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-6 bg-[#1a1a2e] border-y border-[#00fff0]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-3xl font-bold text-[#00fff0]"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  textShadow: "0 0 15px rgba(0, 255, 240, 0.5)",
                }}
              >
                {siteData.startupsList.length}
              </p>
              <p className="text-white/50 text-sm">ACTIVE_STARTUPS</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-3xl font-bold text-[#ff00ff]"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  textShadow: "0 0 15px rgba(255, 0, 255, 0.5)",
                }}
              >
                {industryCount}+
              </p>
              <p className="text-white/50 text-sm">INDUSTRIES</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p
                className="text-3xl font-bold text-[#f0ff00]"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  textShadow: "0 0 15px rgba(240, 255, 0, 0.5)",
                }}
              >
                ₦10M+
              </p>
              <p className="text-white/50 text-sm">TOTAL_RAISED</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-24 px-6 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-[#00fff0]/50 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#ff00ff]/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.startupsList.map((startup, i) => {
              const colors = getColors(startup.category);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 bg-[#0a0a0f] border group overflow-hidden"
                  style={{
                    borderColor: `${colors.border}33`,
                    boxShadow: `0 0 30px ${colors.shadow}`,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${colors.border}, transparent)`,
                    }}
                  />

                  {/* Corner decorations */}
                  <div
                    className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2"
                    style={{ borderColor: colors.border }}
                  />
                  <div
                    className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2"
                    style={{ borderColor: colors.border }}
                  />

                  {/* Category tag */}
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      style={{
                        color: colors.text,
                        backgroundColor: `${colors.border}20`,
                        boxShadow: `0 0 10px ${colors.shadow}`,
                      }}
                    >
                      {`// ${startup.category}`}
                    </span>
                  </div>

                  {/* Startup name */}
                  <h3
                    className="text-2xl font-bold mb-3 text-white group-hover:text-opacity-100 transition-colors"
                    style={{ fontFamily: '"Syne", sans-serif' }}
                  >
                    <span
                      style={{
                        color: colors.text,
                        textShadow: `0 0 15px ${colors.shadow}`,
                      }}
                    >
                      {">"}
                    </span>{" "}
                    {startup.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {startup.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="grid grid-cols-[auto,1fr] items-start gap-x-3 gap-y-1">
                      <span className="text-[#f0ff00] text-xs leading-relaxed">
                        TRACTION:
                      </span>
                      <span className="text-white/70 text-xs leading-relaxed">
                        {startup.traction}
                      </span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] items-start gap-x-3 gap-y-1">
                      <span
                        style={{ color: colors.text }}
                        className="text-xs leading-relaxed"
                      >
                        STATS:
                      </span>
                      <span className="text-white/70 text-xs leading-relaxed">
                        {startup.stats}
                      </span>
                    </div>
                  </div>

                  {/* Animated border effect on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                    style={{
                      background: `linear-gradient(90deg, ${colors.border}, transparent)`,
                    }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Legend */}
      <section className="py-16 px-6 bg-[#1a1a2e]/50 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/30 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <h3
            className="text-center text-xl font-bold mb-8 text-white"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            {"{ "}
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 15px rgba(0, 255, 240, 0.5)" }}
            >
              SECTOR
            </span>
            _MAP{" }"}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryColors).map(([category, colors]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0f] border"
                style={{
                  borderColor: `${colors.border}50`,
                  boxShadow: `0 0 10px ${colors.shadow}`,
                }}
              >
                <span
                  className="w-3 h-3"
                  style={{
                    backgroundColor: colors.border,
                    boxShadow: `0 0 10px ${colors.border}`,
                  }}
                />
                <span className="text-white/70 text-sm">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[600px] md:h-[600px] bg-[#00fff0]/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              BUILD THE{" "}
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
              >
                NEXT
              </span>{" "}
              ONE
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {`// Your startup could be featured here. Apply to the incubator_`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/LQ33JW7yiJAKs8Cg85LXKX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center text-center px-12 py-5 bg-[#00fff0] text-[#0a0a0f] font-bold uppercase tracking-wider hover:scale-105 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                  boxShadow: "0 0 50px rgba(0, 255, 240, 0.6)",
                }}
              >
                JOIN_COMMUNITY
              </a>
              <a
                href="mailto:prosperity.olorunfemi@pau.edu.ng"
                className="inline-flex w-full sm:w-auto items-center justify-center text-center px-12 py-5 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] font-bold uppercase tracking-wider hover:bg-[#ff00ff]/10 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                }}
              >
                PARTNER_WITH_US
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
