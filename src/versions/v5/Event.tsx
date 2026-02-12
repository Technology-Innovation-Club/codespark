import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5Event() {
  const { event } = siteData.programs;

  return (
    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#fce4ec]/60 text-[#c2185b] text-sm font-medium rounded-full mb-6"
          >
            📅 {event.date}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6"
          >
            {event.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#2d2d2d]/60 max-w-2xl mx-auto mb-8"
          >
            {event.whatItIs}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-3 bg-[#e8e4f0]/50 rounded-xl">
              <span className="text-[#6b5b95] font-medium">
                📍 {event.location}
              </span>
            </div>
            <div className="px-6 py-3 bg-[#e0f2f1]/50 rounded-xl">
              <span className="text-[#2d6a5f] font-medium">
                👥 {event.attendance}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#e8e4f0] via-[#fce4ec] to-[#e0f2f1] rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#2d2d2d]">
              "{event.tagline}"
            </p>
          </div>
        </motion.div>
      </section>

      {/* Who Should Attend */}
      <section className="px-6 py-20 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            Who Should Attend?
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {event.whoShouldAttend.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-4 rounded-2xl font-medium ${
                  index === 0
                    ? "bg-[#e8e4f0] text-[#6b5b95]"
                    : index === 1
                    ? "bg-[#e0f2f1] text-[#2d6a5f]"
                    : index === 2
                    ? "bg-[#fff9e6] text-[#8d6e00]"
                    : index === 3
                    ? "bg-[#fce4ec] text-[#c2185b]"
                    : "bg-[#e8e4f0] text-[#6b5b95]"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            Event Highlights
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {event.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#e8e4f0]/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index % 4 === 0
                      ? "bg-[#e8e4f0]"
                      : index % 4 === 1
                      ? "bg-[#e0f2f1]"
                      : index % 4 === 2
                      ? "bg-[#fff9e6]"
                      : "bg-[#fce4ec]"
                  }`}
                >
                  <span className="text-lg">
                    {index === 0
                      ? "🎤"
                      : index === 1
                      ? "🔥"
                      : index === 2
                      ? "💡"
                      : index === 3
                      ? "📊"
                      : index === 4
                      ? "💰"
                      : index === 5
                      ? "🏆"
                      : "🤝"}
                  </span>
                </div>
                <span className="text-[#2d2d2d] font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#e8e4f0]/30 to-[#fce4ec]/20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-4"
          >
            Featured Speakers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#2d2d2d]/60 text-center mb-12"
          >
            Learn from industry leaders and successful founders
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#e8e4f0]/50"
              >
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl ${
                    index % 4 === 0
                      ? "bg-[#e8e4f0]"
                      : index % 4 === 1
                      ? "bg-[#e0f2f1]"
                      : index % 4 === 2
                      ? "bg-[#fff9e6]"
                      : "bg-[#fce4ec]"
                  }`}
                >
                  {speaker.name === "TBA" || speaker.title === "TBA"
                    ? "🎤"
                    : speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-[#6b5b95]">{speaker.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-[#e8e4f0]/50">
            <div className="w-16 h-16 bg-gradient-to-br from-[#e8e4f0] to-[#fce4ec] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎟️</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-4">
              Secure Your Spot
            </h2>
            <p className="text-[#2d2d2d]/60 mb-8">
              Join {event.attendance} at Lagos Business School for a day of
              insights, connections, and opportunities.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20"
            >
              Register for Event
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
