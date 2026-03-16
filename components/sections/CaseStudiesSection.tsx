'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { getCaseStudies } from '@/data/case-studies/index';
import CaseStudyCard from '@/components/case-study/CaseStudyCard';

export default function CaseStudiesSection() {
  const t = useTranslations('caseStudies');
  const locale = useLocale();
  const caseStudies = getCaseStudies(locale);

  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">{t('title')}</h2>
        </motion.div>

        {/* Cards — stacked full width */}
        <div className="space-y-6">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}