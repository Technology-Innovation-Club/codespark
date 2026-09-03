import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { siteData } from "../data/siteData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Fallback preserves the 6 real team members that match the public/*.webp assets.
// Use siteData.about.team as primary source when it already has 6, otherwise use this known-good set.
const fallbackTeam = [
  { name: "Prosperity Olorunfemi", role: "Founder & Lead", image: "/team-lead.webp" },
  { name: "Abasiono Mbat", role: "Technical Lead", image: "/technical-lead.webp" },
  { name: "Okon Uyaiabasi", role: "Branding Lead", image: "/branding-lead.webp" },
  { name: "Emmanuel Omale", role: "Program Manager", image: "/program-manager.webp" },
  { name: "Oluwademilade Oguntade", role: "Marketing Lead", image: "/marketing-lead.webp" },
  { name: "Omotayo Ayeni", role: "Logistics & Event Planning Lead", image: "/omotayo-ayeni.webp" },
] as const;

const teamImageMap: Record<string, string> = {
  "Prosperity Olorunfemi": "/team-lead.webp",
  "Abasiono Mbat": "/technical-lead.webp",
  "Okon Uyaiabasi": "/branding-lead.webp",
  "Emmanuel Omale": "/program-manager.webp",
  "Oluwademilade Oguntade": "/marketing-lead.webp",
  "Omotayo Ayeni": "/omotayo-ayeni.webp",
  "Team Member 2": "/program-manager.webp",
  "Team Member 3": "/branding-lead.webp",
};

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Keep all siteData content wired; fall back to 6 real members when siteData has placeholder entries.
  const teamMembers =
    siteData.about.team.length >= 6
      ? siteData.about.team.map((m) => ({
          name: m.name,
          role: m.role,
          image: teamImageMap[m.name] ?? "",
          bio: m.bio,
        }))
      : (fallbackTeam as unknown as { name: string; role: string; image: string; bio?: string }[]);

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero - centered with pill */}
      <section className="max-w-[1280px] mx-auto px-5 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-medium tracking-wide bg-[var(--surface)] shadow-[var(--shadow)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              About CodeSpark
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-6 text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.0]"
            style={{ fontFamily: "Outfit" }}
          >
            {siteData.about.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[15px] md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            {siteData.about.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg">
              <a href="https://tix.africa/discover/codespark-tech-entrepreneurship-event" target="_blank" rel="noopener noreferrer">
                Attend event
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/for-partners">Partner with us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story - left-bordered card list */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Our story</p>
            <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
              The story behind CodeSpark
            </h2>
            <Separator className="mt-4 mb-8" />
          </motion.div>

          <div className="border-l-2 border-[var(--border)] pl-6 md:pl-8 space-y-4">
            {siteData.about.story.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card hover className="p-6 md:p-7">
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: "var(--ink)" }}>
                    {text}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision - soft blue card with border */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-[color-mix(in_srgb,var(--accent)_14%,var(--border))] bg-[var(--accent-soft)]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Badge variant="soft" className="px-3 py-1 text-[11px] tracking-widest font-semibold">
                  VISION
                </Badge>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                  Where we are headed
                </span>
              </div>
              <CardTitle className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
                A continental pipeline of principled founders
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Separator className="mb-6 bg-[color-mix(in_srgb,var(--accent)_14%,var(--border))]" />
              <p className="text-[15px] md:text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                {siteData.about.vision}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  Faith-driven
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Revenue before hype
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Built in university
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Pillars - 3-col cards (odd highlighted soft blue) */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="eyebrow">Core pillars</p>
            <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
              What we stand for
            </h2>
          </div>
          <span className="hidden md:inline text-xs" style={{ color: "var(--muted)" }}>
            5 pillars
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteData.about.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card
                hover
                className={`h-full p-6 flex flex-col ${
                  i % 2 === 0 ? "bg-[var(--accent-soft)] border-[color-mix(in_srgb,var(--accent)_14%,var(--border))]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full grid place-items-center text-xs font-bold text-white shrink-0" style={{ background: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Separator orientation="vertical" className="h-5" />
                  <Badge variant={i % 2 === 0 ? "soft" : "secondary"} className="text-[11px]">
                    Pillar 0{i + 1}
                  </Badge>
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team - rounded card grid with circular images */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="eyebrow">The team</p>
          <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
            The team behind CodeSpark
          </h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Builders, operators, and mentors helping students ship products before graduation.
          </p>
          <Separator className="mt-6 max-w-[120px] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card hover className="p-7 text-center h-full flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 shadow-sm shrink-0 bg-[var(--surface-2)]" style={{ borderColor: "var(--border)" }}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 16%" }}
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-2xl" style={{ color: "var(--muted)" }}>
                      {(member as { avatar?: string }).avatar ?? member.name[0]}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-[15px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
                  {member.name}
                </h3>
                <Badge variant="soft" className="mt-2 px-3 py-1 text-xs font-medium">
                  {member.role}
                </Badge>
                {(member as { bio?: string }).bio && (
                  <p className="mt-3 text-xs leading-relaxed line-clamp-3" style={{ color: "var(--muted)" }}>
                    {(member as { bio?: string }).bio}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA blue strip */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Card className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-[var(--accent)] bg-[var(--accent)] text-white shadow-[var(--shadow-strong)]">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
                Join the movement
              </h3>
              <p className="mt-2 text-sm md:text-[15px] leading-relaxed opacity-90 max-w-xl">Be part of building Africa&apos;s next generation of tech founders. Attend the event or partner with us.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Button asChild variant="outline" size="lg" className="bg-white text-[var(--accent)] border-white hover:bg-white/90 w-full sm:w-auto">
                <a href="https://tix.africa/discover/codespark-tech-entrepreneurship-event" target="_blank" rel="noopener noreferrer">
                  Attend event
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[var(--ink)] text-white hover:bg-black w-full sm:w-auto border border-white/15">
                <Link to="/for-partners">Partner with us</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
