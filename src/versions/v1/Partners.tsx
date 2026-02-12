import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V1Partners() {
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
            {siteData.partners.headline}
          </motion.h1>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Why <span className="text-amber-400">Partner</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteData.partners.whyPartner.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  <span className="text-lg">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-24 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Partnership <span className="text-amber-400">Options</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {siteData.partners.options.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#141c2e] rounded-3xl border border-[#1e293b] hover:border-amber-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-amber-400 font-bold text-xl">
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {option.title}
                </h3>
                <p className="text-gray-400">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0d1424] to-[#0a0f1c]">
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
              Ready to <span className="text-amber-400">Partner</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's build the future of African entrepreneurship together.
            </p>
            <a
              href={`mailto:${siteData.brand.partnerEmail}`}
              className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg"
            >
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
