'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from '@/lib/i18n/routing';
import { CaseStudy } from '@/types';
import { Button } from '@/components/ui/button';

interface CaseStudyNavigationProps {
  nextProject: CaseStudy | null;
  prevProject: CaseStudy | null;
  locale: string;
}

export default function CaseStudyNavigation({
  nextProject,
  prevProject,
  locale,
}: CaseStudyNavigationProps) {
  const t = useTranslations('caseStudy');
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/case-studies/${slug}` as any);
  };

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Project */}
            {prevProject && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  onClick={() => handleNavigation(prevProject.slug)}
                  className="w-full h-auto p-6 flex flex-col items-start text-left group"
                >
                  <span className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    {t('previousProject')}
                  </span>
                  <span className="text-lg font-semibold group-hover:text-cyan-500 transition-colors">
                    {prevProject.title}
                  </span>
                </Button>
              </motion.div>
            )}

            {/* Next Project */}
            {nextProject && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={!prevProject ? 'md:col-start-2' : ''}
              >
                <Button
                  variant="outline"
                  onClick={() => handleNavigation(nextProject.slug)}
                  className="w-full h-auto p-6 flex flex-col items-end text-right group"
                >
                  <span className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    {t('nextProject')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-lg font-semibold group-hover:text-cyan-500 transition-colors">
                    {nextProject.title}
                  </span>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Back to Case Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Button 
              variant="ghost"
              onClick={() => {
                window.location.href = `/${locale}#case-studies`;
              }}
            >
              ← Back to Case Studies
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}