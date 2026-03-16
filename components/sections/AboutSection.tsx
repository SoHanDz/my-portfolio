'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useLocale } from 'next-intl';
import { getExperiences } from '@/data/experience/index';
import SkillCard from '@/components/about/SkillCard';
import ExperienceCard from '@/components/experience/ExperienceCard';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const experiences = getExperiences(locale);

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ── BIO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            {t('title')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 max-w-2xl leading-tight">
            {t('subtitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bio */}
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-base">
                {t('bio')}
              </p>
            </div>

            {/* Education */}
            <div className="bg-background rounded-xl p-5 border border-border h-fit">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-orange-500" />
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {t('education.title')}
                </p>
              </div>
              <h4 className="font-bold text-base mb-1">{t('education.degree')}</h4>
              <p className="text-sm text-muted-foreground">{t('education.university')}</p>
            </div>
          </div>
        </motion.div>

        {/* ── EXPERIENCE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-orange-500" />
            <h2 className="text-2xl font-bold">{t('experience.title')}</h2>
          </div>

          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                highlight={index === 0}
              />
            ))}
          </div>
        </motion.div>

        {/* ── SKILLS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            {t('skills.title')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}