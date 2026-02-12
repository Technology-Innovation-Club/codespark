import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V3About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#faf8f5] to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#6b8f71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-[#c45d3e]/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-20 h-20 border-2 border-[#6b8f71]/20 rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c45d3e]/10 border border-[#c45d3e]/20 rounded-full text-[#c45d3e] text-sm font-medium mb-8"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {siteData.about.headline}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c45d3e] via-[#6b8f71] to-[#c45d3e] rounded-full" />
            <div className="space-y-8 pl-10">
              {siteData.about.story.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl text-[#2d2418]/70 leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 bg-[#2d2418]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-[#c45d3e] text-sm font-medium tracking-wider uppercase">
              Our Vision
            </span>
            <div className="mt-6 relative">
              <svg
                className="w-12 h-12 text-[#c45d3e]/20 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p
                className="text-2xl md:text-3xl text-[#faf8f5] leading-relaxed"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                {siteData.about.vision}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Our <span className="text-[#6b8f71]">Pillars</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.about.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-[#2d2418]/10 hover:border-[#6b8f71]/30 hover:shadow-xl hover:shadow-[#6b8f71]/5 transition-all group"
              >
                <div className="w-14 h-14 bg-[#6b8f71]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6b8f71] transition-colors">
                  <span className="text-[#6b8f71] font-bold text-lg group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-[#2d2418]"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[#2d2418]/60 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            What Drives <span className="text-[#c45d3e]">Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#c45d3e]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#c45d3e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-3 text-[#2d2418]"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Faith-Driven
              </h3>
              <p className="text-[#2d2418]/60">
                Building with purpose and principled values at our core
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#6b8f71]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#6b8f71]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-3 text-[#2d2418]"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Community-First
              </h3>
              <p className="text-[#2d2418]/60">
                Fostering connections and collaboration among founders
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#c45d3e]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#c45d3e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-3 text-[#2d2418]"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Execution-Focused
              </h3>
              <p className="text-[#2d2418]/60">
                Revenue before hype, results before recognition
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#c45d3e]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#faf8f5]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Join us in building Africa's future
            </h2>
            <p className="text-xl text-[#faf8f5]/70 mb-10">
              Whether you're a student founder, mentor, or partner—there's a
              place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#faf8f5] text-[#c45d3e] font-bold rounded-full hover:bg-white transition-all"
              >
                Apply to Incubator
              </a>
              <a
                href={`mailto:${siteData.brand.partnerEmail}`}
                className="px-8 py-4 border-2 border-[#faf8f5]/30 text-[#faf8f5] font-bold rounded-full hover:bg-[#faf8f5]/10 transition-all"
              >
                Become a Partner
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
