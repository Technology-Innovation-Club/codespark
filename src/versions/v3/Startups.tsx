import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V3Startups() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#faf8f5] to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#c45d3e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#6b8f71]/10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/3 w-16 h-16 border-2 border-[#c45d3e]/20 rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Our <span className="text-[#c45d3e]">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#2d2418]/60 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the incredible student startups building the future of Africa
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-[#2d2418]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteData.impact.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-[#c45d3e]"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
                  {stat.value}
                </span>
                <p className="text-[#faf8f5]/60 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.startupsList.map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 bg-white rounded-3xl border border-[#2d2418]/10 hover:border-[#c45d3e]/30 hover:shadow-2xl hover:shadow-[#c45d3e]/10 transition-all h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#c45d3e] to-[#e07558] rounded-2xl flex items-center justify-center shadow-lg shadow-[#c45d3e]/20 group-hover:scale-105 transition-transform">
                      <span className="text-[#faf8f5] font-bold text-xl">
                        {startup.name[0]}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-[#2d2418]"
                        style={{ fontFamily: '"Fraunces", serif' }}
                      >
                        {startup.name}
                      </h3>
                      <span className="inline-block px-3 py-0.5 bg-[#6b8f71]/10 text-[#6b8f71] text-xs font-medium rounded-full mt-1">
                        {startup.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#2d2418]/60 mb-6 leading-relaxed flex-grow">
                    {startup.description}
                  </p>

                  <div className="pt-6 border-t border-[#2d2418]/10 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-[#2d2418]/50">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      {startup.traction}
                    </div>
                    <p className="text-[#c45d3e] font-semibold">
                      {startup.stats}
                    </p>
                  </div>

                  <a
                    href={startup.website}
                    className="inline-flex items-center mt-6 text-[#c45d3e] hover:text-[#a84d32] transition-colors font-medium group-hover:gap-3 gap-2"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 bg-gradient-to-br from-[#6b8f71] to-[#4a6b4f] rounded-3xl text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#faf8f5]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#faf8f5]/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#faf8f5]"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Want to be part of our portfolio?
              </h2>
              <p className="text-xl text-[#faf8f5]/70 mb-10 leading-relaxed max-w-xl mx-auto">
                Apply to the CodeSpark Incubator and join the next generation of
                African tech founders.
              </p>
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-[#faf8f5] text-[#6b8f71] font-bold rounded-full hover:bg-white hover:shadow-2xl transition-all text-lg"
              >
                Apply to Incubator
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
