import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";

export function V4About() {
  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero */}
      <section className="relative py-32 px-6">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-[#ff00ff]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#00fff0]/10 rounded-full blur-[120px]" />
        </div>

        {/* Decorative frames */}
        <div className="absolute top-24 left-8 w-40 h-40 border-l-2 border-t-2 border-[#ff00ff]/30" />
        <div className="absolute bottom-24 right-8 w-40 h-40 border-r-2 border-b-2 border-[#00fff0]/30" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              {"{ "}
            </span>
            <span className="text-white">ABOUT</span>
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 30px rgba(255, 0, 255, 0.8)" }}
            >
              _US
            </span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              {" }"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-[#f0ff00] max-w-3xl mx-auto"
            style={{
              fontFamily: '"Syne", sans-serif',
              textShadow: "0 0 15px rgba(240, 255, 0, 0.5)",
            }}
          >
            {siteData.about.headline}
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-[#1a1a2e] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />

        {/* Side decoration */}
        <div
          className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-[#00fff0] via-[#ff00ff] to-[#00fff0]"
          style={{ boxShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
        />

        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              {"> "}
            </span>
            <span className="text-white">OUR</span>
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
            >
              _STORY
            </span>
          </motion.h2>

          <div className="space-y-6 pl-8 border-l-2 border-[#00fff0]/30">
            {siteData.about.story.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-white/70 text-lg leading-relaxed relative"
              >
                <span
                  className="absolute -left-6 top-2 w-2 h-2 bg-[#ff00ff]"
                  style={{ boxShadow: "0 0 10px #ff00ff" }}
                />
                {`// ${text}`}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-[#f0ff00]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-[#1a1a2e] border-2 border-[#f0ff00]/30 relative"
            style={{
              clipPath:
                "polygon(0 0, 97% 0, 100% 5%, 100% 100%, 3% 100%, 0 95%)",
              boxShadow: "0 0 50px rgba(240, 255, 0, 0.2)",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#f0ff00]" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#f0ff00]" />

            <h3
              className="text-2xl font-bold text-[#f0ff00] mb-6"
              style={{
                fontFamily: '"Syne", sans-serif',
                textShadow: "0 0 20px rgba(240, 255, 0, 0.5)",
              }}
            >
              {"<VISION/>"}
            </h3>
            <p className="text-white/80 text-xl leading-relaxed">
              {siteData.about.vision}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/30 to-transparent" />

        {/* Vertical lines decoration */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #00fff0 0, #00fff0 1px, transparent 1px, transparent 100px)`,
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span className="text-white">CORE</span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              _PILLARS
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.about.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#1a1a2e] border border-[#ff00ff]/20 hover:border-[#ff00ff]/60 transition-all group relative overflow-hidden"
                style={{
                  clipPath:
                    i % 2 === 0
                      ? "polygon(0 0, 95% 0, 100% 8%, 100% 100%, 5% 100%, 0 92%)"
                      : "polygon(5% 0, 100% 0, 100% 92%, 95% 100%, 0 100%, 0 8%)",
                  boxShadow: "0 0 30px rgba(255, 0, 255, 0.1)",
                }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Number */}
                <span
                  className="absolute top-4 right-4 text-5xl font-bold text-[#ff00ff]/10 group-hover:text-[#ff00ff]/20 transition-colors"
                  style={{ fontFamily: '"Syne", sans-serif' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3
                  className="text-xl font-bold text-[#ff00ff] mb-3 relative z-10"
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    textShadow: "0 0 15px rgba(255, 0, 255, 0.5)",
                  }}
                >
                  {pillar.title}
                </h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors text-sm leading-relaxed relative z-10">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Founder Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/50 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
              >
                {"{ "}
              </span>
              <span className="text-white">THE</span>
              <span
                className="text-[#f0ff00]"
                style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
              >
                _TEAM
              </span>
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
              >
                {" }"}
              </span>
            </h2>

            <div
              className="inline-block p-8 bg-[#1a1a2e] border border-[#00fff0]/30"
              style={{
                clipPath:
                  "polygon(3% 0, 97% 0, 100% 5%, 100% 95%, 97% 100%, 3% 100%, 0 95%, 0 5%)",
                boxShadow: "0 0 40px rgba(0, 255, 240, 0.2)",
              }}
            >
              <div
                className="w-24 h-24 mx-auto mb-4 bg-[#0a0a0f] border-2 border-[#00fff0] flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                  boxShadow: "0 0 30px rgba(0, 255, 240, 0.3)",
                }}
              >
                <span
                  className="text-[#00fff0] text-3xl font-bold"
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    textShadow: "0 0 15px #00fff0",
                  }}
                >
                  P
                </span>
              </div>
              <p className="text-white/60 mb-2 text-sm">// FOUNDER & LEAD</p>
              <p
                className="text-[#00fff0] font-mono text-sm"
                style={{ textShadow: "0 0 10px rgba(0, 255, 240, 0.5)" }}
              >
                {siteData.brand.email}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[600px] md:h-[600px] bg-[#ff00ff]/10 rounded-full blur-[150px]" />
        </div>

        {/* Animated scan line */}
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: "100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

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
              JOIN THE{" "}
              <span
                className="text-[#ff00ff]"
                style={{ textShadow: "0 0 30px rgba(255, 0, 255, 0.8)" }}
              >
                MOVEMENT
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {`// Be part of building Africa's next generation of tech founders_`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-[#ff00ff] text-white font-bold uppercase tracking-wider hover:scale-105 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                  boxShadow: "0 0 50px rgba(255, 0, 255, 0.6)",
                }}
              >
                APPLY_NOW
              </a>
              <Link
                to="/4/for-partners"
                className="px-12 py-5 bg-transparent border-2 border-[#00fff0] text-[#00fff0] font-bold uppercase tracking-wider hover:bg-[#00fff0]/10 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                }}
              >
                PARTNER_WITH_US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
