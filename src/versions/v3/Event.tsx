import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V3Event() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-[#2d2418] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c45d3e]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#6b8f71]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-[#faf8f5]/10 rounded-full" />
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-[#c45d3e]/20 rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <span className="px-5 py-2.5 bg-[#c45d3e]/20 rounded-full text-[#c45d3e] text-sm font-medium">
              {siteData.programs.event.date}
            </span>
            <span className="px-5 py-2.5 bg-[#faf8f5]/10 rounded-full text-[#faf8f5]/80 text-sm font-medium">
              {siteData.programs.event.location}
            </span>
            <span className="px-5 py-2.5 bg-[#6b8f71]/20 rounded-full text-[#6b8f71] text-sm font-medium">
              {siteData.programs.event.attendance}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-[#faf8f5]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {siteData.programs.event.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#faf8f5]/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {siteData.programs.event.whatItIs}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="https://forms.gle/fct465LJdSxLEGsj7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-[#c45d3e] text-[#faf8f5] font-bold rounded-full hover:bg-[#a84d32] transition-all shadow-xl shadow-[#c45d3e]/30 text-lg"
          >
            Register Now
          </motion.a>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-8 bg-[#c45d3e] rounded-full" />
            <p
              className="text-2xl md:text-3xl text-[#2d2418] pt-12"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              "{siteData.programs.event.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Who Should <span className="text-[#c45d3e]">Attend</span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-4">
            {siteData.programs.event.whoShouldAttend.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#faf8f5] rounded-3xl border border-[#2d2418]/10 text-center hover:border-[#c45d3e]/30 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-[#c45d3e]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c45d3e] transition-colors">
                  <svg
                    className="w-5 h-5 text-[#c45d3e] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="font-medium text-[#2d2418]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Event <span className="text-[#6b8f71]">Highlights</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.programs.event.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-[#2d2418]/10 hover:border-[#6b8f71]/30 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6b8f71]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#6b8f71] font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[#2d2418] font-medium pt-2">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Featured <span className="text-[#c45d3e]">Speakers</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.programs.event.speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#c45d3e] to-[#e07558] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#c45d3e]/20 group-hover:scale-105 transition-transform">
                  <span
                    className="text-[#faf8f5] font-bold text-2xl"
                    style={{ fontFamily: '"Fraunces", serif' }}
                  >
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#2d2418] mb-1"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-[#2d2418]/60">{speaker.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#c45d3e] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 border border-[#faf8f5]/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-[#faf8f5]/10 rounded-full" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#faf8f5]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Don't miss Africa's premier student builder event
            </h2>
            <p className="text-xl text-[#faf8f5]/70 mb-10">
              {siteData.programs.event.date} •{" "}
              {siteData.programs.event.location}
            </p>
            <a
              href="https://forms.gle/fct465LJdSxLEGsj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-[#faf8f5] text-[#c45d3e] font-bold rounded-full hover:bg-white hover:shadow-2xl transition-all text-lg"
            >
              Secure Your Spot
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
