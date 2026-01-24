'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { experiences } from '@/data/experience';
import SkillCard from '@/components/about/SkillCard';
import ExperienceCard from '@/components/experience/ExperienceCard';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {t('title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* About Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('subtitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started as a frontend developer before transitioning into UI/UX design. 
                This background gives me a unique perspective - I design with technical 
                constraints in mind, create feasible component structures, and communicate 
                effectively with engineering teams. My focus is on building products that 
                are not just beautiful, but scalable and practical.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                {t('education.title')}
              </h3>
              <div className="border-l-2 border-border pl-6">
                <h4 className="text-xl font-bold mb-1">{t('education.degree')}</h4>
                <p className="text-muted-foreground">{t('education.university')}</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {t('skills.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}