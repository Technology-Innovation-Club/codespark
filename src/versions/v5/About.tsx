import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5About() {
  const { about } = siteData;

  return (
    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#e8e4f0]/60 text-[#6b5b95] text-sm font-medium rounded-full mb-6"
          >
            ✨ Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6"
          >
            {about.headline}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-[#e8e4f0]/30 rounded-3xl p-10 md:p-14 border border-[#e8e4f0]/50">
            <div className="space-y-6">
              {about.story.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-lg leading-relaxed ${
                    index === about.story.length - 1
                      ? "text-[#6b5b95] font-semibold"
                      : "text-[#2d2d2d]/70"
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision */}
      <section className="px-6 py-24 bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#e0f2f1] to-[#e8e4f0] rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl">🌍</span>
          </div>
          <h2 className="text-2xl font-semibold text-[#6b5b95] mb-4">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-[#2d2d2d] leading-relaxed font-medium">
            "{about.vision}"
          </p>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-4"
          >
            What We Stand For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#2d2d2d]/60 text-center mb-12"
          >
            The pillars that guide everything we do
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${
                  index === 0
                    ? "bg-[#e8e4f0]/40 md:col-span-2 lg:col-span-1"
                    : index === 1
                    ? "bg-[#e0f2f1]/40"
                    : index === 2
                    ? "bg-[#fff9e6]/40"
                    : index === 3
                    ? "bg-[#fce4ec]/40"
                    : "bg-[#e8e4f0]/40"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0
                      ? "bg-[#e8e4f0]"
                      : index === 1
                      ? "bg-[#e0f2f1]"
                      : index === 2
                      ? "bg-[#fff9e6]"
                      : index === 3
                      ? "bg-[#fce4ec]"
                      : "bg-[#e8e4f0]"
                  }`}
                >
                  <span className="text-xl">
                    {index === 0
                      ? "🎯"
                      : index === 1
                      ? "🌐"
                      : index === 2
                      ? "📚"
                      : index === 3
                      ? "💡"
                      : "📈"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#2d2d2d]/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#e8e4f0]/30 to-[#fce4ec]/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">
              Built With Purpose
            </h2>
            <p className="text-[#2d2d2d]/60 max-w-xl mx-auto">
              CodeSpark is powered by a passionate team of educators,
              entrepreneurs, and believers in African potential.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Academic Excellence",
                desc: "Rooted in Pan-Atlantic University",
              },
              {
                icon: "🤝",
                title: "Faith-Driven",
                desc: "Principled approach to entrepreneurship",
              },
              {
                icon: "🚀",
                title: "Execution Focus",
                desc: "Results over rhetoric",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#e8e4f0]/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#e8e4f0] to-[#fce4ec] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2d2d2d]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-[#e8e4f0]/50">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-4">
              Let's Connect
            </h2>
            <p className="text-[#2d2d2d]/60 mb-8">
              Have questions or want to learn more about what we do?
            </p>
            <a
              href={`mailto:${siteData.brand.email}`}
              className="inline-block px-10 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
