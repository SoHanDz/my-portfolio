'use client';

import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const t = useTranslations('caseStudies');
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full"
    >
      <Link href={`/${locale}/case-studies/${caseStudy.slug}`}>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card hover:border-orange-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5">

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">

            {/* ── LEFT: Text content ── */}
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border border-orange-500/30 text-orange-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {caseStudy.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-semibold"
                >
                  {t('viewCaseStudy')}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.div>
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div className="relative overflow-hidden bg-muted min-h-[240px] md:min-h-0">
              {/* Subtle gradient overlay on left edge to blend with card */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />

              {caseStudy.coverImage && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                <Image
                  src={getCloudinaryUrl(caseStudy.coverImage, { width: IMAGE_SIZES.hero })}
                  alt={caseStudy.title}
                  fill
                  className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Placeholder khi chưa có ảnh */
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-2 opacity-20">
                    <div className="w-16 h-16 rounded-xl border-2 border-foreground mx-auto" />
                    <p className="text-xs font-mono">{caseStudy.title}</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}