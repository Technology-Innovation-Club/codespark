import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V4Event() {
  const event = siteData.programs.event;

  return (
    <div
      className="overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Hero */}
      <section className="relative pt-14 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[600px] md:h-[600px] bg-[#ff00ff]/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 left-20 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-[#00fff0]/10 rounded-full blur-[100px]" />
        </div>

        {/* Animated scan lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent"
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Corner frames */}
        <div className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-[#ff00ff]/50" />
        <div className="absolute bottom-24 right-8 w-32 h-32 border-r-2 border-b-2 border-[#00fff0]/50" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span
              className="px-4 py-2 bg-[#1a1a2e] border border-[#ff00ff]/50 text-[#ff00ff] text-sm"
              style={{ boxShadow: "0 0 15px rgba(255, 0, 255, 0.3)" }}
            >
              {`DATE: ${event.date}`}
            </span>
            <span
              className="px-4 py-2 bg-[#1a1a2e] border border-[#00fff0]/50 text-[#00fff0] text-sm"
              style={{ boxShadow: "0 0 15px rgba(0, 255, 240, 0.3)" }}
            >
              {`LOCATION: ${event.location}`}
            </span>
            <span
              className="px-4 py-2 bg-[#1a1a2e] border border-[#f0ff00]/50 text-[#f0ff00] text-sm"
              style={{ boxShadow: "0 0 15px rgba(240, 255, 0, 0.3)" }}
            >
              {`CAPACITY: ${event.attendance}`}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 30px rgba(255, 0, 255, 0.8)" }}
            >
              CODE
            </span>
            <span
              className="text-[#00fff0]"
              style={{ textShadow: "0 0 30px rgba(0, 255, 240, 0.8)" }}
            >
              SPARK
            </span>
            <br />
            <span className="text-white">EVENT</span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 30px rgba(240, 255, 0, 0.8)" }}
            >
              _2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {`> ${event.whatItIs}`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#00fff0] font-bold text-lg"
            style={{ textShadow: "0 0 15px rgba(0, 255, 240, 0.5)" }}
          >
            {`// ${event.tagline}`}
          </motion.p>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#1a1a2e] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00fff0]/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span className="text-white block sm:inline">WHO</span>
            <span
              className="text-[#00fff0] block sm:inline"
              style={{ textShadow: "0 0 20px rgba(0, 255, 240, 0.5)" }}
            >
              _SHOULD
            </span>
            <span
              className="text-[#ff00ff] block sm:inline"
              style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
            >
              _ATTEND
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {event.whoShouldAttend.map((attendee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-full sm:w-auto max-w-md px-5 py-3 bg-[#0a0a0f] border border-[#00fff0]/30 hover:border-[#00fff0] transition-all"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 240, 0.1)",
                }}
              >
                <span className="text-[#00fff0] mr-2">▸</span>
                <span className="text-white/80 break-words">{attendee}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff00ff]/30 to-transparent" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-[#00fff0]/30 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative">
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
              {"{ "}
            </span>
            <span className="text-white block sm:inline">EVENT</span>
            <span
              className="text-[#ff00ff] block sm:inline"
              style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.5)" }}
            >
              _HIGHLIGHTS
            </span>
            <span
              className="text-[#f0ff00]"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              {" }"}
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {event.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#1a1a2e] border-l-4 border-[#ff00ff] hover:bg-[#1a1a2e]/80 transition-all group"
                style={{ boxShadow: "-4px 0 20px rgba(255, 0, 255, 0.2)" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-[#ff00ff] font-bold text-xl shrink-0"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      textShadow: "0 0 10px #ff00ff",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 group-hover:text-white transition-colors break-words">
                    {highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0ff00]/50 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 leading-tight"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            <span className="text-white block sm:inline">FEATURED</span>
            <span
              className="text-[#f0ff00] block sm:inline"
              style={{ textShadow: "0 0 20px rgba(240, 255, 0, 0.5)" }}
            >
              _SPEAKERS
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-[#1a1a2e] border border-[#f0ff00]/20 hover:border-[#f0ff00]/50 transition-all group overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, 90% 0, 100% 15%, 100% 100%, 10% 100%, 0 85%)",
                  boxShadow: "0 0 30px rgba(240, 255, 0, 0.1)",
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0ff00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {speaker.image ? (
                  <div
                    className="w-20 h-20 mx-auto mb-4 border-2 border-[#f0ff00]/30 overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                    }}
                  >
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="w-20 h-20 mx-auto mb-4 bg-[#0a0a0f] border-2 border-[#f0ff00]/30 flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                    }}
                  >
                    <span
                      className="text-[#f0ff00] text-2xl font-bold"
                      style={{
                        fontFamily: '"Syne", sans-serif',
                        textShadow: "0 0 10px rgba(240, 255, 0, 0.5)",
                      }}
                    >
                      {speaker.name[0]}
                    </span>
                  </div>
                )}

                <h3
                  className="text-lg font-bold text-white text-center mb-1 relative z-10"
                  style={{ fontFamily: '"Syne", sans-serif' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-[#f0ff00]/80 text-sm text-center relative z-10">
                  {speaker.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] bg-[#ff00ff]/15 rounded-full blur-[150px]" />
        </div>

        {/* Circuit decoration */}
        <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#00fff0]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-[#ff00ff]/50 to-transparent" />

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
              SECURE YOUR{" "}
              <span
                className="text-[#ff00ff]"
                style={{ textShadow: "0 0 30px rgba(255, 0, 255, 0.8)" }}
              >
                SPOT
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-4">
              {`> ${event.attendance} builders. One day. Unlimited possibilities_`}
            </p>
            <p
              className="text-[#00fff0] text-sm mb-10"
              style={{ textShadow: "0 0 10px rgba(0, 255, 240, 0.5)" }}
            >
              {`// ${event.date} @ ${event.location}`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="px-12 py-5 bg-[#ff00ff] text-white font-bold uppercase tracking-wider hover:scale-105 transition-all"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
                  boxShadow: "0 0 50px rgba(255, 0, 255, 0.6)",
                }}
              >
                REGISTER_NOW
              </a>
              <a
                href="https://drive.google.com/file/d/1GsOA8psdMa-VLyg9ZeIBna43jane0Ahq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-transparent border-2 border-[#00fff0] text-[#00fff0] font-bold uppercase tracking-wider hover:bg-[#00fff0]/10 transition-all"
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
