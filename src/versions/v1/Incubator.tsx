import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V1Incubator() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-8"
          >
            Applications Open November 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {siteData.programs.incubator.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          >
            Where Student Ideas Become Revenue-Generating Startups.
          </motion.p>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Program <span className="text-amber-400">Structure</span>
          </motion.h2>

          <div className="space-y-6">
            {siteData.programs.incubator.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0a0f1c] font-bold text-lg">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <span className="text-amber-400 text-sm font-medium">
                    {phase.name}
                  </span>
                  <h3
                    className="text-xl font-bold mt-1"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-24 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            What Makes It <span className="text-amber-400">Different</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteData.programs.incubator.differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-400"
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
                  <span className="text-lg font-medium">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Cohort */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Current Cohort <span className="text-amber-400">Startups</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.startupsList.map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-lg">
                      {startup.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-bold"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {startup.name}
                    </h3>
                    <span className="text-xs text-amber-400">
                      {startup.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {startup.description}
                </p>
                <div className="pt-4 border-t border-[#1e293b]">
                  <p className="text-sm text-gray-500">{startup.traction}</p>
                  <p className="text-amber-400 text-sm font-medium">
                    {startup.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
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
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Applications Open November 2026
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg"
            >
              Join Waitlist
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
