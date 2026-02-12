import { motion } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5Startups() {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    EdTech: { bg: "bg-[#e8e4f0]", text: "text-[#6b5b95]" },
    "Cultural Tech": { bg: "bg-[#fff9e6]", text: "text-[#8d6e00]" },
    MarTech: { bg: "bg-[#fce4ec]", text: "text-[#c2185b]" },
    "Campus Tech": { bg: "bg-[#e0f2f1]", text: "text-[#2d6a5f]" },
    Sustainability: { bg: "bg-[#e0f2f1]", text: "text-[#2d6a5f]" },
    "Career Tech": { bg: "bg-[#e8e4f0]", text: "text-[#6b5b95]" },
    HealthTech: { bg: "bg-[#fce4ec]", text: "text-[#c2185b]" },
  };

  const getColors = (category: string) => {
    return (
      categoryColors[category] || { bg: "bg-[#e8e4f0]", text: "text-[#6b5b95]" }
    );
  };

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
            🚀 Portfolio Companies
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6"
          >
            Our Startups
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#2d2d2d]/60 max-w-2xl mx-auto"
          >
            Meet the student-led ventures building innovative solutions across
            Africa. Each startup has gone through our incubator program.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#e8e4f0]/50 via-[#fce4ec]/50 to-[#e0f2f1]/50 rounded-2xl p-6 flex flex-wrap justify-center gap-8">
            {siteData.impact.stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-2xl font-bold text-[#6b5b95]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#2d2d2d]/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Startups Grid */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.startupsList.map((startup, index) => {
              const colors = getColors(startup.category);
              return (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e4f0]/50 hover:shadow-lg hover:border-[#e8e4f0] transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}
                    >
                      <span className={`font-bold ${colors.text}`}>
                        {startup.name.charAt(0)}
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text}`}
                    >
                      {startup.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2 group-hover:text-[#6b5b95] transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-[#2d2d2d]/60 text-sm mb-4 leading-relaxed">
                    {startup.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-[#e8e4f0]/50 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#6b5b95]">📈</span>
                      <span className="text-[#2d2d2d]/70">
                        {startup.traction}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#6b5b95]">⭐</span>
                      <span className="text-[#2d2d2d]/70">{startup.stats}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#2d2d2d] text-center mb-12"
          >
            Achievements
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {siteData.impact.achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 rounded-xl ${
                  index % 4 === 0
                    ? "bg-[#e8e4f0]/40"
                    : index % 4 === 1
                    ? "bg-[#e0f2f1]/40"
                    : index % 4 === 2
                    ? "bg-[#fff9e6]/40"
                    : "bg-[#fce4ec]/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">✨</span>
                  <span className="text-[#2d2d2d] font-medium">
                    {achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 py-24 bg-gradient-to-br from-[#e8e4f0]/30 to-[#fce4ec]/20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-4">
            Want to Join This List?
          </h2>
          <p className="text-[#2d2d2d]/60 mb-8">
            Apply to the CodeSpark Incubator and build your startup with us.
          </p>
          <a
            href="https://forms.gle/yUDzoJSdGACbA2No8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#6b5b95] text-white font-semibold rounded-2xl hover:bg-[#5a4a84] transition-all shadow-lg shadow-[#6b5b95]/20"
          >
            Apply Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}
