import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";

export function V3Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#c45d3e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6b8f71]/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#c45d3e]/20 rounded-full" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#6b8f71]/20 rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6b8f71]/10 border border-[#6b8f71]/20 rounded-full text-[#6b8f71] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#6b8f71] rounded-full animate-pulse" />
              Faith-Driven Startup Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-[#2d2418]"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {siteData.hero.headline.split("University").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="text-[#c45d3e]">University</span>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#2d2418]/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {siteData.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c45d3e] text-[#faf8f5] font-bold rounded-full hover:bg-[#a84d32] transition-all shadow-xl shadow-[#c45d3e]/20 text-lg"
            >
              Apply to Incubator
            </a>
            <Link
              to="/3/event"
              className="px-8 py-4 border-2 border-[#2d2418]/20 text-[#2d2418] font-bold rounded-full hover:border-[#c45d3e] hover:text-[#c45d3e] transition-all text-lg"
            >
              Attend CodeSpark Event
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#2d2418]/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[#c45d3e] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Iyin Section */}
      <section className="py-32 px-6 bg-[#2d2418]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#c45d3e] to-[#6b8f71] rounded-full" />
            <h2
              className="text-3xl md:text-5xl font-bold mb-10 text-[#faf8f5] pl-8"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              {siteData.iyin.headline}
            </h2>
            <div className="space-y-6 pl-8">
              {siteData.iyin.content.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-xl leading-relaxed ${
                    i === siteData.iyin.content.length - 1
                      ? "text-[#c45d3e] font-semibold"
                      : "text-[#faf8f5]/70"
                  }`}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-[#2d2418]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              We <span className="text-[#c45d3e]">Identify</span>. We{" "}
              <span className="text-[#6b8f71]">Train</span>. We{" "}
              <span className="text-[#c45d3e]">Launch</span>.
            </h2>
            <p className="text-xl text-[#2d2418]/60 max-w-2xl mx-auto">
              {siteData.whatWeDo.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {siteData.whatWeDo.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-3xl border border-[#2d2418]/10 hover:border-[#c45d3e]/30 hover:shadow-xl hover:shadow-[#c45d3e]/5 transition-all group"
              >
                <div className="w-12 h-12 bg-[#c45d3e]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#c45d3e] transition-colors">
                  <span className="text-[#c45d3e] font-bold group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                </div>
                <p className="text-[#2d2418]/80 text-sm leading-relaxed">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-2xl text-[#6b8f71] font-semibold mt-12"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {siteData.whatWeDo.tagline}
          </motion.p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#6b8f71] to-[#4a6b4f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#faf8f5]/60 text-sm font-medium tracking-wider uppercase">
              {siteData.impact.since}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 text-[#faf8f5]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              {siteData.impact.headline}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {siteData.impact.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#faf8f5]/10 backdrop-blur-sm rounded-3xl text-center border border-[#faf8f5]/10"
              >
                <span
                  className="text-5xl md:text-6xl font-bold text-[#faf8f5] block mb-2"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
                  {stat.value}
                </span>
                <span className="text-[#faf8f5]/70 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 px-6 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2d2418]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Our <span className="text-[#c45d3e]">Programs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Incubator Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/3/incubator">
                <div className="p-10 bg-white rounded-3xl border border-[#2d2418]/10 hover:border-[#c45d3e]/30 hover:shadow-2xl hover:shadow-[#c45d3e]/10 transition-all h-full">
                  <div className="w-16 h-16 bg-[#c45d3e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c45d3e] transition-colors">
                    <svg
                      className="w-8 h-8 text-[#c45d3e] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 text-[#2d2418]"
                    style={{ fontFamily: '"Fraunces", serif' }}
                  >
                    {siteData.programs.incubator.title}
                  </h3>
                  <p className="text-[#2d2418]/60 mb-6 leading-relaxed">
                    {siteData.programs.incubator.description}
                  </p>
                  <p className="text-[#c45d3e] font-semibold">
                    {siteData.programs.incubator.outcome}
                  </p>
                  <div className="mt-6 flex items-center text-[#c45d3e] font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/3/event">
                <div className="p-10 bg-[#2d2418] rounded-3xl hover:shadow-2xl hover:shadow-[#2d2418]/20 transition-all h-full">
                  <div className="w-16 h-16 bg-[#c45d3e]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c45d3e] transition-colors">
                    <svg
                      className="w-8 h-8 text-[#c45d3e] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 text-[#faf8f5]"
                    style={{ fontFamily: '"Fraunces", serif' }}
                  >
                    {siteData.programs.event.title}
                  </h3>
                  <p className="text-[#faf8f5]/60 mb-6 leading-relaxed">
                    {siteData.programs.event.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#faf8f5]/10 rounded-full text-[#faf8f5]/80 text-sm">
                      {siteData.programs.event.date}
                    </span>
                    <span className="px-3 py-1 bg-[#6b8f71]/20 rounded-full text-[#6b8f71] text-sm">
                      {siteData.programs.event.attendance}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center text-[#c45d3e] font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Snapshot */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#2d2418]"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Our <span className="text-[#c45d3e]">Portfolio</span>
              </h2>
              <p className="text-[#2d2418]/60 mt-2">
                Student startups building the future
              </p>
            </div>
            <Link
              to="/3/startups"
              className="px-6 py-3 border-2 border-[#2d2418]/20 text-[#2d2418] font-medium rounded-full hover:border-[#c45d3e] hover:text-[#c45d3e] transition-all"
            >
              View All Startups
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.startupsList.slice(0, 6).map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-[#faf8f5] rounded-3xl border border-[#2d2418]/10 hover:border-[#c45d3e]/30 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c45d3e] to-[#e07558] rounded-2xl flex items-center justify-center shadow-lg shadow-[#c45d3e]/20">
                    <span className="text-[#faf8f5] font-bold">
                      {startup.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[#2d2418]"
                      style={{ fontFamily: '"Fraunces", serif' }}
                    >
                      {startup.name}
                    </h3>
                    <span className="text-xs text-[#6b8f71] font-medium">
                      {startup.category}
                    </span>
                  </div>
                </div>
                <p className="text-[#2d2418]/60 text-sm mb-4 leading-relaxed">
                  {startup.description}
                </p>
                <div className="pt-4 border-t border-[#2d2418]/10">
                  <p className="text-[#c45d3e] font-semibold text-sm">
                    {startup.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#c45d3e] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold text-[#faf8f5] mb-6"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              {siteData.cta.headline}
            </h2>
            <p className="text-2xl text-[#faf8f5]/80 mb-4">
              {siteData.cta.subheadline}
            </p>
            <p
              className="text-3xl text-[#faf8f5] font-semibold mb-12"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              {siteData.cta.question}
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-[#faf8f5] text-[#c45d3e] font-bold rounded-full hover:bg-white hover:shadow-2xl transition-all text-lg"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
