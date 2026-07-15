import { motion } from "motion/react";
import { useEffect } from "react";

export function InnovationChallenge() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-[#13111C] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-8"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            CodeSpark Africa Innovation Challenge
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.15]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <span className="text-white">Build Real Projects.</span>
            <br />
            <span className="text-[#E91E8C]">Learn from Experts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Join an 8-week innovation challenge where you'll go from idea to
            market-ready product. Work with mentors who've built real companies.
            Get the portfolio piece that opens doors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-16 sm:gap-24 mb-12"
          >
            <div className="text-center">
              <p
                className="text-[#E91E8C] text-5xl sm:text-6xl font-bold"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                15
              </p>
              <p
                className="text-white/60 text-sm mt-2"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Universities
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-[#E91E8C] text-5xl sm:text-6xl font-bold"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                20
              </p>
              <p
                className="text-white/60 text-sm mt-2"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Teams
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-[#E91E8C] text-5xl sm:text-6xl font-bold"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                8
              </p>
              <p
                className="text-white/60 text-sm mt-2"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Weeks
              </p>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="https://forms.gle/JaoSqfifwc9acdpH7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E91E8C] text-white font-semibold rounded-full hover:bg-[#E91E8C]/90 transition-all"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Apply Now
            <svg
              className="w-5 h-5"
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
          </motion.a>
        </div>
      </section>

      {/* What's Possible Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            What's Possible
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Want to Build for Real Scale?
            <br />
            Want to Make Real Impact?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-2xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Here's what's happening in the student builder ecosystem. You can be
            next.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "YarnGPT",
                subtitle: "Africa's First Student-Built LLM",
                description:
                  "Nigerian students built and got acquired. What's possible when students execute at scale.",
              },
              {
                title: "Prize Wins",
                subtitle: "₦11M+ in Prize Winnings",
                description:
                  "CodeSpark alumni securing major prizes and validation through competitions and execution.",
              },
              {
                title: "Global Internships",
                subtitle: "Top Company Placements",
                description:
                  "Student builders worldwide landing roles at companies like Flutterwave, NVIDIA, Stripe, and Meta.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1726] rounded-2xl p-8 border border-white/5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <h3 className="text-[#E91E8C] text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white font-semibold mb-4">
                  {item.subtitle}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Who It's For
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            If This Sounds Like You...
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: "Global Internships",
                description:
                  "If you're looking to land a global internship with an industry ready project portfolio or landing a 10x the normal salary post university based on your skill and experience, the CodeSpark Innovation Challenge is for you",
              },
              {
                title: "Theory to Practice",
                description:
                  "If you're looking to move from theoretical foundations to practical skills in software, media, finance and research, the CodeSpark Innovation Challenge is for you",
              },
              {
                title: "Solve Real Problems",
                description:
                  "If you're looking to solve a difficult problem (electricity, transportation, AI & tech infrastructure) in Nigeria, the CodeSpark Innovation Challenge is for you",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1726] rounded-2xl p-8 border border-[#E91E8C]/30"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <h3 className="text-[#E91E8C] text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Course-Specific Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Not Course-Specific. Not Department-Limited.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-12 max-w-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Regardless of your course or department, you can participate in
            CodeSpark. Here are the kinds of courses we welcome:
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                category: "Software & Engineering",
                courses:
                  "Computer Science, Software Engineering, Data Science, AI/ML, Cybersecurity",
              },
              {
                category: "Business & Research",
                courses:
                  "Business Administration, Economics, Finance, Management, Research",
              },
              {
                category: "Creative & Design",
                courses:
                  "Product Design, UX/UI, Graphic Design, Digital Media, Communications",
              },
              {
                category: "Finance & Media",
                courses:
                  "Finance, Accounting, Journalism, Media Production, Content Strategy",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1726] rounded-2xl p-6 border border-white/5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.category}
                </h3>
                <p className="text-white/60 text-sm">{item.courses}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Stand To Get Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            What You Stand To Get
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Here's What Happens After CodeSpark
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Over 8 weeks, we train you, hold you accountable, and position you.
            The outcome: career-changing opportunities and a portfolio that
            opens doors globally.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
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
                ),
                title: "Get Trained & Become Top 1%",
                description:
                  "Get trained by industry experts and pushed to build competence. Join the top 1% at your skill level.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Build a Portfolio",
                description:
                  "Build a real project. Something you can show to employers, investors, and collaborators. Your proof of capability.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Industry Mentors",
                description:
                  "Get guided by industry mentors with practical experience at top companies. Real feedback, real insight.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Join Our Community",
                description:
                  "Get guided to apply for global internships, top internships, and funding opportunities. Your network becomes your net worth.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Cash Prize",
                description:
                  "Win cash based on your project's quality and impact. Use it to build, scale, or however you want to move forward.",
                isGrandPrize: true,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-[#1A1726] rounded-2xl p-8 border ${
                  item.isGrandPrize
                    ? "border-[#E91E8C]/50 sm:col-span-2 lg:col-span-2"
                    : "border-white/5"
                }`}
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {item.isGrandPrize && (
                  <span className="inline-block px-4 py-1 bg-[#E91E8C] text-white text-sm font-semibold rounded-full mb-4">
                    Grand Prize
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] mb-4 ${
                    item.isGrandPrize ? "w-14 h-14" : ""
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 8-Week Sprint Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            The 8-Week Sprint
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            From Idea to Launch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Four phases. Each with specific deliverables. Weekly mentor
            feedback. You walk in with an idea; you walk out with a real
            project.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Innovation Fundamentals",
                weeks: "Weeks 1-2",
                items: [
                  "Design Thinking & Research Frameworks workshop",
                  "Interview 20+ users",
                  "Validation Report proving your market exists",
                ],
              },
              {
                phase: "Phase 2",
                title: "Research & Prototyping",
                weeks: "Weeks 3-4",
                items: [
                  "AI-Driven Dev & UI/UX workshop",
                  "Clickable Figma prototype",
                  "Technical architecture document",
                ],
              },
              {
                phase: "Phase 3",
                title: "Production",
                weeks: "Weeks 5-6",
                items: [
                  "Production-Ready Tools workshop",
                  "Core coding phase",
                  "Functional MVP that works",
                ],
              },
              {
                phase: "Phase 4",
                title: "Go-To-Market",
                weeks: "Weeks 7-8",
                items: [
                  "GTM Frameworks & Traction workshop",
                  "Beta testing & campus rollout",
                  "Live metrics + Investor Pitch Deck",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1726] rounded-2xl p-8 border border-white/5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#E91E8C] font-semibold text-sm">
                      {item.phase}
                    </p>
                    <h3 className="text-white font-bold text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm">{item.weeks}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.items.map((listItem, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#E91E8C] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-white/70">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pick Your Problem Space Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Pick Your Problem Space
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-12 max-w-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            These are the sectors we focus on. Not restricted to your
            major—engineers, designers, researchers, product people: all
            welcome.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {[
              "Electricity & Power",
              "Transportation & Mobility",
              "EdTech",
              "Technology Infrastructure",
              "Security",
            ].map((item, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-[#1A1726] rounded-full text-white font-medium border border-white/10"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real Commitment Required Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1726] rounded-2xl p-8 sm:p-12 border border-white/5"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Real Commitment Required
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              This is not a side project. This is a{" "}
              <span className="text-[#E91E8C] font-semibold">
                serious 8-week commitment
              </span>
              . Weekly demos. Mentor reviews. Clear expectations. We take
              discipline seriously. If you're ready to execute like
              professionals, apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Rewards
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Win Cash. Get Positioned.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Prize money for the best projects. But more importantly:
            positioning for internships and opportunities that compound your
            career.
          </motion.p>

          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
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
                ),
                title: "Get Trained & Become Top 1%",
                description:
                  "Get trained by industry experts and pushed to build competence. Join the top 1% at your skill level.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Build a Portfolio",
                description:
                  "Build a real project. Something you can show to employers, investors, and collaborators. Your proof of capability.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Industry Mentors",
                description:
                  "Get guided by industry mentors with practical experience at top companies. Real feedback, real insight.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1726] rounded-2xl p-8 border border-white/5 flex items-start gap-6"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Prize Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1A1726] to-[#2A1F3D] rounded-2xl p-8 sm:p-12 border border-[#E91E8C]/30 text-center"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <span className="inline-block px-4 py-1 bg-[#E91E8C] text-white text-sm font-semibold rounded-full mb-6">
              Grand Prize
            </span>
            <div className="w-16 h-16 rounded-2xl bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] mx-auto mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3
              className="text-[#E91E8C] text-5xl sm:text-6xl font-bold mb-4"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              ₦200,000
            </h3>
            <p className="text-white font-bold text-xl mb-4">
              Grand Prize - Cash Award
            </p>
            <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
              Direct funding for the best overall team. Use it to build, scale,
              or however you want to move forward.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1A1726] rounded-2xl p-8 sm:p-12 border border-white/5 mt-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <h3 className="text-white font-bold text-2xl mb-4">
              Beyond Cash
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Winning CodeSpark doesn't just mean money. It means proof. A real
              project. Mentors who'll vouch for you. Positioning with VCs,
              accelerators, and top companies. The grand prize winner gets
              direct help applying to programs worth millions in capital.
            </p>
            <p className="text-white/50">
              Eight weeks of execution. Outcomes that last years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Final Stage Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            The Final Stage
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            CodeSpark Forum
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Week 9: Your project gets in front of investors, accelerators, and
            industry leaders. Pitch on stage. Get feedback. Open doors.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "500+", label: "Attendees", sub: "Builders, investors, leaders" },
              { stat: "100+", label: "Decision-Makers", sub: "VCs, accelerators, companies" },
              { stat: "1", label: "Massive Stage", sub: "Your moment to shine" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1726] rounded-2xl p-8 border border-white/5 text-center"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <p className="text-[#E91E8C] text-5xl sm:text-6xl font-bold mb-2">
                  {item.stat}
                </p>
                <p className="text-white font-semibold text-lg mb-1">
                  {item.label}
                </p>
                <p className="text-white/50 text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1726] rounded-2xl p-8 sm:p-12 border border-white/5"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <h3 className="text-white font-bold text-2xl mb-8">
              What Happens
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                  title: "Live Pitches",
                  description:
                    "Your team pitches on stage to real decision-makers.",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: "Direct Access",
                  description:
                    "VCs, founders, and leaders. No middlemen. Direct conversations.",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Opportunities",
                  description:
                    "Internships, grants, partnerships all in one room.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-12 h-12 rounded-xl bg-[#E91E8C]/20 flex items-center justify-center text-[#E91E8C] mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Timeline
          </motion.h2>

          <div className="space-y-0">
            {[
              {
                date: "July 17",
                title: "Applications Close",
                description: "No extensions. This is the cutoff.",
              },
              {
                date: "July 17-19",
                title: "Team Selection",
                description: "Top 20 teams selected across 15 universities.",
              },
              {
                date: "July 20-22",
                title: "Onboarding",
                description:
                  "Meet mentors, understand the program, prepare to execute.",
              },
              {
                date: "July 23 - Sept 18",
                title: "8-Week Program",
                description:
                  "Build, iterate, validate, and prepare for launch.",
              },
              {
                date: "Sept 26",
                title: "CodeSpark Forum",
                description: "Pitch on stage. Meet investors. Open doors.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#E91E8C] flex-shrink-0" />
                  {i < 4 && (
                    <div className="w-0.5 h-full min-h-[80px] bg-[#E91E8C]/30" />
                  )}
                </div>
                <div className="pb-12">
                  <p className="text-[#E91E8C] font-semibold text-lg">
                    {item.date}
                  </p>
                  <h4 className="text-white font-bold text-xl mt-1">
                    {item.title}
                  </h4>
                  <p className="text-white/60 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Ready to Ship Something Real?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Eight weeks. Your team. Mentors who've been there. At the end, you
            have a project. Something that changes the conversation with
            employers and investors forever.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://forms.gle/JaoSqfifwc9acdpH7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E91E8C] text-white font-semibold rounded-full hover:bg-[#E91E8C]/90 transition-all mb-12"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Apply Now
            <svg
              className="w-5 h-5"
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
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border-t border-white/10 pt-8"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <p className="text-white/50 mb-2">Questions? Reach out:</p>
            <a
              href="mailto:prosperity.olorunfemi@pau.edu.ng"
              className="text-[#E91E8C] hover:underline inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              prosperity.olorunfemi@pau.edu.ng
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
