import { motion } from "motion/react";
import { siteData } from "../data/siteData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Event() {
  const event = siteData.programs.event;

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero with 3 pill badges */}
      <section className="max-w-[1280px] mx-auto px-5 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-medium bg-[var(--surface)] shadow-[var(--shadow)] gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              {event.date}
            </Badge>
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-medium bg-[var(--surface)] shadow-[var(--shadow)]">
              {event.location}
            </Badge>
            <Badge variant="soft" className="px-4 py-1.5 text-xs font-semibold">
              {event.attendance}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-6 text-[30px] md:text-[52px] font-bold tracking-tight leading-[1.0]"
            style={{ fontFamily: "Outfit" }}
          >
            {event.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[15px] md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            {event.whatItIs}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border"
            style={{
              background: "var(--accent-soft)",
              borderColor: "color-mix(in srgb, var(--accent) 14%, transparent)",
              color: "var(--accent-ink)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            {event.tagline}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg">
              <a href="https://tix.africa/discover/codesparkevent2026" target="_blank" rel="noopener noreferrer">
                Register now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://drive.google.com/file/d/1GsOA8psdMa-VLyg9ZeIBna43jane0Ahq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Sponsor event
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5">
        <Separator />
      </div>

      {/* Who Should Attend - flex wrap pill chips (Button secondary) */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">Who should attend</p>
          <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
            Who should attend
          </h2>
          <p className="mt-2 text-sm max-w-2xl" style={{ color: "var(--muted)" }}>
            Five groups who will get the most value from the builder&apos;s room.
          </p>
          <Separator className="mt-6 mb-8" />
          <div className="flex flex-wrap gap-3">
            {event.whoShouldAttend.map((attendee, i) => (
              <motion.div
                key={attendee}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Button variant="secondary" size="sm" className="rounded-full px-5 h-9 text-sm font-medium cursor-default">
                  {attendee}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Highlights - left-accent border cards */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <p className="eyebrow">Event highlights</p>
          <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
            Event highlights
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            A full day of debates, pitches, build sessions, and real conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {event.highlights.map((highlight, i) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card className="p-6 border-l-4 border-l-[var(--accent)] flex gap-4 items-start" hover>
                <span
                  className="shrink-0 w-9 h-9 rounded-full grid place-items-center text-xs font-bold text-white"
                  style={{ background: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--ink)" }}>
                  {highlight}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Speakers - 3-col cards with circle avatar 24/28, border, soft shadow */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="eyebrow">Featured speakers</p>
          <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
            Featured speakers
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Twelve operators and founders sharing what no one tells you.
          </p>
          <Separator className="mt-6 max-w-[120px] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {event.speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Card hover className="p-6 text-center h-full flex flex-col items-center">
                {speaker.image ? (
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 shadow-sm shrink-0 bg-[var(--surface-2)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <img src={speaker.image} alt={speaker.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full grid place-items-center border-2 shadow-sm shrink-0 bg-[var(--surface-2)] text-xl font-bold"
                    style={{ borderColor: "var(--border)", color: "var(--accent)" }}
                  >
                    {speaker.name[0]}
                  </div>
                )}
                <h3 className="mt-4 text-[15px] font-semibold tracking-tight" style={{ fontFamily: "Outfit" }}>
                  {speaker.name}
                </h3>
                <Badge variant="soft" className="mt-2 px-3 py-1 text-xs font-medium max-w-full whitespace-normal text-center leading-tight">
                  {speaker.title}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA centered blue */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Card className="p-8 md:p-12 bg-[var(--accent)] border-[var(--accent)] text-white shadow-[var(--shadow-strong)]">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "Outfit" }}>
              Secure your spot
            </h2>
            <p className="mt-3 text-sm md:text-[15px] opacity-90">{event.attendance} builders. One day. Unlimited possibilities.</p>
            <p className="mt-2 text-xs opacity-70">
              {event.date} · {event.location}
            </p>
            <Separator className="my-6 bg-white/20" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-[var(--accent)] hover:bg-white/90 border border-white w-full sm:w-auto">
                <a href="https://tix.africa/discover/codesparkevent2026" target="_blank" rel="noopener noreferrer">
                  Register now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white w-full sm:w-auto">
                <a href="https://drive.google.com/file/d/1GsOA8psdMa-VLyg9ZeIBna43jane0Ahq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Sponsor event
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
