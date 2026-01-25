'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CaseStudy } from '@/types';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const t = useTranslations('caseStudy');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('problem')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.problem}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('solution')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.solution}
            </p>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('impact')}</h2>
            <ul className="space-y-3">
              {caseStudy.impact.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-lg text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('technologies')}</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}