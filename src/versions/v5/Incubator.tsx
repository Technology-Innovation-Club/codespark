import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5Incubator() {
  const { incubator } = siteData.programs;

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
            🌱 3-4 Month Program
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6"
          >
            {incubator.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#2d2d2d]/60 max-w-2xl mx-auto mb-4"
          >
            {incubator.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-[#6b5b95] font-semibold"
          >
            {incubator.outcome}
          </motion.p>
        </div>
      </section>

      {/* Program Phases */}
      <section className="px-6 py-20 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-16"
          >
            Program Journey
          </motion.h2>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e8e4f0] via-[#e0f2f1] to-[#fce4ec]" />

            <div className="grid md:grid-cols-5 gap-6">
              {incubator.phases.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Phase Number Circle */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 ${
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
                    <span className="text-[#6b5b95] font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e4f0]/50 text-center h-full">
                    <span className="text-xs text-[#6b5b95] font-medium">
                      {phase.name}
                    </span>
                    <h3 className="text-lg font-semibold text-[#2d2d2d] mt-2 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#2d2d2d]/60">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            What Makes Us Different
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {incubator.differentiators.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-[#e8e4f0]/20 rounded-2xl border border-[#e8e4f0]/50"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index === 0
                      ? "bg-[#e0f2f1]"
                      : index === 1
                      ? "bg-[#fff9e6]"
                      : index === 2
                      ? "bg-[#fce4ec]"
                      : "bg-[#e8e4f0]"
                  }`}
                >
                  <span className="text-lg">
                    {index === 0
                      ? "💰"
                      : index === 1
                      ? "🎓"
                      : index === 2
                      ? "👁️"
                      : "🤝"}
                  </span>
                </div>
                <p className="text-[#2d2d2d] font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              How to Apply
            </h2>
            <p className="text-[#2d2d2d]/60">
              Simple steps to join our program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                desc: "Fill out our application form with your startup idea",
              },
              {
                step: "02",
                title: "Interview",
                desc: "Selected applicants will be invited for a brief interview",
              },
              {
                step: "03",
                title: "Join Cohort",
                desc: "Accepted founders start the incubator journey",
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

      {/* CTA */}
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
              Ready to Build?
            </h2>
            <p className="text-[#2d2d2d]/60 mb-8">
              Join the next cohort of student founders and turn your idea into
              reality.
            </p>
            <a
              href="https://forms.gle/yUDzoJSdGACbA2No8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20"
            >
              Apply to Incubator
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
