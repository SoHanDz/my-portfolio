'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CaseStudy } from '@/types';

interface CaseStudyMetricsProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyMetrics({ caseStudy }: CaseStudyMetricsProps) {
  const t = useTranslations('caseStudy');

  if (!caseStudy.metrics || caseStudy.metrics.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t('metrics')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 border border-border rounded-lg bg-card hover:border-orange-500/50 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}