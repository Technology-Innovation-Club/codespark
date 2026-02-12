import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V2Startups() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-32 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Meet the incredible student startups building the future of Africa
          </motion.p>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.startupsList.map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border-4 border-black hover:bg-black hover:text-white transition-all"
              >
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                  {startup.category}
                </span>
                <h3
                  className="text-2xl font-black uppercase tracking-tighter mt-2 mb-4"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {startup.name}
                </h3>
                <p className="group-hover:text-gray-300">
                  {startup.description}
                </p>
                <div className="mt-6 pt-6 border-t-2 border-current">
                  <p className="text-sm text-gray-500 group-hover:text-gray-300">
                    {startup.traction}
                  </p>
                  <p className="font-black mt-2">{startup.stats}</p>
                </div>
                <a
                  href={startup.website}
                  className="inline-block mt-4 font-black uppercase tracking-wider underline decoration-4 underline-offset-4"
                >
                  Visit →
                </a>
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
              Want to Join Our Portfolio?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Apply to the CodeSpark Incubator and turn your idea into reality.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Apply to Incubator →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
