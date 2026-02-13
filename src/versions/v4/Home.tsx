import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";

export function V4Home() {
  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-[#00fff0]/10 rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#ff00ff]/10 rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-[#f0ff00]/5 rounded-full blur-[80px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Decorative circuit lines */}
        <div className="absolute top-20 left-0 w-full h-px">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#00fff0] to-transparent"
          />
        </div>
        <div className="absolute bottom-40 left-0 w-full h-px">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent"
          />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-32 left-8 w-32 h-32 border-l-2 border-t-2 border-[#00fff0]/30" />
        <div className="absolute top-32 right-8 w-32 h-32 border-r-2 border-t-2 border-[#ff00ff]/30" />
        <div className="absolute bottom-32 left-8 w-32 h-32 border-l-2 border-b-2 border-[#ff00ff]/30" />
        <div className="absolute bottom-32 right-8 w-32 h-32 border-r-2 border-b-2 border-[#00fff0]/30" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a2e] border border-[#00fff0]/50 text-[#00fff0] text-sm font-medium mb-8"
              style={{
                clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                boxShadow: "0 0 20px rgba(0, 255, 240, 0.3)",
              }}
            >
              <span
                className="w-2 h-2 bg-[#00fff0] animate-pulse"
                style={{ boxShadow: "0 0 10px #00fff0" }}
              />
              {"// FAITH_DRIVEN_STARTUP_PLATFORM"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            {siteData.hero.headline.split("University").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && (
                  <span
                    className="text-[#00fff0] relative"
                    style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
                  >
                    University
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-1 bg-[#00fff0]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {`> ${siteData.hero.subheadline}`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#ff00ff] text-white font-bold uppercase tracking-wider transition-all hover:scale-105 cursor-pointer"
              style={{
                fontFamily: '"Syne", sans-serif',
                clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                boxShadow: "0 0 30px rgba(255, 0, 255, 0.5)",
              }}
            >
              <span className="relative z-10">Apply to Incubator</span>
              <div className="absolute inset-0 bg-[#ff00ff]/50 blur-xl group-hover:blur-2xl transition-all" />
            </a>
            <Link
              to="/4/event"
              className="px-10 py-4 bg-transparent border-2 border-[#00fff0] text-[#00fff0] font-bold uppercase tracking-wider hover:bg-[#00fff0]/10 transition-all cursor-pointer"
              style={{
                fontFamily: '"Syne", sans-serif',
                clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                boxShadow: "0 0 20px rgba(0, 255, 240, 0.3)",
              }}
            >
              Attend Event
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-8 h-14 border-2 border-[#00fff0]/50 flex justify-center pt-3"
            style={{ clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-[#00fff0]"
              style={{ boxShadow: "0 0 10px #00fff0" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Iyin Section */}
      <section className="py-32 px-6 bg-[#0a0a0f] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-[#ff00ff]"
            style={{ boxShadow: "-2px 0 20px rgba(255, 0, 255, 0.3)" }}
          >
            <div
              className="absolute -left-2 top-0 w-4 h-4 bg-[#ff00ff]"
              style={{ boxShadow: "0 0 15px #ff00ff" }}
            />

            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-white"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              <span
                className="text-[#f0ff00]"
                style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
              >{`{ `}</span>
              {siteData.iyin.headline}
              <span
                className="text-[#f0ff00]"
                style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
              >{` }`}</span>
            </h2>
            <div className="space-y-6">
              {siteData.iyin.content.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-lg leading-relaxed ${
                    i === siteData.iyin.content.length - 1
                      ? "text-[#00fff0] font-bold"
                      : "text-white/60"
                  }`}
                  style={
                    i === siteData.iyin.content.length - 1
                      ? { textShadow: "0 0 10px rgba(0, 255, 240, 0.5)" }
                      : {}
                  }
                >
                  {`// ${text}`}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
              >
                IDENTIFY
              </span>
              <span className="text-white/30"> // </span>
              <span
                className="text-[#ff00ff]"
                style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
              >
                TRAIN
              </span>
              <span className="text-white/30"> // </span>
              <span
                className="text-[#f0ff00]"
                style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
              >
                LAUNCH
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              {`> ${siteData.whatWeDo.description}`}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.whatWeDo.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#1a1a2e] border border-[#00fff0]/30 hover:border-[#00fff0] transition-all group cursor-pointer"
                style={{
                  clipPath:
                    "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)",
                  boxShadow: "0 0 20px rgba(0, 255, 240, 0.1)",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-[#00fff0] font-bold text-2xl"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      textShadow: "0 0 10px #00fff0",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 group-hover:text-white transition-colors">
                    {pillar}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-[#f0ff00] font-bold text-xl"
            style={{
              fontFamily: '"Syne", sans-serif',
              textShadow: "0 0 15px rgba(240, 255, 0, 0.5)",
            }}
          >
            {">>> "}
            {siteData.whatWeDo.tagline}
          </motion.p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#00fff0]/30 via-transparent to-[#00fff0]/30" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-[#ff00ff]/30 via-transparent to-[#ff00ff]/30" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-[#00fff0]/30 via-transparent to-[#00fff0]/30" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              {"<"}
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
              >
                IMPACT
              </span>
              {" />"}
            </h2>
            <p className="text-white/50 font-mono">{`// ${siteData.impact.since}`}</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {siteData.impact.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#0a0a0f] border border-[#ff00ff]/30 text-center relative group hover:border-[#ff00ff] transition-all cursor-pointer"
                style={{ boxShadow: "0 0 30px rgba(255, 0, 255, 0.1)" }}
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#ff00ff]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#ff00ff]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#ff00ff]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#ff00ff]" />

                <p
                  className="text-4xl md:text-5xl font-bold text-[#ff00ff] mb-2"
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    textShadow: "0 0 25px rgba(255, 0, 255, 0.8)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[#0a0a0f] border border-[#00fff0]/30"
            style={{
              clipPath:
                "polygon(0 0, 98% 0, 100% 5%, 100% 100%, 2% 100%, 0 95%)",
            }}
          >
            <h3
              className="text-xl font-bold text-[#00fff0] mb-6"
              style={{
                fontFamily: '"Syne", sans-serif',
                textShadow: "0 0 15px rgba(0, 255, 240, 0.5)",
              }}
            >
              {"> ACHIEVEMENTS_LOG"}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {siteData.impact.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <span className="text-[#f0ff00]">▸</span>
                  <span className="text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/50 to-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[600px] md:h-[600px] bg-[#ff00ff]/10 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              {siteData.cta.headline}
            </h2>
            <p
              className="text-2xl md:text-3xl text-[#ff00ff] mb-4"
              style={{
                fontFamily: '"Syne", sans-serif',
                textShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
              }}
            >
              {siteData.cta.subheadline}
            </p>
            <p
              className="text-xl text-[#00fff0] mb-12"
              style={{ textShadow: "0 0 15px rgba(0, 255, 240, 0.5)" }}
            >
              {">>> "}
              {siteData.cta.question}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#00fff0] text-[#0a0a0f] font-bold uppercase tracking-wider hover:scale-105 transition-all cursor-pointer"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                  boxShadow: "0 0 40px rgba(0, 255, 240, 0.5)",
                }}
              >
                START BUILDING
              </a>
              <Link
                to="/4/about"
                className="px-10 py-4 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] font-bold uppercase tracking-wider hover:bg-[#ff00ff]/10 transition-all cursor-pointer"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                }}
              >
                LEARN MORE
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
