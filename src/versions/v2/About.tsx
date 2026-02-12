import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V2About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-32 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            {siteData.about.headline}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {siteData.about.story.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl border-l-4 border-white pl-6"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-black uppercase tracking-widest">
              Our Vision
            </span>
            <p
              className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-6"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              "{siteData.about.vision}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Our Pillars
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.about.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black hover:bg-black hover:text-white transition-colors group"
              >
                <div
                  className="text-3xl font-black mb-4"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm group-hover:text-gray-300">
                  {pillar.description}
                </p>
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
              Join The Movement
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Be part of building Africa's next generation of founders.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Apply Now →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
