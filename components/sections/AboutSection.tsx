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

// Skills data với tags riêng thay vì string
const skillsData = [
  {
    key: "design",
    icon: "✦",
    title: "Design",
    tags: ["Figma", "UX Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    key: "frontend",
    icon: "⌥",
    title: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "Component Libraries"],
  },
  {
    key: "ai",
    icon: "⚡",
    title: "AI & Modern Tools",
    tags: ["Cursor", "v0", "Claude", "Midjourney", "Prompt Engineering"],
  },
  {
    key: "creative",
    icon: "◈",
    title: "Creative Tools",
    tags: ["Illustrator", "Photoshop", "Premiere Pro"],
  },
  {
    key: "softSkills",
    icon: "◎",
    title: "Soft Skills",
    tags: ["Adaptable", "Self-learner", "Team player", "English B2", "Time management", "Presentation"],
  },
] as const;

const processSteps = [
  { num: "01", key: "discover" },
  { num: "02", key: "research" },
  { num: "03", key: "design" },
  { num: "04", key: "deliver" },
] as const;

export default function AboutSection() {
  const t = useTranslations("about");

  const stats = [
    { value: "7+", label: t("stats.projects") },
    { value: "4+", label: t("stats.clients") },
    { value: "3.7", label: t("stats.gpa") },
  ];

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
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-12 leading-tight">
            {t("process.title")} <span className="text-orange-500">{t("process.titleAccent")}</span>
          </h3>

          {(() => {
            const steps = [
              { num: "1", title: "Discover",   tag: "UI/UX",    desc: "Interview the client directly to understand how they actually think about their product." },
              { num: "2", title: "Research",   tag: "UI/UX",    desc: "Study competitors and references — picking what actually works, not just what looks good." },
              { num: "3", title: "Design",     tag: "UI/UX",    desc: "Brief client on direction first, then build all screens consistently with handoff in mind." },
              { num: "4", title: "Build",      tag: "Frontend", desc: "Develop features iteratively — pixel-perfect to design specs, mobile-first always." },
              { num: "5", title: "Ship",       tag: "Frontend", desc: "Deploy and hand off polished files or working prototype — whichever gets the team shipping fastest." },
            ];

            return (
              <>
                {/* Desktop horizontal */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute top-[52px] left-0 right-0 h-px bg-border/60" />
                    <div className="grid grid-cols-5 gap-2">
                      {steps.map((step, i) => {
                        const isAbove = i % 2 === 0;
                        return (
                          <div key={step.num} className="flex flex-col items-center">
                            <div className={`h-[100px] flex flex-col justify-end pb-3 text-center ${isAbove ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                              <span className={`text-[9px] font-bold tracking-widest uppercase mb-1 ${step.tag === "UI/UX" ? "text-orange-500" : "text-blue-400"}`}>{step.tag}</span>
                              <p className="text-xs font-bold text-foreground mb-1">{step.title}</p>
                              <p className="text-[10px] text-muted-foreground leading-relaxed px-1">{step.desc}</p>
                            </div>
                            <div className={`relative z-10 w-[42px] h-[42px] rounded-full flex items-center justify-center border-2 font-black text-sm shrink-0 transition-colors
                              ${step.tag === "UI/UX"
                                ? "bg-orange-500/10 border-orange-500/60 text-orange-500"
                                : "bg-blue-400/10 border-blue-400/60 text-blue-400"
                              }`}
                            >
                              {step.num}
                            </div>
                            <div className={`h-[100px] flex flex-col justify-start pt-3 text-center ${!isAbove ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                              <span className={`text-[9px] font-bold tracking-widest uppercase mb-1 ${step.tag === "UI/UX" ? "text-orange-500" : "text-blue-400"}`}>{step.tag}</span>
                              <p className="text-xs font-bold text-foreground mb-1">{step.title}</p>
                              <p className="text-[10px] text-muted-foreground leading-relaxed px-1">{step.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Legend */}
                  <div className="flex items-center gap-6 mt-8 justify-center">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />UI/UX Design</span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />Frontend Dev</span>
                  </div>
                </div>

                {/* Mobile vertical */}
                <div className="md:hidden flex flex-col gap-0">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-4 pb-7 relative">
                      {i < steps.length - 1 && (
                        <div className="absolute left-[17px] top-9 bottom-0 w-px bg-border/50" />
                      )}
                      <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 font-bold text-xs z-10
                        ${step.tag === "UI/UX" ? "bg-orange-500/10 border-orange-500/60 text-orange-500" : "bg-blue-400/10 border-blue-400/60 text-blue-400"}`}
                      >
                        {step.num}
                      </div>
                      <div className="pt-1">
                        <span className={`text-[9px] font-bold tracking-widest uppercase ${step.tag === "UI/UX" ? "text-orange-500" : "text-blue-400"}`}>{step.tag}</span>
                        <p className="text-sm font-bold text-foreground mb-1">{step.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </motion.div>

        {/* ── SKILLS — full width ── */}
        <motion.div {...fadeUp(0.15)} className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              {t("skills.eyebrow")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map(({ key, icon, title, tags }, i) => (
              <motion.div
                key={key}
                {...fadeUp(0.18 + i * 0.06)}
                className="group border border-border/70 rounded-2xl p-5 bg-card hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base text-orange-500 leading-none">{icon}</span>
                  <p className="text-base font-bold text-foreground">{title}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border/70 bg-background text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── JOURNEY — full width ── */}
        <motion.div {...fadeUp(0.2)}>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              {t("journey.eyebrow")}
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-orange-500/20" />

            <div className="flex flex-col gap-6">
              {[
                {
                  key: "experience",
                  icon: <Briefcase className="w-4 h-4 text-orange-500" />,
                  year: t("journey.experience.year"),
                  title: t("journey.experience.role"),
                  sub: t("journey.experience.company"),
                  desc: t("journey.experience.description"),
                },
                {
                  key: "education",
                  icon: <GraduationCap className="w-4 h-4 text-orange-500" />,
                  year: t("journey.education.year"),
                  title: t("journey.education.degree"),
                  sub: t("journey.education.school"),
                  desc: t("journey.education.note"),
                },
              ].map((item, i) => (
                <motion.div
                  key={item.key}
                  {...fadeUp(0.22 + i * 0.08)}
                  className="flex gap-5"
                >
                  <div className="relative z-10 w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 border border-border/70 rounded-2xl p-5 bg-card hover:border-orange-500/40 transition-colors duration-300" style={{ borderTopColor: 'rgb(249 115 22 / 0.5)' }}>
                    <p className="text-xs text-muted-foreground mb-1 tabular-nums">{item.year}</p>
                    <p className="text-base font-bold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-orange-500 mb-3">{item.sub}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}