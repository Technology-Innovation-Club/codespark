import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V1Startups() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our <span className="text-amber-400">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Meet the incredible student startups building the future of Africa
          </motion.p>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.startupsList.map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-[#141c2e] rounded-3xl border border-[#1e293b] hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-colors">
                    <span className="text-amber-400 font-bold text-xl">
                      {startup.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {startup.name}
                    </h3>
                    <span className="inline-block px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded mt-1">
                      {startup.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{startup.description}</p>

                <div className="pt-6 border-t border-[#1e293b] space-y-2">
                  <p className="text-sm text-gray-500">{startup.traction}</p>
                  <p className="text-amber-400 font-semibold">
                    {startup.stats}
                  </p>
                </div>

                <a
                  href={startup.website}
                  className="inline-flex items-center mt-6 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Visit Website
                  <svg
                    className="w-4 h-4 ml-2"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0a0f1c]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Want to be part of our{" "}
              <span className="text-amber-400">portfolio</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Apply to the CodeSpark Incubator and turn your idea into reality.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg"
            >
              Apply to Incubator
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
