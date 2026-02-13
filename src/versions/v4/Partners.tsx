import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V4Partners() {
  const partners = siteData.partners;

  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero */}
      <section className="relative py-32 px-6">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[600px] md:h-[600px] bg-[#00fff0]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] bg-[#ff00ff]/10 rounded-full blur-[120px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            radial-gradient(circle at center, #00fff0 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Corner decorations */}
        <div className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-[#00fff0]/40" />
        <div className="absolute top-24 right-8 w-32 h-32 border-r-2 border-t-2 border-[#ff00ff]/40" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a2e] border border-[#f0ff00]/50 text-[#f0ff00] text-sm font-medium"
              style={{
                clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                boxShadow: "0 0 20px rgba(240, 255, 0, 0.2)",
              }}
            >
              <span
                className="w-2 h-2 bg-[#f0ff00] animate-pulse"
                style={{ boxShadow: "0 0 10px #f0ff00" }}
              />
              {"// PARTNERSHIP_OPPORTUNITIES_OPEN"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 30px rgba(255, 0, 255, 0.5)" }}
            >
              {"< "}
            </span>
            <span className="text-white">FOR</span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              _PARTNERS
            </span>
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 30px rgba(255, 0, 255, 0.5)" }}
            >
              {" />"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            {partners.headline}
          </motion.p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 px-6 bg-[#1a1a2e] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />

        {/* Side circuit */}
        <div className="absolute right-0 top-1/4 w-1/4 h-px bg-gradient-to-l from-[#00fff0]/50 to-transparent" />
        <div className="absolute left-0 bottom-1/4 w-1/4 h-px bg-gradient-to-r from-[#ff00ff]/50 to-transparent" />

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
            <span className="text-white">WHY</span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              _PARTNER
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {" }"}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.whyPartner.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#0a0a0f] border border-[#00fff0]/30 hover:border-[#00fff0] transition-all group"
                style={{
                  clipPath:
                    i % 2 === 0
                      ? "polygon(0 0, 97% 0, 100% 8%, 100% 100%, 3% 100%, 0 92%)"
                      : "polygon(3% 0, 100% 0, 100% 92%, 97% 100%, 0 100%, 0 8%)",
                  boxShadow: "0 0 30px rgba(0, 255, 240, 0.1)",
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-[#00fff0] font-bold text-3xl shrink-0"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      textShadow: "0 0 15px #00fff0",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 group-hover:text-white transition-colors text-lg">
                    {reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-24 px-6 relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#ff00ff]/30 to-transparent"
            style={{ left: "25%" }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#00fff0]/30 to-transparent"
            style={{ left: "50%" }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#f0ff00]/30 to-transparent"
            style={{ left: "75%" }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span className="text-white">PARTNERSHIP</span>
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
            >
              _OPTIONS
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.options.map((option, i) => {
              const colors = [
                {
                  border: "#00fff0",
                  shadow: "rgba(0, 255, 240, 0.3)",
                  accent: "#00fff0",
                },
                {
                  border: "#ff00ff",
                  shadow: "rgba(255, 0, 255, 0.3)",
                  accent: "#ff00ff",
                },
                {
                  border: "#f0ff00",
                  shadow: "rgba(240, 255, 0, 0.3)",
                  accent: "#f0ff00",
                },
                {
                  border: "#00fff0",
                  shadow: "rgba(0, 255, 240, 0.3)",
                  accent: "#00fff0",
                },
              ][i];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative p-8 bg-[#1a1a2e] border-2 group overflow-hidden"
                  style={{
                    borderColor: `${colors.border}50`,
                    clipPath:
                      "polygon(0 0, 95% 0, 100% 8%, 100% 100%, 5% 100%, 0 92%)",
                    boxShadow: `0 0 40px ${colors.shadow}`,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${colors.border}, transparent)`,
                    }}
                  />

                  {/* Corner accents */}
                  <div
                    className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2"
                    style={{ borderColor: colors.border }}
                  />
                  <div
                    className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2"
                    style={{ borderColor: colors.border }}
                  />

                  {/* Number badge */}
                  <div
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border"
                    style={{
                      borderColor: colors.border,
                      boxShadow: `0 0 15px ${colors.shadow}`,
                    }}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{
                        color: colors.accent,
                        fontFamily: '"Syne", sans-serif',
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-4 relative z-10"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      color: colors.accent,
                      textShadow: `0 0 20px ${colors.shadow}`,
                    }}
                  >
                    {option.title}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors leading-relaxed relative z-10">
                    {option.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1"
                    style={{ background: colors.border }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats/Impact for Partners */}
      <section className="py-24 px-6 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/30 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              {"> "}
            </span>
            <span className="text-white">YOUR_IMPACT</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Builders Reached" },
              { value: "14", label: "Startups Incubated" },
              { value: "6+", label: "Universities" },
              { value: "₦10M+", label: "Capital Raised" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#1a1a2e] border border-[#f0ff00]/20 text-center group hover:border-[#f0ff00]/50 transition-all"
                style={{ boxShadow: "0 0 20px rgba(240, 255, 0, 0.1)" }}
              >
                <p
                  className="text-3xl md:text-4xl font-bold text-[#f0ff00] mb-2"
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    textShadow: "0 0 20px rgba(240, 255, 0, 0.5)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[600px] md:h-[600px] bg-[#ff00ff]/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/4 right-1/4 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-[#00fff0]/10 rounded-full blur-[100px]" />
        </div>

        {/* Animated lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#00fff0]/50 via-transparent to-[#ff00ff]/50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
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
              LET'S{" "}
              <span
                className="text-[#00fff0]"
                style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
              >
                BUILD
              </span>{" "}
              TOGETHER
            </h2>
            <p className="text-white/60 text-lg mb-4">
              {`// Shape the future of African tech entrepreneurship_`}
            </p>
            <p
              className="text-[#f0ff00] text-sm mb-10"
              style={{ textShadow: "0 0 10px rgba(240, 255, 0, 0.5)" }}
            >
              {`CONTACT: ${siteData.brand.partnerEmail}`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteData.brand.partnerEmail}`}
                className="px-12 py-5 bg-[#00fff0] text-[#0a0a0f] font-bold uppercase tracking-wider hover:scale-105 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                  boxShadow: "0 0 50px rgba(0, 255, 240, 0.6)",
                }}
              >
                BECOME_A_PARTNER
              </a>
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] font-bold uppercase tracking-wider hover:bg-[#ff00ff]/10 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                }}
              >
                SPONSOR_EVENT
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
