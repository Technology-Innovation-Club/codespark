import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V1Event() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              {siteData.programs.event.date}
            </span>
            <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
              {siteData.programs.event.location}
            </span>
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              {siteData.programs.event.attendance}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {siteData.programs.event.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
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
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg"
          >
            Register Now
          </motion.a>
        </div>
      </section>

      {/* What This Event Is */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-gray-300 mb-4">
              {siteData.programs.event.tagline}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Who Should <span className="text-amber-400">Attend</span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-4">
            {siteData.programs.event.whoShouldAttend.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#141c2e] rounded-2xl border border-[#1e293b] text-center hover:border-amber-500/30 transition-colors"
              >
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Program <span className="text-amber-400">Highlights</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.programs.event.highlights.map((item, i) => (
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
                    <span className="text-amber-400 font-bold">{i + 1}</span>
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-24 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Expected <span className="text-amber-400">Speakers</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {siteData.programs.event.speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#141c2e] rounded-2xl border border-[#1e293b] text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-400 font-bold text-2xl">
                    {speaker.name[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-gray-400 mt-1">{speaker.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Competition */}
      <section className="py-24 px-6 bg-[#0d1424]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
              Pitch Competition
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Top 5 Incubator Startups
            </h2>
            <p className="text-xl text-gray-400 mb-4">
              Watch our best startups pitch their traction to investors.
            </p>
            <p className="text-amber-400 font-medium">
              Pre-seed prize pool available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0d1424]">
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
              Seats are Limited.
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              If you care about building, be in the room.
            </p>
            <a
              href="https://forms.gle/fct465LJdSxLEGsj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/30 text-lg"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
