import { motion } from "motion/react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function InnovationChallenge() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-10 sm:pt-16 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="mt-5 font-display font-semibold tracking-tight leading-[0.95] mx-auto max-w-3xl"
          style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
        >
          Build Real Projects.
          <br />
          <span style={{ color: "var(--accent)" }}>Learn from Experts.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="mt-4 max-w-2xl mx-auto text-[15px] sm:text-[16px] leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Join an 8-week innovation challenge where you&apos;ll go from idea to market-ready product. Work with mentors who&apos;ve built real companies. Get the portfolio piece that opens doors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="mt-8 grid grid-cols-3 gap-3 max-w-[520px] mx-auto"
        >
          <Card className="p-5 text-center">
            <div className="font-display font-semibold tracking-tight leading-none" style={{ fontSize: "28px", color: "var(--accent)" }}>
              15
            </div>
            <div className="mt-1 text-[11px] font-medium tracking-widest" style={{ color: "var(--muted)" }}>
              Universities
            </div>
          </Card>
          <Card className="p-5 text-center">
            <div className="font-display font-semibold tracking-tight leading-none" style={{ fontSize: "28px", color: "var(--accent)" }}>
              20
            </div>
            <div className="mt-1 text-[11px] font-medium tracking-widest" style={{ color: "var(--muted)" }}>
              Teams
            </div>
          </Card>
          <Card className="p-5 text-center bg-[var(--accent)] border-[var(--accent)] text-white">
            <div className="font-display font-semibold tracking-tight leading-none" style={{ fontSize: "28px" }}>
              8
            </div>
            <div className="mt-1 text-[11px] font-medium tracking-widest opacity-80">Weeks</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-8"
        >
          <Button asChild size="lg" className="rounded-full">
            <a href="https://forms.gle/JaoSqfifwc9acdpH7" target="_blank" rel="noopener noreferrer">
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Button>
        </motion.div>
      </section>

      {/* What's Possible */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold tracking-[0.14em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          What&apos;s Possible
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 font-display font-semibold tracking-tight leading-tight max-w-2xl"
          style={{ fontSize: "clamp(24px, 4vw, 34px)" }}
        >
          Want to Build for Real Scale?
          <br />
          Want to Make Real Impact?
        </motion.h2>
        <p className="mt-3 text-sm max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Here&apos;s what&apos;s happening in the student builder ecosystem. You can be next.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "YarnGPT",
              subtitle: "Africa's First Student-Built LLM",
              description: "Nigerian students built and got acquired. What's possible when students execute at scale.",
            },
            {
              title: "Prize Wins",
              subtitle: "₦11M+ in Prize Winnings",
              description: "CodeSpark alumni securing major prizes and validation through competitions and execution.",
            },
            {
              title: "Global Internships",
              subtitle: "Top Company Placements",
              description: "Student builders worldwide landing roles at companies like Flutterwave, NVIDIA, Stripe, and Meta.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Card hover className="p-6 h-full">
                <div
                  className="w-9 h-9 rounded-full grid place-items-center text-sm font-bold"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)" }}
                >
                  {i === 0 ? "✦" : i === 1 ? "◆" : "↗"}
                </div>
                <h3 className="mt-4 font-display font-semibold text-[18px]" style={{ color: "var(--accent)" }}>
                  {item.title}
                </h3>
                <p className="mt-1 font-semibold text-sm">{item.subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
                <div className="mt-4">
                  <Badge variant={i === 0 ? "soft" : "secondary"} className="text-xs">
                    {i === 0 ? "Shipped" : i === 1 ? "₦11M total" : "Placements"}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--accent)" }}>
          Who It&apos;s For
        </p>
        <h2 className="mt-2 font-display font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 34px)" }}>
          If This Sounds Like You...
        </h2>

        <div className="mt-6 space-y-4">
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
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Card className="p-6 sm:p-7 border-l-4" style={{ borderLeftColor: "var(--accent)" }}>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full grid place-items-center shrink-0 text-white text-xs font-bold" style={{ background: "var(--accent)" }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-[17px]" style={{ color: "var(--accent)" }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Not Course-Specific */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Card className="p-6 sm:p-8">
          <h2 className="font-display font-semibold tracking-tight" style={{ fontSize: "clamp(22px, 3.5vw, 28px)" }}>
            Not Course-Specific. Not Department-Limited.
          </h2>
          <p className="mt-3 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--muted)" }}>
            Regardless of your course or department, you can participate in CodeSpark. Here are the kinds of courses we welcome:
          </p>
          <Separator className="my-6" />
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                category: "Software & Engineering",
                courses: "Computer Science, Software Engineering, Data Science, AI/ML, Cybersecurity",
              },
              {
                category: "Business & Research",
                courses: "Business Administration, Economics, Finance, Management, Research",
              },
              {
                category: "Creative & Design",
                courses: "Product Design, UX/UI, Graphic Design, Digital Media, Communications",
              },
              {
                category: "Finance & Media",
                courses: "Finance, Accounting, Journalism, Media Production, Content Strategy",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="p-5 bg-[var(--surface-2)] border-[var(--border)] shadow-none h-full">
                  <h3 className="font-display font-semibold text-[15px]">{item.category}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.courses}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </section>

      {/* What You Stand To Get */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--accent)" }}>
          What You Stand To Get
        </p>
        <h2 className="mt-2 font-display font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 34px)" }}>
          Here&apos;s What Happens After CodeSpark
        </h2>
        <p className="mt-3 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Over 8 weeks, we train you, hold you accountable, and position you. The outcome: career-changing opportunities and a portfolio that opens doors globally.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Get Trained & Become Top 1%",
              description: "Get trained by industry experts and pushed to build competence. Join the top 1% at your skill level.",
            },
            {
              title: "Build a Portfolio",
              description: "Build a real project. Something you can show to employers, investors, and collaborators. Your proof of capability.",
            },
            {
              title: "Industry Mentors",
              description: "Get guided by industry mentors with practical experience at top companies. Real feedback, real insight.",
            },
            {
              title: "Join Our Community",
              description: "Get guided to apply for global internships, top internships, and funding opportunities. Your network becomes your net worth.",
            },
            {
              title: "Cash Prize",
              description: "Win cash based on your project's quality and impact. Use it to build, scale, or however you want to move forward.",
              highlight: true,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={item.highlight ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card
                hover
                className={`p-6 h-full ${item.highlight ? "bg-[var(--accent)] border-[var(--accent)] text-white" : ""}`}
              >
                {item.highlight && (
                  <Badge className="mb-3 bg-white text-[var(--accent)] hover:bg-white border-white text-[11px] font-bold tracking-widest">
                    Grand Prize
                  </Badge>
                )}
                <div
                  className="w-10 h-10 rounded-full grid place-items-center mb-3"
                  style={
                    item.highlight
                      ? { background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }
                      : { background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)" }
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d={
                        i === 0
                          ? "M13 10V3L4 14h7v7l9-11h-7z"
                          : i === 1
                            ? "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            : i === 2 || i === 3
                              ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              : "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    />
                  </svg>
                </div>
                <h3 className={`font-display font-semibold text-[16px] leading-tight ${item.highlight ? "text-white" : ""}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${item.highlight ? "opacity-80" : ""}`} style={item.highlight ? {} : { color: "var(--muted)" }}>
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8-Week Sprint */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--accent)" }}>
          The 8-Week Sprint
        </p>
        <h2 className="mt-2 font-display font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 34px)" }}>
          From Idea to Launch
        </h2>
        <p className="mt-3 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Four phases. Each with specific deliverables. Weekly mentor feedback. You walk in with an idea; you walk out with a real project.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              phase: "Phase 1",
              title: "Innovation Fundamentals",
              weeks: "Weeks 1-2",
              items: ["Design Thinking & Research Frameworks workshop", "Interview 20+ users", "Validation Report proving your market exists"],
            },
            {
              phase: "Phase 2",
              title: "Research & Prototyping",
              weeks: "Weeks 3-4",
              items: ["AI-Driven Dev & UI/UX workshop", "Clickable Figma prototype", "Technical architecture document"],
            },
            {
              phase: "Phase 3",
              title: "Production",
              weeks: "Weeks 5-6",
              items: ["Production-Ready Tools workshop", "Core coding phase", "Functional MVP that works"],
            },
            {
              phase: "Phase 4",
              title: "Go-To-Market",
              weeks: "Weeks 7-8",
              items: ["GTM Frameworks & Traction workshop", "Beta testing & campus rollout", "Live metrics + Investor Pitch Deck"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Card hover className="p-6 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full grid place-items-center shrink-0" style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest" style={{ color: "var(--accent)" }}>
                      {item.phase} · {item.weeks}
                    </p>
                    <h3 className="font-display font-semibold text-[18px] mt-1">{item.title}</h3>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {item.items.map((li, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                      {li}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem spaces */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <h2 className="font-display font-semibold tracking-tight" style={{ fontSize: "clamp(22px, 3.5vw, 28px)" }}>
          Pick Your Problem Space
        </h2>
        <p className="mt-2 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--muted)" }}>
          These are the sectors we focus on. Not restricted to your major—engineers, designers, researchers, product people: all welcome.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {["Electricity & Power", "Transportation & Mobility", "EdTech", "Technology Infrastructure", "Security"].map((pill, i) => (
            <Badge
              key={i}
              variant={i === 2 ? "default" : "secondary"}
              className="px-4 py-2 text-sm font-medium rounded-full"
            >
              {pill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Real Commitment Required */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Card className="p-6 sm:p-8 bg-[var(--surface-2)] border-[var(--border)] shadow-none">
          <h2 className="font-display font-semibold tracking-tight text-[22px] sm:text-[26px]">Real Commitment Required</h2>
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            This is not a side project. This is a <span className="font-semibold" style={{ color: "var(--accent)" }}>serious 8-week commitment</span>. Weekly demos. Mentor reviews. Clear expectations. We take discipline seriously. If you&apos;re ready to execute like professionals, apply.
          </p>
        </Card>
      </section>

      {/* Rewards */}
      <section className="max-w-6xl mx-auto px-5 pb-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--accent)" }}>
          Rewards
        </p>
        <h2 className="mt-2 font-display font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 34px)" }}>
          Win Cash. Get Positioned.
        </h2>
        <p className="mt-3 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Prize money for the best projects. But more importantly: positioning for internships and opportunities that compound your career.
        </p>

        <div className="mt-6 grid gap-4">
          {[
            {
              title: "Get Trained & Become Top 1%",
              description: "Get trained by industry experts and pushed to build competence. Join the top 1% at your skill level.",
            },
            {
              title: "Build a Portfolio",
              description: "Build a real project. Something you can show to employers, investors, and collaborators. Your proof of capability.",
            },
            {
              title: "Industry Mentors",
              description: "Get guided by industry mentors with practical experience at top companies. Real feedback, real insight.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Card className="p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full grid place-items-center shrink-0" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d={
                        i === 0
                          ? "M13 10V3L4 14h7v7l9-11h-7z"
                          : i === 1
                            ? "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            : "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      }
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[16px]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grand Prize + Beyond Cash */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid gap-4">
          <Card className="p-7 sm:p-10 text-center bg-[var(--accent)] border-[var(--accent)] text-white overflow-hidden">
            <Badge className="bg-white text-[var(--accent)] hover:bg-white border-white text-[11px] font-bold tracking-widest">Grand Prize</Badge>
            <div className="mx-auto mt-4 w-14 h-14 rounded-full grid place-items-center" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="mt-4 font-display font-semibold tracking-tight" style={{ fontSize: "clamp(32px, 6vw, 48px)", lineHeight: 1 }}>
              ₦200,000
            </div>
            <p className="mt-2 font-semibold">Grand Prize - Cash Award</p>
            <p className="mt-2 text-sm max-w-xl mx-auto opacity-75 leading-relaxed">
              Direct funding for the best overall team. Use it to build, scale, or however you want to move forward.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h3 className="font-display font-semibold text-[18px]">Beyond Cash</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Winning CodeSpark doesn&apos;t just mean money. It means proof. A real project. Mentors who&apos;ll vouch for you. Positioning with VCs, accelerators, and top companies. The grand prize winner gets direct help applying to programs worth millions in capital.
            </p>
            <Separator className="my-4" />
            <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
              Eight weeks of execution. Outcomes that last years.
            </p>
          </Card>
        </div>
      </section>

      {/* Forum */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--accent)" }}>
          The Final Stage
        </p>
        <h2 className="mt-2 font-display font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 34px)" }}>
          CodeSpark Forum
        </h2>
        <p className="mt-3 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Week 9: Your project gets in front of investors, accelerators, and industry leaders. Pitch on stage. Get feedback. Open doors.
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            { stat: "500+", label: "Attendees", sub: "Builders, investors, leaders" },
            { stat: "100+", label: "Decision-Makers", sub: "VCs, accelerators, companies" },
            { stat: "1", label: "Massive Stage", sub: "Your moment to shine" },
          ].map((item, i) => (
            <Card key={i} className={`p-6 text-center ${i === 2 ? "bg-[var(--accent)] border-[var(--accent)] text-white" : ""}`}>
              <div className="font-display font-semibold tracking-tight" style={{ fontSize: "28px", color: i === 2 ? "#fff" : "var(--accent)" }}>
                {item.stat}
              </div>
              <div className={`mt-1 font-semibold text-sm ${i === 2 ? "text-white" : ""}`}>{item.label}</div>
              <div className={`text-xs mt-1 ${i === 2 ? "opacity-70" : ""}`} style={i === 2 ? {} : { color: "var(--muted)" }}>
                {item.sub}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-4 p-6 sm:p-8">
          <h3 className="font-display font-semibold text-[18px]">What Happens</h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Live Pitches", description: "Your team pitches on stage to real decision-makers." },
              { title: "Direct Access", description: "VCs, founders, and leaders. No middlemen. Direct conversations." },
              { title: "Opportunities", description: "Internships, grants, partnerships all in one room." },
            ].map((item, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-full grid place-items-center" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d={
                        i === 0
                          ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          : i === 1
                            ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            : "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      }
                    />
                  </svg>
                </div>
                <h4 className="mt-3 font-display font-semibold text-[15px]">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <h2 className="font-display font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 4vw, 30px)" }}>
          Timeline
        </h2>
        <div className="mt-6 relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />
          <div className="space-y-0">
            {[
              { date: "July 17", title: "Applications Close", description: "No extensions. This is the cutoff." },
              { date: "July 17-19", title: "Team Selection", description: "Top 20 teams selected across 15 universities." },
              { date: "July 20-22", title: "Onboarding", description: "Meet mentors, understand the program, prepare to execute." },
              { date: "July 23 - Sept 18", title: "8-Week Program", description: "Build, iterate, validate, and prepare for launch." },
              { date: "Sept 26", title: "CodeSpark Forum", description: "Pitch on stage. Meet investors. Open doors." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                <span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] shadow-sm shrink-0" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                    {item.date}
                  </p>
                  <h4 className="font-display font-semibold text-[16px] mt-0.5">{item.title}</h4>
                  <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Card className="p-8 sm:p-12 text-center overflow-hidden">
          <h2 className="font-display font-semibold tracking-tight leading-none mx-auto max-w-2xl" style={{ fontSize: "clamp(28px, 5vw, 42px)" }}>
            Ready to Ship Something Real?
          </h2>
          <p className="mt-4 text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Eight weeks. Your team. Mentors who&apos;ve been there. At the end, you have a project. Something that changes the conversation with employers and investors forever.
          </p>
          <div className="mt-7">
            <Button asChild size="lg" className="rounded-full">
              <a href="https://forms.gle/JaoSqfifwc9acdpH7" target="_blank" rel="noopener noreferrer">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </div>
          <Separator className="my-8 max-w-sm mx-auto" />
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Questions? Reach out:
          </p>
          <a href="mailto:prosperity.olorunfemi@pau.edu.ng" className="inline-flex items-center gap-2 mt-2 text-sm font-medium hover:underline" style={{ color: "var(--accent)" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            prosperity.olorunfemi@pau.edu.ng
          </a>
        </Card>
      </section>
    </div>
  );
}
