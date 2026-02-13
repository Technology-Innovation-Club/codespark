import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V4Incubator() {
  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero */}
      <section className="relative py-32 px-6">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#ff00ff]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-[#00fff0]/10 rounded-full blur-[100px]" />
        </div>

        {/* Corner frames */}
        <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-[#00fff0]/30" />
        <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-[#ff00ff]/30" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a2e] border border-[#f0ff00]/50 text-[#f0ff00] text-sm font-medium mb-8"
            style={{
              clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(240, 255, 0, 0.2)",
            }}
          >
            <span
              className="w-2 h-2 bg-[#f0ff00] animate-pulse"
              style={{ boxShadow: "0 0 10px #f0ff00" }}
            />
            {"// APPLICATIONS_OPEN_NOVEMBER_2026"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            {"<"}
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              INCUBATOR
            </span>
            {" />"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {`> Where Student Ideas Become Revenue-Generating Startups_`}
          </motion.p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-[#1a1a2e] border border-[#ff00ff]/30 relative"
            style={{
              clipPath:
                "polygon(0 0, 98% 0, 100% 5%, 100% 100%, 2% 100%, 0 95%)",
              boxShadow: "0 0 40px rgba(255, 0, 255, 0.2)",
            }}
          >
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#ff00ff]" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#ff00ff]" />

            <p className="text-white/70 text-lg leading-relaxed mb-4 text-center">
              {`// ${siteData.programs.incubator.description}`}
            </p>
            <p
              className="text-[#00fff0] text-xl font-bold text-center"
              style={{
                fontFamily: '"Syne", sans-serif',
                textShadow: "0 0 20px rgba(0, 255, 240, 0.5)",
              }}
            >
              {`>>> ${siteData.programs.incubator.outcome}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#00fff0]/50 via-[#ff00ff]/50 to-[#00fff0]/50" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {"{ "}
            </span>
            <span className="text-white">PROGRAM</span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              _STRUCTURE
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {" }"}
            </span>
          </motion.h2>

          <div className="space-y-8">
            {siteData.programs.incubator.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-6 bg-[#0a0a0f] border ${
                      i % 2 === 0
                        ? "border-[#00fff0]/50"
                        : "border-[#ff00ff]/50"
                    } hover:border-opacity-100 transition-all`}
                    style={{
                      clipPath:
                        i % 2 === 0
                          ? "polygon(0 0, 95% 0, 100% 15%, 100% 100%, 5% 100%, 0 85%)"
                          : "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)",
                      boxShadow:
                        i % 2 === 0
                          ? "0 0 30px rgba(0, 255, 240, 0.2)"
                          : "0 0 30px rgba(255, 0, 255, 0.2)",
                    }}
                  >
                    <span
                      className={`text-sm font-bold ${
                        i % 2 === 0 ? "text-[#00fff0]" : "text-[#ff00ff]"
                      }`}
                      style={{
                        textShadow:
                          i % 2 === 0 ? "0 0 10px #00fff0" : "0 0 10px #ff00ff",
                      }}
                    >
                      {`// ${phase.name}`}
                    </span>
                    <h3
                      className="text-xl font-bold mt-2 text-white"
                      style={{ fontFamily: '"Syne", sans-serif' }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-white/50 mt-1 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div
                  className={`w-12 h-12 flex items-center justify-center border-2 ${
                    i % 2 === 0
                      ? "border-[#00fff0] bg-[#00fff0]/20"
                      : "border-[#ff00ff] bg-[#ff00ff]/20"
                  } relative z-10`}
                  style={{
                    clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
                    boxShadow:
                      i % 2 === 0 ? "0 0 20px #00fff0" : "0 0 20px #ff00ff",
                  }}
                >
                  <span
                    className={`font-bold text-sm ${
                      i % 2 === 0 ? "text-[#00fff0]" : "text-[#ff00ff]"
                    }`}
                    style={{ fontFamily: '"Syne", sans-serif' }}
                  >
                    {i + 1}
                  </span>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 px-6 bg-[#1a1a2e] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span className="text-white">WHY</span>
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
            >
              _CODESPARK
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              ?
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteData.programs.incubator.differentiators.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#0a0a0f] border border-[#f0ff00]/30 hover:border-[#f0ff00] transition-all group"
                style={{ boxShadow: "0 0 20px rgba(240, 255, 0, 0.1)" }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-[#f0ff00] font-bold text-3xl"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      textShadow: "0 0 15px #f0ff00",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 group-hover:text-white transition-colors text-lg">
                    {diff}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-[#00fff0]/10 rounded-full blur-[150px]" />
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
              Ready to{" "}
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 25px rgba(0, 255, 240, 0.8)" }}
              >
                BUILD
              </span>
              ?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {`// Join the next cohort and turn your idea into a revenue-generating startup_`}
            </p>

            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-[#00fff0] text-[#0a0a0f] font-bold uppercase tracking-wider hover:scale-105 transition-all"
              style={{
                fontFamily: '"Syne", sans-serif',
                clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                boxShadow: "0 0 50px rgba(0, 255, 240, 0.6)",
              }}
            >
              APPLY_NOW
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
