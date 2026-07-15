import { motion } from "motion/react";
import { useEffect } from "react";

const challengeData = {
  description:
    "An 8-week innovation challenge where you go from idea to market-ready product. Work with mentors who've built real companies. Get the portfolio piece that opens doors.",
  outcome: "Outcome: A real project + cash prize + positioning for global opportunities.",
  phases: [
    {
      name: "Phase 1",
      title: "Innovation Fundamentals",
      description: "Design Thinking & Research Frameworks — Weeks 1–2",
    },
    {
      name: "Phase 2",
      title: "Research & Prototyping",
      description: "AI-Driven Dev & UI/UX — Weeks 3–4",
    },
    {
      name: "Phase 3",
      title: "Production",
      description: "Build your MVP with production-ready tools — Weeks 5–6",
    },
    {
      name: "Phase 4",
      title: "Go-To-Market",
      description: "GTM Frameworks, beta testing & investor pitch — Weeks 7–8",
    },
  ],
  differentiators: [
    "Get trained by industry experts and pushed to build competence. Join the top 1% at your skill level.",
    "Build a real project you can show employers, investors, and collaborators. Your proof of capability.",
    "Get guided by industry mentors with practical experience at top companies. Real feedback, real insight.",
    "Win cash based on your project's quality and impact. Use it to build, scale, or move forward.",
  ],
};

export function InnovationChallenge() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const phaseViewport = { amount: 0.45, once: false } as const;

  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero */}
      <section className="relative pt-4 pb-6 sm:pt-24 sm:pb-14 px-3 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#ff00ff]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-[#00fff0]/10 rounded-full blur-[100px]" />
        </div>

        <div className="absolute top-[57px] sm:top-24 left-[5px] sm:left-8 w-[72px] sm:w-24 h-[72px] sm:h-24 border-l-2 border-t-2 border-[#00fff0]/30" />
        <div className="absolute top-[57px] sm:top-24 right-[5px] sm:right-8 w-[72px] sm:w-24 h-[72px] sm:h-24 border-r-2 border-t-2 border-[#ff00ff]/30" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex w-full max-w-[304px] sm:w-auto sm:max-w-none items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-2.5 sm:py-3 bg-[#1a1a2e] border border-[#f0ff00]/50 text-[#f0ff00] text-[0.68rem] min-[360px]:text-[0.74rem] sm:text-sm font-medium mb-4 sm:mb-6 leading-none whitespace-nowrap"
            style={{
              clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(240, 255, 0, 0.2)",
            }}
          >
            <span>{"APPLICATIONS CLOSE JULY 17 2026"}</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              INNOVATION CHALLENGE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {"> Build Real Projects. Learn from Experts. Win Cash._"}
          </motion.p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 bg-[#1a1a2e] border border-[#ff00ff]/30 relative"
            style={{
              clipPath:
                "polygon(0 0, 98% 0, 100% 5%, 100% 100%, 2% 100%, 0 95%)",
              boxShadow: "0 0 40px rgba(255, 0, 255, 0.2)",
            }}
          >
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#ff00ff]" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#ff00ff]" />

            <p className="text-white/70 text-lg leading-relaxed mb-4 text-center">
              {`// ${challengeData.description}`}
            </p>
            <p
              className="text-[#00fff0] text-xl font-bold text-center"
              style={{
                fontFamily: '"Syne", sans-serif',
                textShadow: "0 0 20px rgba(0, 255, 240, 0.5)",
              }}
            >
              {`>>> ${challengeData.outcome}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14 leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {"{ "}
            </span>
            <span className="text-white block sm:inline">PROGRAM</span>
            <span
              className="text-[#00fff0] block sm:inline"
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

          <div className="md:hidden relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#00fff0]/60 via-[#ff00ff]/50 to-[#00fff0]/60" />
            <div className="space-y-5">
              {challengeData.phases.map((phase, i) => {
                const isCyan = i % 2 === 0;
                const accent = isCyan ? "#00fff0" : "#ff00ff";
                const glow = isCyan
                  ? "rgba(0, 255, 240, 0.2)"
                  : "rgba(255, 0, 255, 0.2)";

                return (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 24,
                      scale: 0.96,
                      filter: "blur(4px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    viewport={phaseViewport}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-12"
                  >
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border-2 flex items-center justify-center"
                      style={{
                        borderColor: accent,
                        color: accent,
                        backgroundColor: `${accent}22`,
                        clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
                        boxShadow: `0 0 16px ${glow}`,
                        fontFamily: '"Syne", sans-serif',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      className="p-5 bg-[#0a0a0f] border"
                      style={{
                        borderColor: `${accent}80`,
                        boxShadow: `0 0 24px ${glow}`,
                      }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{
                          color: accent,
                          textShadow: `0 0 10px ${accent}`,
                        }}
                      >
                        {`// ${phase.name}`}
                      </span>
                      <h3
                        className="text-2xl sm:text-3xl font-bold mt-2 text-white leading-tight break-words"
                        style={{
                          fontFamily: '"Syne", sans-serif',
                          overflowWrap: "anywhere",
                        }}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-white/50 mt-1 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block space-y-8 relative">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#00fff0]/50 via-[#ff00ff]/50 to-[#00fff0]/50" />
            {challengeData.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -56 : 56,
                  scale: 0.96,
                  filter: "blur(4px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={phaseViewport}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-block p-6 bg-[#0a0a0f] border ${
                      i % 2 === 0
                        ? "border-[#00fff0]/50"
                        : "border-[#ff00ff]/50"
                    } hover:border-opacity-100 transition-all`}
                    style={{
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
                      className="text-xl font-bold mt-2 text-white break-words"
                      style={{ fontFamily: '"Syne", sans-serif' }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-white/50 mt-1 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>

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
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#1a1a2e] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span className="text-white block sm:inline">WHAT YOU</span>
            <span
              className="text-[#ff00ff] block sm:inline"
              style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
            >
              _STAND_TO
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              _GET
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {challengeData.differentiators.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#0a0a0f] border border-[#f0ff00]/30 hover:border-[#f0ff00] transition-all group"
                style={{ boxShadow: "0 0 20px rgba(240, 255, 0, 0.1)" }}
              >
                <div className="grid grid-cols-[3.25rem,1fr] items-start gap-x-4 sm:gap-x-5">
                  <span
                    className="text-[#f0ff00] font-bold text-3xl text-center leading-none pt-0.5"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      textShadow: "0 0 15px #f0ff00",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 group-hover:text-white transition-colors text-base sm:text-lg leading-relaxed">
                    {diff}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {"[ "}
            </span>
            <span className="text-white">KEY</span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              _DATES
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {" ]"}
            </span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { date: "July 17", title: "Applications Close", desc: "No extensions. This is the cutoff." },
              { date: "July 17–19", title: "Team Selection", desc: "Top 20 teams selected across 15 universities." },
              { date: "July 20–22", title: "Onboarding", desc: "Meet mentors, understand the program, prepare to execute." },
              { date: "July 23 – Sept 18", title: "8-Week Program", desc: "Build, iterate, validate, and prepare for launch." },
              { date: "Sept 26", title: "CodeSpark Forum", desc: "Pitch on stage. Meet investors. Open doors.", last: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-4 h-4 rounded-full mt-1.5"
                    style={{
                      backgroundColor: i === 4 ? "#f0ff00" : "#00fff0",
                      boxShadow: i === 4
                        ? "0 0 12px rgba(240, 255, 0, 0.6)"
                        : "0 0 12px rgba(0, 255, 240, 0.6)",
                    }}
                  />
                  {!item.last && <div className="w-0.5 h-20 bg-gradient-to-b from-[#00fff0]/50 to-[#ff00ff]/50 mt-2" />}
                </div>
                <div className="pb-8">
                  <p
                    className="font-bold text-sm"
                    style={{
                      color: i === 4 ? "#f0ff00" : "#00fff0",
                      textShadow: i === 4
                        ? "0 0 10px rgba(240, 255, 0, 0.5)"
                        : "0 0 10px rgba(0, 255, 240, 0.5)",
                    }}
                  >
                    {item.date}
                  </p>
                  <h5 className="text-white font-semibold mt-1 text-lg">
                    {item.title}
                  </h5>
                  <p className="text-white/50 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
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
                SHIP
              </span>
              ?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {"// Eight weeks. Your team. Mentors who've been there. At the end, you have a project that changes everything._"}
            </p>

            <a
              href="https://forms.gle/JaoSqfifwc9acdpH7"
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
