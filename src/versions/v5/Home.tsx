import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5Home() {
  const basePath = "/5";

  return (
    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#e8e4f0]/60 text-[#6b5b95] text-sm font-medium rounded-full mb-8">
              🚀 Building Africa's Future Founders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2d2d2d] leading-tight mb-6"
          >
            {siteData.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#2d2d2d]/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {siteData.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={siteData.hero.ctas[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20 hover:shadow-xl hover:shadow-[#6b5b95]/30"
            >
              {siteData.hero.ctas[0].text}
            </a>
            <Link
              to={`${basePath}/event`}
              className="px-8 py-4 bg-white text-[#6b5b95] font-semibold rounded-2xl border-2 border-[#e8e4f0] hover:border-[#6b5b95]/30 hover:bg-[#e8e4f0]/30 transition-all"
            >
              {siteData.hero.ctas[1].text}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Iyin Section */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#fff9e6] to-[#fce4ec]/50 rounded-3xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-8">
              {siteData.iyin.headline}
            </h2>
            <div className="space-y-4">
              {siteData.iyin.content.map((line, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${
                    index === siteData.iyin.content.length - 1
                      ? "text-[#6b5b95] font-semibold"
                      : "text-[#2d2d2d]/70"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-24 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              {siteData.whatWeDo.headline}
            </h2>
            <p className="text-lg text-[#2d2d2d]/60 max-w-xl mx-auto">
              {siteData.whatWeDo.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteData.whatWeDo.pillars.slice(0, 3).map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4f0]/50 hover:shadow-md hover:border-[#e8e4f0] transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    index === 0
                      ? "bg-[#e8e4f0]"
                      : index === 1
                      ? "bg-[#e0f2f1]"
                      : "bg-[#fce4ec]"
                  }`}
                >
                  <span className="text-2xl">
                    {index === 0 ? "🎯" : index === 1 ? "💡" : "🚀"}
                  </span>
                </div>
                <p className="text-[#2d2d2d] font-medium leading-relaxed">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-10 text-[#6b5b95] font-semibold text-lg"
          >
            {siteData.whatWeDo.tagline}
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              {siteData.impact.headline}
            </h2>
            <p className="text-[#2d2d2d]/60">{siteData.impact.since}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteData.impact.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 text-center ${
                  index === 0
                    ? "bg-[#e8e4f0]/50"
                    : index === 1
                    ? "bg-[#e0f2f1]/50"
                    : index === 2
                    ? "bg-[#fff9e6]/50"
                    : "bg-[#fce4ec]/50"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#6b5b95] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-[#2d2d2d]/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups Preview */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#e8e4f0]/20 to-[#fce4ec]/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              Meet Our Startups
            </h2>
            <p className="text-lg text-[#2d2d2d]/60">
              Student-led ventures building the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteData.startupsList.slice(0, 3).map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e4f0]/50 hover:shadow-md transition-all"
              >
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    index === 0
                      ? "bg-[#e8e4f0] text-[#6b5b95]"
                      : index === 1
                      ? "bg-[#e0f2f1] text-[#2d6a5f]"
                      : "bg-[#fce4ec] text-[#c2185b]"
                  }`}
                >
                  {startup.category}
                </span>
                <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2">
                  {startup.name}
                </h3>
                <p className="text-[#2d2d2d]/60 text-sm mb-4">
                  {startup.description}
                </p>
                <p className="text-xs text-[#6b5b95] font-medium">
                  {startup.traction}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              to={`${basePath}/startups`}
              className="inline-flex items-center gap-2 text-[#6b5b95] font-medium hover:gap-3 transition-all"
            >
              View all startups
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#e8e4f0] via-[#fce4ec]/50 to-[#e0f2f1]/50 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              {siteData.cta.headline}
            </h2>
            <p className="text-xl text-[#2d2d2d]/70 mb-2">
              {siteData.cta.subheadline}
            </p>
            <p className="text-2xl font-semibold text-[#6b5b95] mb-8">
              {siteData.cta.question}
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20"
            >
              Start Building With Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
