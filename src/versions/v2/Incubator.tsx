import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V2Incubator() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-32 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 border-4 border-black text-sm font-black uppercase tracking-widest mb-8"
          >
            Applications Open November 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            {siteData.programs.incubator.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Where Student Ideas Become Revenue-Generating Startups.
          </motion.p>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Program Structure
          </motion.h2>

          <div className="space-y-4">
            {siteData.programs.incubator.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 border-4 border-white"
              >
                <div
                  className="text-5xl font-black"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">
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
      <section className="py-24 px-6 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            What Makes It Different
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {siteData.programs.incubator.differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black hover:bg-black hover:text-white transition-colors"
              >
                <span className="text-lg font-black uppercase tracking-wide">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Cohort */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Current Cohort
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.startupsList.map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black hover:bg-black hover:text-white transition-colors group"
              >
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                  {startup.category}
                </span>
                <h3
                  className="text-xl font-black uppercase tracking-tighter mt-2"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {startup.name}
                </h3>
                <p className="text-sm mt-2 group-hover:text-gray-300">
                  {startup.description}
                </p>
                <div className="mt-4 pt-4 border-t-2 border-current">
                  <p className="text-xs text-gray-500 group-hover:text-gray-300">
                    {startup.traction}
                  </p>
                  <p className="text-sm font-black mt-1">{startup.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
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
              className="inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Join Waitlist →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
