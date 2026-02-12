import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V2Event() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-32 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="px-4 py-2 border-4 border-black text-sm font-black uppercase tracking-widest">
              {siteData.programs.event.date}
            </span>
            <span className="px-4 py-2 border-4 border-black text-sm font-black uppercase tracking-widest">
              {siteData.programs.event.location}
            </span>
            <span className="px-4 py-2 bg-black text-white text-sm font-black uppercase tracking-widest">
              {siteData.programs.event.attendance}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            {siteData.programs.event.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto mb-10"
          >
            {siteData.programs.event.whatItIs}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="https://forms.gle/fct465LJdSxLEGsj7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-black text-white font-black uppercase tracking-wider hover:bg-gray-900 transition-colors"
          >
            Register Now →
          </motion.a>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-2xl md:text-3xl font-black uppercase tracking-tighter"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            {siteData.programs.event.tagline}
          </p>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 px-6 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Who Should Attend
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-4">
            {siteData.programs.event.whoShouldAttend.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black text-center hover:bg-black hover:text-white transition-colors"
              >
                <p className="font-black uppercase tracking-wide text-sm">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Program Highlights
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.programs.event.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-4 border-black hover:bg-black hover:text-white transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-2xl font-black"
                    style={{ fontFamily: '"Archivo Black", sans-serif' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold uppercase tracking-wide text-sm">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16"
            style={{ fontFamily: '"Archivo Black", sans-serif' }}
          >
            Expected Speakers
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {siteData.programs.event.speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-4 border-white text-center"
              >
                <div className="w-20 h-20 bg-white text-black flex items-center justify-center mx-auto mb-4">
                  <span
                    className="text-3xl font-black"
                    style={{ fontFamily: '"Archivo Black", sans-serif' }}
                  >
                    {speaker.name[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-black uppercase tracking-tighter"
                  style={{ fontFamily: '"Archivo Black", sans-serif' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-gray-400 mt-1 text-sm uppercase tracking-wider">
                  {speaker.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t-4 border-black">
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
              Seats Are Limited
            </h2>
            <p className="text-xl mb-8">
              If you care about building, be in the room.
            </p>
            <a
              href="https://forms.gle/fct465LJdSxLEGsj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-black text-white font-black uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              Register Now →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
