import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V1About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {siteData.about.headline}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600" />
            <div className="space-y-6 pl-8">
              {siteData.about.story.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-300"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 bg-[#0a0f1c]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Our Vision
            </span>
            <p
              className="text-2xl md:text-3xl text-gray-300 mt-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              "{siteData.about.vision}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our <span className="text-amber-400">Pillars</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.about.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] hover:border-amber-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-amber-400 font-bold">{i + 1}</span>
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-gray-400">{pillar.description}</p>
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
              Join the <span className="text-amber-400">Movement</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Be part of building Africa's next generation of founders.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
