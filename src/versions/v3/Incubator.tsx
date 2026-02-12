import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V3Incubator() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#faf8f5] to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#c45d3e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#6b8f71]/10 rounded-full blur-3xl" />
        <div className="absolute top-32 left-1/4 w-20 h-20 border-2 border-[#c45d3e]/20 rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6b8f71]/10 border border-[#6b8f71]/20 rounded-full text-[#6b8f71] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-[#6b8f71] rounded-full animate-pulse" />
            Applications Open November 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {siteData.programs.incubator.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#2d2418]/60 max-w-2xl mx-auto leading-relaxed"
          >
            Where Student Ideas Become Revenue-Generating Startups.
          </motion.p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-[#2d2418] rounded-3xl text-center"
          >
            <p className="text-[#faf8f5]/70 text-lg leading-relaxed mb-4">
              {siteData.programs.incubator.description}
            </p>
            <p
              className="text-[#c45d3e] text-xl font-semibold"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              {siteData.programs.incubator.outcome}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Program <span className="text-[#c45d3e]">Structure</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c45d3e] via-[#6b8f71] to-[#c45d3e] rounded-full" />

            <div className="space-y-12">
              {siteData.programs.incubator.phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`p-8 bg-white rounded-3xl border border-[#2d2418]/10 shadow-xl shadow-[#2d2418]/5 ${
                        i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      } max-w-md`}
                    >
                      <span className="text-[#c45d3e] text-sm font-semibold tracking-wide">
                        {phase.name}
                      </span>
                      <h3
                        className="text-xl font-bold mt-2 text-[#2d2418]"
                        style={{ fontFamily: '"Fraunces", serif' }}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-[#2d2418]/60 mt-2">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#c45d3e] to-[#e07558] rounded-2xl flex items-center justify-center shadow-lg shadow-[#c45d3e]/30 flex-shrink-0">
                    <span className="text-[#faf8f5] font-bold text-lg">
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            What Makes It <span className="text-[#6b8f71]">Different</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteData.programs.incubator.differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#faf8f5] rounded-3xl border border-[#2d2418]/10 hover:border-[#6b8f71]/30 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#6b8f71]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6b8f71] transition-colors">
                    <svg
                      className="w-6 h-6 text-[#6b8f71] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-[#2d2418] font-medium">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#6b8f71]">
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
              Ready to build your startup?
            </h2>
            <p className="text-xl text-[#faf8f5]/70 mb-10 leading-relaxed">
              Join the next cohort of student founders and turn your idea into a
              revenue-generating business.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-[#faf8f5] text-[#6b8f71] font-bold rounded-full hover:bg-white hover:shadow-2xl transition-all text-lg"
            >
              Apply to Incubator
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
