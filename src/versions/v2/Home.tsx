import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";

export function V2Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 border-4 border-black text-sm font-black uppercase tracking-widest mb-8">
              Faith-Led Startup Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8 uppercase tracking-tighter"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            The Next African
            <br />
            <span className="text-white bg-black px-4">Unicorn</span> Founder
            <br />
            Is in University
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mb-12 font-medium"
          >
            {siteData.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-black text-white font-black uppercase tracking-wider text-lg hover:bg-gray-900 transition-colors"
            >
              Apply to Incubator →
            </a>
            <Link
              to="/2/event"
              className="px-8 py-5 border-4 border-black font-black uppercase tracking-wider text-lg hover:bg-black hover:text-white transition-colors"
            >
              Attend Event →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Iyin Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              {siteData.iyin.headline}
            </h2>
            <div className="space-y-6">
              {siteData.iyin.content.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-xl md:text-2xl ${
                    i === siteData.iyin.content.length - 1
                      ? "font-black text-white bg-white/10 p-4 inline-block"
                      : "text-gray-300"
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
      <section className="py-32 px-6 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Identify. Train. Launch.
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-4">
            {siteData.whatWeDo.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black hover:bg-black hover:text-white transition-colors group"
              >
                <div
                  className="text-4xl font-black mb-4"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-bold uppercase tracking-wide text-sm">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-black uppercase tracking-widest text-gray-400">
              {siteData.impact.since}
            </span>
            <h2
              className="text-5xl md:text-6xl font-black uppercase tracking-tighter mt-4"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              {siteData.impact.headline}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {siteData.impact.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-4 border-white text-center"
              >
                <div
                  className="text-5xl md:text-6xl font-black mb-2"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {stat.value}
                </div>
                <p className="text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 px-6 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Core Programs
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 border-4 border-black hover:bg-black hover:text-white transition-colors group"
            >
              <span className="text-sm font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                Program
              </span>
              <h3
                className="text-3xl font-black uppercase tracking-tighter mt-4 mb-4"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}
              >
                {siteData.programs.incubator.title}
              </h3>
              <p className="mb-4 group-hover:text-gray-300">
                {siteData.programs.incubator.description}
              </p>
              <p className="font-black">
                {siteData.programs.incubator.outcome}
              </p>
              <Link
                to="/2/incubator"
                className="inline-block mt-6 font-black uppercase tracking-wider underline decoration-4 underline-offset-4"
              >
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 border-4 border-black hover:bg-black hover:text-white transition-colors group"
            >
              <span className="text-sm font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                Event
              </span>
              <h3
                className="text-3xl font-black uppercase tracking-tighter mt-4 mb-4"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}
              >
                {siteData.programs.event.title}
              </h3>
              <p className="mb-2 group-hover:text-gray-300">
                {siteData.programs.event.date}
              </p>
              <p className="mb-4 group-hover:text-gray-300">
                {siteData.programs.event.location}
              </p>
              <Link
                to="/2/event"
                className="inline-block mt-6 font-black uppercase tracking-wider underline decoration-4 underline-offset-4"
              >
                Register →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Snapshot */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Portfolio
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {siteData.startupsList.slice(0, 6).map((startup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black hover:bg-black hover:text-white transition-colors group"
              >
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                  {startup.category}
                </span>
                <h3
                  className="text-2xl font-black uppercase tracking-tighter mt-2 mb-4"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {startup.name}
                </h3>
                <p className="text-sm group-hover:text-gray-300">
                  {startup.description}
                </p>
                <p className="text-sm font-black mt-4">{startup.traction}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/2/startups"
              className="inline-block px-8 py-4 border-4 border-black font-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              View All Startups →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              {siteData.cta.headline}
            </h2>
            <p className="text-2xl text-gray-400 mb-4">
              {siteData.cta.subheadline}
            </p>
            <p
              className="text-3xl font-black mb-12"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              {siteData.cta.question}
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-white text-black font-black uppercase tracking-wider text-xl hover:bg-gray-100 transition-colors"
            >
              Apply Now →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
