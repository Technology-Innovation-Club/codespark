import { motion } from "motion/react";
import { useEffect } from "react";
import { siteData } from "../data/siteData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Incubator() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)]">
      {/* Hero - centered clarity */}
      <section className="max-w-6xl mx-auto px-5 pt-10 sm:pt-16 pb-8 sm:pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-widest bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)]"
          style={{ color: "var(--muted)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          APPLICATIONS_OPEN_NOVEMBER_2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="mt-6 font-display font-semibold tracking-tight leading-none"
          style={{ fontSize: "clamp(40px, 9vw, 84px)" }}
        >
          INCUBATOR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-4 mx-auto max-w-2xl text-[18px] sm:text-[20px] leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Where Student Ideas Become Revenue-Generating Startups
        </motion.p>
      </section>

      {/* Program overview card */}
      <section className="max-w-6xl mx-auto px-5 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-7 sm:p-10 text-center">
            <CardContent className="p-0">
              <p className="text-[16px] sm:text-[18px] leading-relaxed max-w-3xl mx-auto" style={{ color: "var(--muted)" }}>
                {siteData.programs.incubator.description}
              </p>
              <Separator className="my-6 max-w-[120px] mx-auto" />
              <p className="font-display font-semibold text-[17px] sm:text-[19px]" style={{ color: "var(--accent)" }}>
                {siteData.programs.incubator.outcome}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Program Structure - timeline */}
      <section className="max-w-6xl mx-auto px-5 pb-16 sm:pb-20">
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="soft" className="mb-3 px-3 py-1 text-[11px] tracking-widest font-semibold">
            PROGRAM STRUCTURE
          </Badge>
          <h2 className="font-display text-[26px] sm:text-[32px] font-semibold tracking-tight">
            Five phases to revenue
          </h2>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            A focused 3 to 4 month sprint. Each phase builds on the last.
          </p>
        </div>

        {/* Mobile: stacked with left line + dots */}
        <div className="md:hidden relative pl-6">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--border)]" />
          <div className="space-y-4">
            {siteData.programs.incubator.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-6 top-7 w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] shadow-sm" />
                <Card className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="soft" className="text-[11px] font-semibold">
                      {phase.name}
                    </Badge>
                    <span className="text-[11px] font-medium" style={{ color: "var(--muted-2)" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[17px] leading-tight">{phase.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {phase.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: centered line with alternating cards */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-[var(--border)]" />
          <div className="space-y-6">
            {siteData.programs.incubator.phases.map((phase, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`relative flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
                    <Card className={`inline-block text-left p-6 w-full max-w-[420px] ${isLeft ? "ml-auto" : "mr-auto"}`}>
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                        <Badge variant="soft" className="text-[11px] font-semibold">
                          {phase.name}
                        </Badge>
                        <span className="text-[11px] font-medium" style={{ color: "var(--muted-2)" }}>
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-[18px] leading-tight">{phase.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        {phase.description}
                      </p>
                    </Card>
                  </div>

                  <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-4 border-[var(--bg)] shadow-sm shrink-0" />

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="max-w-6xl mx-auto px-5 pb-16 sm:pb-20">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="font-display text-[22px] sm:text-[26px] font-semibold tracking-tight">
            Why CodeSpark
          </h2>
          <span className="hidden sm:inline text-xs" style={{ color: "var(--muted)" }}>
            Four principles
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {siteData.programs.incubator.differentiators.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Card hover className="p-6 h-full">
                <div className="flex gap-4 items-start">
                  <span
                    className="w-9 h-9 rounded-full grid place-items-center text-sm font-bold shrink-0"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed font-medium pt-1">{diff}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA blue */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Card className="p-8 sm:p-10 text-center bg-[var(--accent)] border-[var(--accent)] text-white overflow-hidden">
          <h2 className="font-display text-[28px] sm:text-[36px] font-semibold tracking-tight leading-none">
            Ready to build?
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] max-w-xl mx-auto opacity-80 leading-relaxed">
            Join the next cohort and turn your idea into a revenue-generating startup.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-[var(--accent)] hover:bg-white/90 border-white shadow-none"
            >
              <a href="https://tix.africa/discover/codespark-tech-entrepreneurship-event" target="_blank" rel="noopener noreferrer">
                Join community
              </a>
            </Button>
          </div>
          <p className="mt-3 text-xs opacity-60">Applications open November 2026</p>
        </Card>
      </section>
    </div>
  );
}
