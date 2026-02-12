import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V3Partners() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#faf8f5] to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#c45d3e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#6b8f71]/10 rounded-full blur-3xl" />
        <div className="absolute top-32 left-1/4 w-20 h-20 border-2 border-[#c45d3e]/20 rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6b8f71]/10 border border-[#6b8f71]/20 rounded-full text-[#6b8f71] text-sm font-medium mb-8"
          >
            Partnership Opportunities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {siteData.partners.headline}
          </motion.h1>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Why <span className="text-[#c45d3e]">Partner</span> With Us?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteData.partners.whyPartner.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#faf8f5] rounded-3xl border border-[#2d2418]/10 hover:border-[#c45d3e]/30 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#c45d3e]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#c45d3e] transition-colors">
                    <svg
                      className="w-6 h-6 text-[#c45d3e] group-hover:text-white transition-colors"
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
                  <span className="text-lg text-[#2d2418] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Partnership <span className="text-[#6b8f71]">Options</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {siteData.partners.options.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-10 bg-white rounded-3xl border border-[#2d2418]/10 hover:border-[#6b8f71]/30 hover:shadow-2xl hover:shadow-[#6b8f71]/10 transition-all h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6b8f71] to-[#4a6b4f] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#6b8f71]/20 group-hover:scale-105 transition-transform">
                    <span
                      className="text-[#faf8f5] font-bold text-xl"
                      style={{ fontFamily: '"Fraunces", serif' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 text-[#2d2418]"
                    style={{ fontFamily: '"Fraunces", serif' }}
                  >
                    {option.title}
                  </h3>
                  <p className="text-[#2d2418]/60 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 px-6 bg-[#2d2418]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#c45d3e] text-sm font-medium tracking-wider uppercase">
              Our Reach
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-4 text-[#faf8f5]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              The Impact of Partnership
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteData.impact.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span
                  className="text-4xl md:text-5xl font-bold text-[#c45d3e]"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
                  {stat.value}
                </span>
                <p className="text-[#faf8f5]/60 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-[#c45d3e]/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-[#c45d3e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-[#2d2418] mb-6"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Trusted by Leading Institutions
            </h3>
            <p className="text-[#2d2418]/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Our partners include Pan-Atlantic University, Lagos Business
              School, and innovation leaders who believe in the power of student
              entrepreneurship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            How It <span className="text-[#c45d3e]">Works</span>
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Reach Out",
                description:
                  "Send us an email expressing your interest in partnership",
              },
              {
                step: "02",
                title: "Discovery Call",
                description:
                  "We will discuss your goals and how we can collaborate",
              },
              {
                step: "03",
                title: "Custom Partnership",
                description:
                  "We create a partnership package tailored to your needs",
              },
              {
                step: "04",
                title: "Launch Together",
                description:
                  "Begin making an impact with the next generation of founders",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-[#c45d3e] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c45d3e]/20">
                  <span
                    className="text-[#faf8f5] font-bold"
                    style={{ fontFamily: '"Fraunces", serif' }}
                  >
                    {item.step}
                  </span>
                </div>
                <div className="pt-2">
                  <h3
                    className="text-xl font-bold text-[#2d2418] mb-1"
                    style={{ fontFamily: '"Fraunces", serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#2d2418]/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#c45d3e] to-[#a84d32] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 border border-[#faf8f5]/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 border border-[#faf8f5]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#faf8f5]/5 rounded-full" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#faf8f5]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Ready to shape the future of African tech?
            </h2>
            <p className="text-xl text-[#faf8f5]/70 mb-10 leading-relaxed">
              Let's discuss how a partnership with CodeSpark can benefit your
              organization.
            </p>
            <a
              href={`mailto:${siteData.brand.partnerEmail}`}
              className="inline-block px-10 py-5 bg-[#faf8f5] text-[#c45d3e] font-bold rounded-full hover:bg-white hover:shadow-2xl transition-all text-lg"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
