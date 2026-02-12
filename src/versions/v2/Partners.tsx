import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V2Partners() {
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
            {siteData.partners.headline}
          </motion.h1>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Why Partner?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {siteData.partners.whyPartner.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-white"
              >
                <span className="text-lg font-black uppercase tracking-wide">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-24 px-6 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Partnership Options
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {siteData.partners.options.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-4 border-black hover:bg-black hover:text-white transition-all group"
              >
                <div
                  className="text-4xl font-black mb-4"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">
                  {option.title}
                </h3>
                <p className="group-hover:text-gray-300">
                  {option.description}
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
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's build the future of African entrepreneurship together.
            </p>
            <a
              href={`mailto:${siteData.brand.partnerEmail}`}
              className="inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Become a Partner →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
