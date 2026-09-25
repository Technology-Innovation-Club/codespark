import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { siteData } from "../data/siteData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Home() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "error" | "success">(
    "idle",
  );

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setFormStatus("error");
      return;
    }
    setFormStatus("success");
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)] overflow-hidden">
      {/* Hero split */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5">
          <div
            className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center"
            style={{
              minHeight: "min(100dvh, 780px)",
              paddingTop: 32,
              paddingBottom: 28,
            }}
          >
            {/* left copy */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1
                className="mt-5 font-semibold tracking-tight font-display leading-[0.98]"
                style={{ fontSize: "clamp(30px, 6.5vw, 54px)", maxWidth: "14ch" }}
              >
                {siteData.hero.headline}
              </h1>

              <p
                className="mt-4 max-w-[46ch] leading-relaxed text-[15px]"
                style={{ color: "#6b7280" }}
              >
                {siteData.hero.subheadline}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full h-12 px-7">
                  <a
                    href={siteData.hero.ctas[0].href}
                    target={
                      siteData.hero.ctas[0].href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      siteData.hero.ctas[0].href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    Apply now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full h-12 px-7 bg-[var(--surface)]"
                >
                  <Link to="/challenge-resource-hub/dashboard">View hub</Link>
                </Button>
              </div>

              <div
                className="mt-8 flex items-center gap-4 text-xs"
                style={{ color: "#6b7280" }}
              >
                <div className="flex -space-x-2">
                  {["U", "O", "C"].map((initial, i) => (
                    <span
                      key={initial}
                      className="w-8 h-8 rounded-full grid place-items-center text-[11px] font-bold"
                      style={{
                        background: i === 0 ? "var(--accent)" : "var(--surface-2)",
                        color: i === 0 ? "#fff" : "var(--ink)",
                        border: "2px solid var(--surface)",
                      }}
                    >
                      {initial}
                    </span>
                  ))}
                </div>
                <span>Join founders from 15 universities</span>
              </div>
            </motion.div>

            {/* right premium card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              className="relative"
            >
              <Card className="overflow-hidden p-2.5 rounded-[20px]">
                <div
                  className="relative overflow-hidden rounded-[14px] h-[380px] md:h-[440px]"
                  style={{
                    background:
                      "linear-gradient(150deg, var(--accent-soft) 0%, var(--surface-2) 48%, color-mix(in srgb, var(--accent) 16%, var(--surface)) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "radial-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div
                    className="absolute -top-16 -right-10 w-56 h-56 rounded-full blur-2xl"
                    style={{ background: "color-mix(in srgb, var(--accent) 22%, transparent)" }}
                  />
                  <div
                    className="absolute -bottom-20 -left-12 w-64 h-64 rounded-full blur-2xl"
                    style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)" }}
                  />
                  <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-4 pt-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "color-mix(in srgb, var(--accent) 35%, var(--border))" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "color-mix(in srgb, var(--accent) 20%, var(--border))" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border)" }} />
                    <span className="ml-2 text-[11px] tracking-wide" style={{ color: "var(--muted)" }}>codespark.app</span>
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(24,24,27,.18) 100%)",
                    }}
                  />
                  <div className="absolute left-3 right-3 bottom-3 grid grid-cols-[1.1fr_.9fr] gap-3">
                    <Card className="p-4 rounded-[20px] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] backdrop-blur-[10px]">
                      <div
                        className="text-[11px] tracking-[0.14em] uppercase font-medium"
                        style={{ color: "#6b7280" }}
                      >
                        Active sprint
                      </div>
                      <div
                        className="mt-1.5 font-semibold text-sm font-display"
                      >
                        Week 5 · Production
                      </div>
                      <div
                        className="mt-3 h-1.5 rounded-full overflow-hidden"
                        style={{ background: "var(--surface-2)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{ width: "64%", background: "var(--accent)" }}
                        />
                      </div>
                      <div
                        className="mt-2 flex justify-between text-xs"
                        style={{ color: "#6b7280" }}
                      >
                        <span>64% complete</span>
                        <span>11 days left</span>
                      </div>
                    </Card>
                    <Card className="p-4 hidden sm:flex flex-col gap-2 rounded-[20px] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] backdrop-blur-[10px]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">Team Atlas</span>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div
                          className="flex items-center gap-2 text-xs rounded-full px-3 py-2 border"
                          style={{
                            background: "var(--surface-2)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <span
                            className="w-5 h-5 rounded-full grid place-items-center text-[10px] text-white"
                            style={{ background: "var(--accent)" }}
                          >
                            ✓
                          </span>
                          Demo ready
                        </div>
                        <div
                          className="flex items-center gap-2 text-xs rounded-full px-3 py-2 border"
                          style={{
                            background: "var(--surface-2)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <span
                            className="w-5 h-5 rounded-full grid place-items-center"
                            style={{
                              background: "var(--surface)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            ◍
                          </span>
                          Pitch review
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                <div
                  className="px-4 py-3 flex items-center justify-between text-xs"
                  style={{ color: "#6b7280" }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    Live cohort · 20 teams
                  </span>
                  <span className="hidden sm:inline">Next review today 4pm</span>
                </div>
              </Card>
              <div className="hidden lg:flex absolute -top-3 -right-2 rounded-full px-4 py-2 items-center gap-2 text-xs font-medium bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-strong)]">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                15 universities connected
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee single */}
        <div className="marquee py-3 bg-[var(--surface)] border-y border-[var(--border)] overflow-hidden whitespace-nowrap">
          <div className="marquee-track inline-flex text-sm font-medium tracking-wide">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="mx-8 flex items-center gap-8"
                style={{ color: "#6b7280" }}
              >
                <span>Shipping every week</span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <span>Mentors who have shipped</span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <span>Real users, real feedback</span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band 5 — siteData.impact stats */}
      <section className="max-w-[1280px] mx-auto px-5 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
        >
          {siteData.impact.stats.map((s, idx) => {
            const isHighlighted = idx === 2;
            return (
              <Card
                key={s.label}
                hover
                className={`p-6 text-center rounded-[20px] ${isHighlighted ? "text-white border-[var(--accent)]" : ""}`}
                style={
                  isHighlighted
                    ? { background: "var(--accent)", borderColor: "var(--accent)" }
                    : undefined
                }
              >
                <div
                  className="text-[28px] font-semibold tracking-tight font-display leading-none"
                >
                  {s.value}
                </div>
                <div
                  className={`mt-2 text-[11px] tracking-widest font-medium uppercase ${isHighlighted ? "opacity-80" : ""}`}
                  style={isHighlighted ? undefined : { color: "#6b7280" }}
                >
                  {s.label}
                </div>
              </Card>
            );
          })}
          {/* 5th card to complete bento rhythm — sprint duration */}
          {siteData.impact.stats.length === 4 && (
            <Card
              hover
              className="p-6 text-center rounded-[20px] text-white"
              style={{ background: "var(--accent)", borderColor: "var(--accent)" }}
            >
              <div className="text-[28px] font-semibold tracking-tight font-display leading-none">
                8 <span className="text-lg font-medium">wks</span>
              </div>
              <div className="mt-2 text-[11px] tracking-widest font-medium uppercase opacity-80">
                Sprint
              </div>
            </Card>
          )}
        </motion.div>
        <p
          className="mt-3 text-center text-xs"
          style={{ color: "#6b7280" }}
        >
          {siteData.impact.since}
        </p>
      </section>

      {/* Surfaces bento */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight font-display">
            One system, three surfaces
          </h2>
          <Link
            to="/innovation-challenge"
            className="hidden md:inline-flex text-sm font-medium hover:opacity-70"
            style={{ color: "#6b7280" }}
          >
            See challenge →
          </Link>
        </div>
        <div className="grid lg:grid-cols-[1.45fr_.9fr] lg:grid-rows-[280px_220px] gap-3">
          {/* Featured Incubator large — spans 2 rows */}
          <Card
            hover
            className="overflow-hidden flex flex-col p-0 rounded-[20px] lg:row-span-2 group"
          >
            <div
              className="relative h-[220px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 48%, #0b1220) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.32]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.55) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div
                className="absolute -right-12 -bottom-20 w-64 h-64 rounded-full"
                style={{ background: "rgba(255,255,255,.10)" }}
              />
              <div
                className="absolute right-20 top-6 w-24 h-24 rounded-full"
                style={{ background: "rgba(255,255,255,.08)" }}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl leading-none text-white/15 select-none">
                ◈
              </span>
              <div className="absolute left-6 bottom-5">
                <div className="text-[11px] tracking-[0.16em] uppercase text-white/70">
                  Cohort 01
                </div>
                <div className="mt-1 font-display text-lg font-semibold text-white">
                  Idea → Demo Day
                </div>
              </div>
              <Badge className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs">
                Featured
              </Badge>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div
                className="w-9 h-9 rounded-full grid place-items-center text-white"
                style={{ background: "var(--accent)" }}
              >
                ◈
              </div>
              <h3 className="mt-4 text-xl font-semibold font-display">Incubator</h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#6b7280" }}
              >
                Eight weeks from idea to demo day. Weekly reviews and labs that keep
                you shipping. You leave with a product.
              </p>
              <div className="mt-auto pt-4">
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-2 text-xs font-semibold"
                >
                  Apply now
                </Badge>
              </div>
            </div>
          </Card>

          <Card
            hover
            className="p-6 flex flex-col rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-soft) 0%, var(--surface) 60%)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full grid place-items-center"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--accent)",
              }}
            >
              ⚡
            </div>
            <h3 className="mt-4 font-semibold font-display">Challenge</h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "#6b7280" }}
            >
              Compete across fifteen universities. Twenty teams, real problem spaces,
              judged by operators.
            </p>
            <div className="mt-4 flex gap-2">
              <Badge className="rounded-full px-3 py-1.5">15 schools</Badge>
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1.5"
              >
                8 weeks
              </Badge>
            </div>
            <div
              className="mt-4 w-full h-[96px] rounded-[12px] px-4 py-3 flex flex-col justify-center gap-1.5 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, var(--surface)) 0%, var(--surface-2) 100%)",
                border: "1px solid var(--border)",
              }}
            >
              {["Real problem spaces", "Operator judges", "Live pitch stage"].map(
                (t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "#6b7280" }}
                  >
                    <span
                      className="w-4 h-4 rounded-full grid place-items-center text-[9px] text-white shrink-0"
                      style={{ background: "var(--accent)" }}
                    >
                      ✓
                    </span>
                    {t}
                  </div>
                ),
              )}
            </div>
          </Card>

          <Card hover className="p-6 flex flex-col rounded-[20px]">
            <div
              className="w-9 h-9 rounded-full grid place-items-center"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              ⬢
            </div>
            <h3 className="mt-4 font-semibold font-display">Hub</h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "#6b7280" }}
            >
              Your home base. Tasks, classes, XP, attendance, and team chat in one
              place. Everything to keep momentum.
            </p>
            <Card className="mt-4 p-3 flex items-center gap-3 rounded-[20px] bg-[var(--surface-2)]">
              <div className="flex -space-x-2">
                <span
                  className="w-7 h-7 rounded-full grid place-items-center text-[11px] font-bold text-white"
                  style={{ background: "var(--accent)" }}
                >
                  T
                </span>
                <span
                  className="w-7 h-7 rounded-full grid place-items-center text-[11px] font-bold bg-[var(--surface)] border border-[var(--border)]"
                >
                  A
                </span>
                <span className="w-7 h-7 rounded-full grid place-items-center text-[11px] font-bold bg-[var(--surface)] border border-[var(--border)]">
                  D
                </span>
              </div>
              <div className="text-xs">
                <div className="font-semibold">Team Atlas</div>
                <div style={{ color: "#6b7280" }}>3 members online</div>
              </div>
              <span
                className="ml-auto w-2 h-2 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </Card>
          </Card>
        </div>
      </section>

      {/* Note from our lead */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden grid md:grid-cols-[420px_1fr] p-0 rounded-[20px]">
            <div
              className="relative h-[220px] md:h-auto md:min-h-[420px]"
              style={{
                background:
                  "linear-gradient(150deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 42%, #0b1220) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.3]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.55) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div
                className="absolute -left-16 top-10 w-56 h-56 rounded-full blur-2xl"
                style={{ background: "rgba(255,255,255,.12)" }}
              />
              <div
                className="absolute -right-10 bottom-0 w-48 h-48 rounded-full blur-2xl"
                style={{ background: "rgba(255,255,255,.08)" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="w-20 h-20 rounded-full grid place-items-center font-display text-2xl font-bold text-white"
                  style={{
                    background: "rgba(255,255,255,.16)",
                    border: "1px solid rgba(255,255,255,.3)",
                  }}
                >
                  PO
                </span>
              </div>
              <div className="absolute left-6 bottom-5 text-[11px] tracking-[0.16em] uppercase text-white/70">
                CodeSpark
              </div>
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div
                className="text-[11px] tracking-[0.14em] uppercase font-medium"
                style={{ color: "#6b7280" }}
              >
                {siteData.leadNote.kicker}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight font-display">
                {siteData.leadNote.headline}
              </h3>
              <div className="mt-4 space-y-3">
                {siteData.leadNote.content.map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${i === siteData.leadNote.content.length - 1 ? "font-semibold text-[var(--ink)]" : "text-sm"}`}
                    style={
                      i === siteData.leadNote.content.length - 1
                        ? undefined
                        : { color: "#6b7280" }
                    }
                  >
                    {i === siteData.leadNote.content.length - 1 ? (
                      <span>{para}</span>
                    ) : (
                      para
                    )}
                  </p>
                ))}
              </div>
              <blockquote
                className="mt-4 border-l-2 pl-4 text-sm italic leading-relaxed"
                style={{ borderColor: "var(--accent)", color: "#6b7280" }}
              >
                {siteData.leadNote.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full grid place-items-center text-sm font-bold text-white shrink-0"
                  style={{ background: "var(--accent)" }}
                >
                  PO
                </span>
                <div>
                  <div className="text-sm font-semibold">
                    Prosperity Olorunfemi
                  </div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>
                    Head of the CodeSpark Team
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="ml-auto rounded-full"
                >
                  <a
                    href={siteData.hero.ctas[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply now
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* What We Do — siteData */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight font-display">
            {siteData.whatWeDo.headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
            {siteData.whatWeDo.description}
          </p>
        </motion.div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {siteData.whatWeDo.pillars.map((pillar, i) => (
            <motion.div
              key={pillar}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card hover className="p-6 h-full rounded-[20px]">
                <div className="flex gap-4">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full grid place-items-center text-sm font-bold"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid color-mix(in srgb, var(--accent) 14%, transparent)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed pt-1">{pillar}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm font-semibold" style={{ color: "var(--accent)" }}>
          {siteData.whatWeDo.tagline}
        </p>
      </section>

      {/* Impact achievements */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <Card className="p-7 md:p-8 rounded-[20px]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold font-display tracking-tight">
                {siteData.impact.headline}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
                {siteData.impact.since} — what our builders have achieved
              </p>
            </div>
            <Badge variant="soft" className="rounded-full px-3 py-1 w-fit">
              {siteData.impact.stats.length} milestones
            </Badge>
          </div>
          <Separator className="my-6" />
          <div className="grid md:grid-cols-2 gap-3">
            {siteData.impact.achievements.map((a) => (
              <div
                key={a}
                className="flex items-start gap-3 text-sm leading-relaxed rounded-full px-4 py-3 border"
                style={{
                  background: "var(--surface-2)",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="mt-0.5 w-6 h-6 rounded-full grid place-items-center text-xs text-white shrink-0"
                  style={{ background: "var(--accent)" }}
                >
                  ✓
                </span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* How it works 4 steps */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <h2 className="text-[28px] font-semibold tracking-tight font-display">
          How it works
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              n: "01",
              title: "Apply",
              desc: "Submit your team and problem. We review in 48 hours and select twenty.",
              pct: "25%",
            },
            {
              n: "02",
              title: "Build",
              desc: "Eight week sprint with mentors, labs, and weekly demos. No hiding.",
              pct: "50%",
            },
            {
              n: "03",
              title: "Ship",
              desc: "Launch a working product and collect real users. Demo or you do not graduate.",
              pct: "75%",
              highlight: true,
            },
            {
              n: "04",
              title: "Showcase",
              desc: "Pitch at the Forum to investors and partners. One stage, the right people.",
              pct: "100%",
            },
          ].map((step) => (
            <Card
              key={step.n}
              hover={!step.highlight}
              className={`p-6 rounded-[20px] ${step.highlight ? "text-white border-[var(--accent)]" : ""}`}
              style={
                step.highlight
                  ? { background: "var(--accent)", borderColor: "var(--accent)" }
                  : undefined
              }
            >
              <div
                className="text-xs font-medium tracking-widest"
                style={step.highlight ? { color: "rgba(255,255,255,.7)" } : { color: "var(--accent)" }}
              >
                {step.n}
              </div>
              <h4 className="mt-3 font-semibold font-display">{step.title}</h4>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={step.highlight ? { color: "rgba(255,255,255,.8)" } : { color: "#6b7280" }}
              >
                {step.desc}
              </p>
              <div
                className="mt-4 h-1 rounded-full overflow-hidden"
                style={
                  step.highlight
                    ? { background: "rgba(255,255,255,.25)" }
                    : { background: "var(--surface-2)" }
                }
              >
                <div
                  className="h-full"
                  style={{
                    width: step.pct,
                    background: step.highlight ? "#fff" : "var(--accent)",
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* University partners 6 */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <div className="flex items-center justify-between">
          <div
            className="text-[11px] tracking-[0.14em] uppercase font-medium"
            style={{ color: "#6b7280" }}
          >
            University partners
          </div>
          <span className="text-xs" style={{ color: "#6b7280" }}>
            15 and growing
          </span>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {[
            { name: "Unilag", letter: "U", accent: true },
            { name: "OAU", letter: "O", accent: false },
            { name: "Covenant", letter: "C", accent: true },
            { name: "LASU", letter: "L", accent: false },
            { name: "Babcock", letter: "B", accent: true },
            { name: "FUTA", letter: "F", accent: false },
          ].map((u) => (
            <Card key={u.name} className="p-5 flex items-center gap-3 rounded-[20px]">
              <span
                className="w-9 h-9 rounded-full grid place-items-center text-sm font-bold shrink-0"
                style={
                  u.accent
                    ? { background: "var(--accent)", color: "#fff" }
                    : {
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--ink)",
                      }
                }
              >
                {u.letter}
              </span>
              <span className="text-sm font-medium">{u.name}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Commitment 2 cols + Get notified form */}
      <section className="max-w-[1280px] mx-auto px-5 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-7 rounded-[20px]">
            <h3 className="text-xl font-semibold tracking-tight font-display">
              Commitment
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed max-w-[55ch]"
              style={{ color: "#6b7280" }}
            >
              We fund the program. You bring time and focus. No tuition. Selection
              is competitive and attendance is tracked.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "8 weeks, 6 to 8 hours per week",
                "In-person labs plus online reviews",
                "Demo or you do not graduate",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-center">
                  <span
                    className="w-6 h-6 rounded-full grid place-items-center text-xs text-white shrink-0"
                    style={{ background: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Card className="mt-6 p-4 flex items-center justify-between rounded-[20px] bg-[var(--surface-2)]">
              <div>
                <div className="text-xs" style={{ color: "#6b7280" }}>
                  Cohort size
                </div>
                <div className="font-semibold text-sm">20 teams max</div>
              </div>
              <Badge className="rounded-full px-3 py-1 text-xs">Selective</Badge>
            </Card>
          </Card>

          <Card className="p-7 rounded-[20px] bg-[var(--surface)]">
            <h3 className="text-xl font-semibold tracking-tight font-display">
              Get notified
            </h3>
            <p className="mt-2 text-sm" style={{ color: "#6b7280" }}>
              Leave your email. We will send deadlines, prep material, and selection
              updates.
            </p>
            <form onSubmit={handleNotify} className="mt-6 space-y-3" noValidate>
              <Input
                type="email"
                placeholder="you@university.edu"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formStatus !== "idle") setFormStatus("idle");
                }}
                aria-invalid={formStatus === "error"}
                className="h-12 rounded-[12px]"
                required
              />
              {formStatus === "error" && (
                <p className="text-xs" style={{ color: "#ef4444" }}>
                  Enter a valid email address.
                </p>
              )}
              <Button
                type="submit"
                className="w-full h-12 rounded-full font-semibold text-sm bg-[var(--ink)] text-white hover:bg-black"
              >
                Notify me
              </Button>
              <p className="text-xs text-center" style={{ color: "#6b7280" }}>
                No spam. Unsubscribe anytime.
              </p>
            </form>
            {formStatus === "success" && (
              <Card className="mt-4 p-4 text-sm rounded-[20px] border-[color-mix(in_srgb,var(--accent)_20%,transparent)] bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                You are in. Check your email for the next steps.
              </Card>
            )}
          </Card>
        </div>
      </section>

      {/* CTA strip blue — siteData.cta */}
      <section className="max-w-[1280px] mx-auto px-5 pb-10">
        <Card
          className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-[20px] text-white border-[var(--accent)]"
          style={{ background: "var(--accent)", borderColor: "var(--accent)" }}
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight font-display">
              {siteData.cta.headline}
            </h3>
            <p className="mt-2 text-sm opacity-80">{siteData.cta.subheadline}</p>
            <p className="mt-1 text-sm font-medium opacity-90">
              {siteData.cta.question}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-8 bg-white text-[var(--accent)] hover:bg-white/90 shrink-0 w-full md:w-auto"
          >
            <a
              href={siteData.hero.ctas[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply now
            </a>
          </Button>
        </Card>
      </section>
    </div>
  );
}
