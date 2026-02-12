import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { useInView } from "../../hooks/useAnimations";

export function V1Home() {
  const { ref: impactRef, isInView: impactInView } = useInView();
  const { ref: programsRef, isInView: programsInView } = useInView();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-8">
              Faith-Led Startup Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {siteData.hero.headline.split("University").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="text-amber-400">University</span>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
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
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg cursor-pointer"
            >
              Apply to Incubator
            </a>
            <Link
              to="/1/event"
              className="px-8 py-4 border-2 border-amber-500/50 text-amber-400 font-bold rounded-xl hover:bg-amber-500/10 transition-all text-lg cursor-pointer"
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
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-amber-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Iyin Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600" />
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 pl-8"
              style={{ fontFamily: '"Playfair Display", serif' }}
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
                  className={`text-xl ${
                    i === siteData.iyin.content.length - 1
                      ? "text-amber-400 font-semibold"
                      : "text-gray-400"
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
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[#0d1424]" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              We <span className="text-amber-400">Identify</span>. We{" "}
              <span className="text-amber-400">Train</span>. We{" "}
              <span className="text-amber-400">Launch</span>.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {siteData.whatWeDo.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteData.whatWeDo.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] hover:border-amber-500/30 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <span className="text-amber-400 font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-300">{pillar}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-2xl text-amber-400 font-semibold mt-12"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {siteData.whatWeDo.tagline}
          </motion.p>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="py-32 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              {siteData.impact.since}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {siteData.impact.headline}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {siteData.impact.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={impactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-gradient-to-b from-[#141c2e] to-[#0d1424] rounded-2xl border border-[#1e293b]"
              >
                <div
                  className="text-5xl md:text-6xl font-bold text-amber-400 mb-2"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-32 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our Core <span className="text-amber-400">Programs</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Incubator Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={programsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-gradient-to-br from-[#141c2e] to-[#0d1424] rounded-3xl border border-[#1e293b] overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors" />
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full mb-4">
                  Program
                </span>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {siteData.programs.incubator.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {siteData.programs.incubator.description}
                </p>
                <p className="text-amber-400 font-medium mb-6">
                  {siteData.programs.incubator.outcome}
                </p>
                <Link
                  to="/1/incubator"
                  className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={programsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-gradient-to-br from-[#141c2e] to-[#0d1424] rounded-3xl border border-[#1e293b] overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full mb-4">
                  Event
                </span>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {siteData.programs.event.title}
                </h3>
                <p className="text-gray-400 mb-2">
                  {siteData.programs.event.date}
                </p>
                <p className="text-gray-400 mb-4">
                  {siteData.programs.event.location} •{" "}
                  {siteData.programs.event.attendance}
                </p>
                <Link
                  to="/1/event"
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Register for Event
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Snapshot */}
      <section className="py-32 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Portfolio <span className="text-amber-400">Snapshot</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Meet our incredible student startups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteData.startupsList.slice(0, 6).map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] hover:border-amber-500/30 transition-all group cursor-pointer"
              >
                <span className="inline-block px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded mb-4">
                  {startup.category}
                </span>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {startup.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {startup.description}
                </p>
                <p className="text-amber-400 text-sm font-medium">
                  {startup.traction}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/1/startups"
              className="inline-flex items-center px-6 py-3 border border-amber-500/50 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-colors cursor-pointer"
            >
              View All Startups
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0d1424] to-[#0a0f1c] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {siteData.cta.headline}
            </h2>
            <p className="text-2xl text-gray-400 mb-4">
              {siteData.cta.subheadline}
            </p>
            <p
              className="text-3xl text-amber-400 font-bold mb-12"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {siteData.cta.question}
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl text-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/30 cursor-pointer"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
