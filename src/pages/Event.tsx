import { motion } from "motion/react";
import { siteData } from "../data/siteData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Sparkles, AlertTriangle, HandCoins } from "lucide-react";

export function Event() {
  const e = siteData.programs.event;

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)]">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-5 pt-10 sm:pt-16 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border bg-[var(--surface)] px-4 py-1.5 text-xs font-medium shadow-[var(--shadow)]"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            {e.date} · {e.location} · {e.attendance}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-semibold tracking-tight leading-[0.98] mx-auto"
            style={{ fontFamily: "Outfit", fontSize: "clamp(32px, 5.5vw, 52px)", maxWidth: "20ch" }}
          >
            70% of Graduates Leave University Unemployed. <span style={{ color: "var(--accent)" }}>Be the Exception.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-2xl mx-auto text-[15px] md:text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            The world is moving to AI, but the classroom isn't keeping up. Don't wait until graduation to start building your career. Join 500 elite student builders and top industry operators at the CodeSpark Forum to transform your degree into a highly sought-after, AI-native tech advantage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href={e.heroCta.primary.href} target="_blank" rel="noopener noreferrer">
                {e.heroCta.primary.label}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={e.heroCta.secondary.href} target="_blank" rel="noopener noreferrer">
                {e.heroCta.secondary.label}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Success stories</p>
          <h2 className="mt-2 font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(26px, 3.6vw, 34px)" }}>
            {e.successStories.header}
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {e.successStories.body}
          </p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {e.successStories.stories.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card hover className="h-full p-6">
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)" }}
                >
                  <Sparkles className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-semibold text-[17px]" style={{ fontFamily: "Outfit" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 md:py-16">
        <Card className="p-7 sm:p-10">
          <p className="eyebrow">About the forum</p>
          <h2 className="mt-2 font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(26px, 3.6vw, 34px)" }}>
            {e.about.header}
          </h2>
          <p className="mt-3 text-sm md:text-[15px] leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {e.about.body}
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Card className="p-6" hover>
              <Badge variant="soft" className="mb-3">For students</Badge>
              <p className="text-sm leading-relaxed">{e.about.students}</p>
            </Card>
            <Card className="p-6" hover>
              <Badge variant="soft" className="mb-3">For alumni &amp; parents</Badge>
              <p className="text-sm leading-relaxed">{e.about.alumni}</p>
            </Card>
          </div>
        </Card>
      </section>

      {/* Guests */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Event guests</p>
          <h2 className="mt-2 font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(26px, 3.6vw, 34px)" }}>
            Learn Directly from Those Who Have Gone Ahead
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {e.speakersIntro} {e.moreGuestsNote}
          </p>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {e.speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card hover className="h-full p-6 flex flex-col">
                <span
                  className="grid h-12 w-12 place-items-center rounded-full font-semibold text-base"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {s.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </span>
                <h3 className="mt-4 font-semibold text-[15px]" style={{ fontFamily: "Outfit" }}>
                  {s.name}
                </h3>
                <p className="mt-0.5 text-xs" style={{ color: "var(--muted)" }}>{s.role}</p>
                <Badge variant="soft" className="mt-3 text-[11px] w-fit">{s.panel}</Badge>
                <Separator className="my-3" />
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--ink)" }}>The Focus: </span>
                  {s.focus}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOMO */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 md:py-16">
        <Card className="p-7 sm:p-10 border-[color-mix(in_srgb,var(--accent)_18%,var(--border))] bg-[var(--accent-soft)]">
          <div className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 place-items-center rounded-full"
              style={{ background: "var(--accent)", color: "white" }}
            >
              <AlertTriangle className="h-5 w-5" />
            </span>
            <h2 className="font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(24px, 3.4vw, 30px)" }}>
              {e.fomo.header}
            </h2>
          </div>
          <p className="mt-4 text-sm md:text-[15px] leading-relaxed" style={{ color: "var(--ink)" }}>
            {e.fomo.body}
          </p>
          <Separator className="my-5 bg-[color-mix(in_srgb,var(--accent)_22%,var(--border))]" />
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            <span className="font-semibold">Parent &amp; Alumni Note: </span>
            {e.fomo.parentNote}
          </p>
        </Card>
      </section>

      {/* Agenda */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">The agenda</p>
          <h2 className="mt-2 font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(26px, 3.6vw, 34px)" }}>
            {e.agenda.header}
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {e.agenda.body}
          </p>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {e.agenda.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full p-6 flex gap-4 items-start" hover>
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[16px]" style={{ fontFamily: "Outfit" }}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tickets & Sponsorship */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-4">
          <Card className="p-7 sm:p-10">
            <p className="eyebrow">Tickets &amp; sponsorship</p>
            <h2 className="mt-2 font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(26px, 3.6vw, 34px)" }}>
              {e.tickets.header}
            </h2>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {e.tickets.body}
            </p>

            <Separator className="my-6" />

            <p className="text-sm font-semibold" style={{ fontFamily: "Outfit" }}>
              {e.tickets.perksHeader}
            </p>
            <ul className="mt-4 space-y-2.5">
              {e.tickets.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ink)" }}>
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-7 sm:p-10 bg-[var(--accent)] border-[var(--accent)] text-white">
            <span
              className="grid h-10 w-10 place-items-center rounded-full bg-white/15"
            >
              <HandCoins className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold tracking-tight" style={{ fontFamily: "Outfit", fontSize: "clamp(22px, 3vw, 28px)" }}>
              Reserve your seat
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {e.date} · {e.location}
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <Button asChild size="lg" className="bg-white text-[var(--accent)] hover:bg-white/90 border border-white w-full">
                <a href={e.tickets.cta.primary.href} target="_blank" rel="noopener noreferrer">
                  {e.tickets.cta.primary.label}
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 w-full">
                <a href={e.tickets.cta.secondary.href} target="_blank" rel="noopener noreferrer">
                  {e.tickets.cta.secondary.label}
                </a>
              </Button>
            </div>

            <Separator className="my-5 bg-white/20" />

            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Sponsor a student</p>
            <div className="mt-3 flex flex-col gap-2">
              {e.tickets.cta.tiers.map((t) => (
                <a
                  key={t.label}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {t.label}
                  <span aria-hidden>→</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
