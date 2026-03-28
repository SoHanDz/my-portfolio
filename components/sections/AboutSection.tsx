"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Wrench } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function AboutSection() {
  const t = useTranslations("about");

  const stats = [
    { value: "7+", label: t("stats.projects") },
    { value: "4+", label: t("stats.clients") },
    { value: "3.2", label: t("stats.gpa") },
  ];

  const skills = [
    { key: "design", icon: "✦" },
    { key: "softSkills", icon: "◎" },
    { key: "frontend", icon: "⌥" },
    { key: "creative", icon: "◈" },
    { key: "ai", icon: "⚡" },
  ] as const;

  const processSteps = [
    { num: "01", key: "discover" },
    { num: "02", key: "research" },
    { num: "03", key: "design" },
    { num: "04", key: "deliver" },
  ] as const;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative large letter */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 text-[18vw] font-black text-foreground/[0.03] leading-none select-none"
      >
        ABOUT
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── HEADER ROW ── */}
        <motion.div {...fadeUp(0)} className="mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-4">
            {t("eyebrow")}
          </p>
          {/* Asymmetric: tagline left, bio right */}
          <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] text-foreground whitespace-pre-line">
              {t("tagline")}
            </h2>
            <div className="space-y-4 md:pb-2">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t("bio1")}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t("bio2")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── STATS STRIP ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap gap-px mb-16 md:mb-20 border border-border/60 rounded-2xl overflow-hidden bg-border/60"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex-1 min-w-[120px] bg-background px-6 py-6 flex flex-col items-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-black text-orange-500 tabular-nums">
                {s.value}
              </span>
              <span className="text-xs text-muted-foreground tracking-wide text-center">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── PROCESS SECTION ── */}
        <motion.div {...fadeUp(0.12)} className="mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-6">
            {t("process.eyebrow")}
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-10 leading-tight">
            {t("process.title")} <span className="text-orange-500">{t("process.titleAccent")}</span>
          </h3>

          {/* Desktop — curved SVG path */}
          <div className="hidden md:block relative" style={{ height: '380px' }}>
            <svg
              viewBox="0 0 900 340"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M 80 280 C 160 280, 230 140, 330 120 C 430 100, 460 210, 530 185 C 600 160, 650 70, 760 55"
                fill="none"
                stroke="#F0503D"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
              {/* Dots */}
              {[
                { cx: 80, cy: 280 },
                { cx: 330, cy: 120 },
                { cx: 530, cy: 185 },
                { cx: 760, cy: 55 },
              ].map((pos, i) => (
                <g key={i}>
                  <circle cx={pos.cx} cy={pos.cy} r={8} fill="#F0503D" opacity={0.15} />
                  <circle cx={pos.cx} cy={pos.cy} r={4} fill="#F0503D" />
                </g>
              ))}
            </svg>

            {/* Step labels — positioned to match dots */}
            {[
              { left: '0%',  top: '72%', align: 'left' },
              { left: '30%', top: '25%', align: 'left' },
              { left: '54%', top: '42%', align: 'left' },
              { left: '78%', top: '8%',  align: 'left' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.16 + i * 0.07)}
                className="absolute"
                style={{ left: pos.left, top: pos.top, transform: 'translate(-8px, 20px)' }}
              >
                {/* Ghost number */}
                <span className="absolute -top-20 -left-3 text-[110px] font-black text-foreground/[0.05] leading-none select-none pointer-events-none">
                  {i + 1}
                </span>
                <p className="text-sm font-bold text-foreground mb-1">
                  {t(`process.steps.${processSteps[i].key}.title`)}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed" style={{ maxWidth: '160px' }}>
                  {t(`process.steps.${processSteps[i].key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile — vertical timeline */}
          <div className="md:hidden flex flex-col gap-0">
            {processSteps.map(({ num, key }, i) => (
              <motion.div
                key={key}
                {...fadeUp(0.14 + i * 0.06)}
                className="flex gap-4 pb-8 relative"
              >
                {/* Dashed vertical line */}
                {i < processSteps.length - 1 && (
                  <div
                    className="absolute left-[17px] top-9 bottom-0 w-px"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(180deg, #F0503D 0, #F0503D 5px, transparent 5px, transparent 11px)',
                    }}
                  />
                )}
                <div className="w-9 h-9 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0 bg-background z-10">
                  <span className="text-[10px] font-bold text-orange-500">{num}</span>
                </div>
                <div className="pt-1">
                  <p className="text-sm font-bold text-foreground mb-1">
                    {t(`process.steps.${key}.title`)}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(`process.steps.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── MAIN GRID: Skills (left-wide) + Experience & Education (right) ── */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-14">

          {/* LEFT — Skills */}
          <motion.div {...fadeUp(0.15)}>
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                {t("skills.eyebrow")}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map(({ key, icon }, i) => (
                <motion.div
                  key={key}
                  {...fadeUp(0.18 + i * 0.06)}
                  className="group relative border border-border/70 rounded-2xl p-5 bg-card hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-lg text-orange-500 leading-none">{icon}</span>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground/50">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {t(`skills.${key}.title`)}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(`skills.${key}.items`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Experience + Education stacked */}
          <div className="flex flex-col gap-8">

            {/* Experience */}
            <motion.div {...fadeUp(0.2)}>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  {t("experience.eyebrow")}
                </span>
              </div>

              <div className="relative pl-5 border-l-2 border-orange-500/20">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-background" />

                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-base font-bold text-foreground">
                    {t("experience.role")}
                  </span>
                  <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded-full">
                    {t("experience.internship")}
                  </span>
                </div>

                <p className="text-sm font-semibold text-orange-500 mb-1">
                  {t("experience.company")}
                </p>

                <p className="text-xs text-muted-foreground mb-3">
                  {t("experience.period")} · {t("experience.duration")}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("experience.description")}
                </p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-border/60" />

            {/* Education */}
            <motion.div {...fadeUp(0.25)}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  {t("education.eyebrow")}
                </span>
              </div>

              <div className="relative pl-5 border-l-2 border-orange-500/20">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-orange-500/50 ring-4 ring-background" />

                <p className="text-base font-bold text-foreground mb-1">
                  {t("education.degree")}
                </p>
                <p className="text-sm font-semibold text-orange-500 mb-1">
                  {t("education.school")}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {t("education.period")}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-block text-xs font-semibold bg-card border border-border/70 text-foreground px-3 py-1 rounded-full">
                    {t("education.gpa")}
                  </span>
                  <span className="inline-block text-xs text-muted-foreground bg-card border border-border/70 px-3 py-1 rounded-full">
                    {t("education.note")}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}