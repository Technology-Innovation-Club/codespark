import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5Partners() {
  const { partners } = siteData;

  return (
    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#e0f2f1]/60 text-[#2d6a5f] text-sm font-medium rounded-full mb-6"
          >
            🤝 Partnership Opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6"
          >
            {partners.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#2d2d2d]/60 max-w-2xl mx-auto"
          >
            Join us in shaping the future of African entrepreneurship and gain
            access to tomorrow's business leaders.
          </motion.p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-6 py-20 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            Why Partner With Us?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {partners.whyPartner.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#e8e4f0]/50 shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index === 0
                      ? "bg-[#e8e4f0]"
                      : index === 1
                      ? "bg-[#e0f2f1]"
                      : index === 2
                      ? "bg-[#fff9e6]"
                      : "bg-[#fce4ec]"
                  }`}
                >
                  <span className="text-lg">
                    {index === 0
                      ? "💼"
                      : index === 1
                      ? "📢"
                      : index === 2
                      ? "👥"
                      : "🌟"}
                  </span>
                </div>
                <p className="text-[#2d2d2d] font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-4"
          >
            Partnership Options
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#2d2d2d]/60 text-center mb-12"
          >
            Choose the partnership type that aligns with your goals
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.options.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border border-[#e8e4f0]/50 ${
                  index === 0
                    ? "bg-gradient-to-br from-[#e8e4f0]/50 to-white"
                    : index === 1
                    ? "bg-gradient-to-br from-[#e0f2f1]/50 to-white"
                    : index === 2
                    ? "bg-gradient-to-br from-[#fff9e6]/50 to-white"
                    : "bg-gradient-to-br from-[#fce4ec]/50 to-white"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    index === 0
                      ? "bg-[#e8e4f0]"
                      : index === 1
                      ? "bg-[#e0f2f1]"
                      : index === 2
                      ? "bg-[#fff9e6]"
                      : "bg-[#fce4ec]"
                  }`}
                >
                  <span className="text-2xl">
                    {index === 0
                      ? "🎪"
                      : index === 1
                      ? "🌱"
                      : index === 2
                      ? "💰"
                      : "🏛️"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] mb-3">
                  {option.title}
                </h3>
                <p className="text-[#2d2d2d]/60 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-[#e8e4f0]/30 to-[#fce4ec]/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            Our Impact So Far
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteData.impact.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#e8e4f0]/50"
              >
                <div className="text-3xl font-bold text-[#6b5b95] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-[#2d2d2d]/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            Getting Started
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Send us an email expressing your interest",
              },
              {
                step: "02",
                title: "Discussion",
                desc: "We'll schedule a call to understand your goals",
              },
              {
                step: "03",
                title: "Partnership",
                desc: "Finalize terms and start making impact together",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#e8e4f0] mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#2d2d2d]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24 bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#e8e4f0]/50 via-[#fce4ec]/30 to-[#e0f2f1]/50 rounded-3xl p-12">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-3xl">💌</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-4">
              Ready to Partner?
            </h2>
            <p className="text-[#2d2d2d]/60 mb-8">
              Let's discuss how we can work together to support the next
              generation of African founders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteData.brand.partnerEmail}`}
                className="px-8 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20"
              >
                Email Us
              </a>
              <a
                href={`mailto:${siteData.brand.email}`}
                className="px-8 py-4 bg-white text-[#6b5b95] font-semibold rounded-2xl border-2 border-[#e8e4f0] hover:border-[#6b5b95]/30 transition-all"
              >
                General Inquiries
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
