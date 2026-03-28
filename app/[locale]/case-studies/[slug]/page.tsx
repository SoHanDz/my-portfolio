'use client';

import { use } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getCaseStudy } from '@/data/case-studies/index';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { notFound } from 'next/navigation';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
});

const MODULES_XTC = [
  'Dashboard',
  'Orders',
  'Inventory',
  'Products',
  'Staff',
  'Finance',
  'E-Invoice',
];

const PHASES_XTC = [
  { num: '01', labelKey: 'phase1Label', descKey: 'phase1Desc' },
  { num: '02', labelKey: 'phase2Label', descKey: 'phase2Desc' },
  { num: '03', labelKey: 'phase3Label', descKey: 'phase3Desc' },
];

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = use(params);
  const locale = useLocale();
  const t = useTranslations('caseStudyDetail');
  const caseStudy = getCaseStudy(slug, locale);

  if (!caseStudy) notFound();

  const hasCloudinary = !!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const isXTC = slug === 'xtc-warehouse';

  return (
    <main className="bg-background min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 right-0 text-[20vw] font-black text-foreground/[0.03] leading-none"
        >
          {caseStudy.title.split(' ')[0].toUpperCase()}
        </span>

        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Back */}
          <motion.div {...fadeUp(0)} className="mb-10">
            <Link
              href={`/${locale}/#case-studies`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t('back')}
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-500 border border-orange-500/30 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title + subtitle */}
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] mb-4">
            {caseStudy.title}
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12">
            {caseStudy.subtitle}
          </motion.p>

          {/* Meta row */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t('metaRole'), value: caseStudy.role },
              { label: t('metaDuration'), value: caseStudy.duration },
              { label: t('metaClient'), value: caseStudy.client ?? '—' },
              { label: t('metaTech'), value: caseStudy.technologies?.join(' · ') ?? '—' },
            ].map(({ label, value }) => (
              <div key={label} className="border border-border/60 rounded-xl p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1">{label}</p>
                <p className="text-xs font-semibold text-foreground leading-snug">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      {hasCloudinary && caseStudy.coverImage && (
        <motion.div {...fadeUp(0.25)} className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
          <div className="relative w-full rounded-2xl overflow-hidden bg-muted aspect-[16/7]">
            <Image
              src={getCloudinaryUrl(caseStudy.coverImage, { width: IMAGE_SIZES.hero })}
              alt={caseStudy.title}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}

      {/* ── STATS STRIP ── */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap gap-px border border-border/60 rounded-2xl overflow-hidden bg-border/60"
          >
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="flex-1 min-w-[120px] bg-background px-6 py-6 flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-black text-orange-500 tabular-nums">{m.value}</span>
                <span className="text-xs text-muted-foreground tracking-wide text-center">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </section>
      )}

      {/* ── PHASES (XTC specific) ── */}
      {isXTC && (
        <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-10">{t('phasesLabel')}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {PHASES_XTC.map(({ num, labelKey, descKey }, i) => (
                <motion.div
                  key={num}
                  {...fadeUp(0.08 + i * 0.07)}
                  className="relative border border-border/60 rounded-2xl p-6 bg-card hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className={`w-8 h-1 rounded-full mb-5 ${i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-orange-400' : 'bg-orange-300'}`} />
                  <span className="text-[10px] font-bold tracking-[0.14em] text-muted-foreground/40">{num}</span>
                  <p className="text-base font-bold text-foreground mt-2 mb-2">{t(labelKey)}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(descKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ── SITEMAP (XTC specific) ── */}
      {isXTC && (
        <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-8">{t('sitemapLabel')}</p>
            <div className="border border-border/60 rounded-2xl p-8 bg-card">
              <div className="flex flex-col items-center">
                <div className="px-5 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold mb-6">
                  {t('sitemapRoot')}
                </div>
                <div className="w-px h-6 bg-border/60" />
                <div className="relative w-full">
                  <div className="absolute top-0 left-[5%] right-[5%] h-px bg-border/60" />
                  <div className="grid grid-cols-4 md:grid-cols-7 gap-3 pt-6">
                    {MODULES_XTC.map((_, i) => (
                      <div key={i} className="flex flex-col items-center gap-0">
                        <div className="w-px h-4 bg-border/60" />
                        <div className="px-2 py-1.5 rounded-lg border border-border/60 bg-background text-[10px] font-semibold text-foreground text-center">
                          {t(`module${i + 1}`)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  {[t('userAdmin'), t('userStaff')].map((u) => (
                    <div key={u} className="px-3 py-1.5 rounded-full border border-orange-500/30 text-[10px] font-semibold text-orange-500">
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ── THE PROBLEM ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
        <motion.div {...fadeUp(0)} className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-3">{t('problemLabel')}</p>
            <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight whitespace-pre-line">
              {t('problemTitle')}
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-8">{caseStudy.problem}</p>
        </motion.div>
      </section>

      {/* ── DESIGN GALLERY ── */}
      {caseStudy.images.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-8">{t('galleryLabel')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.images.map((img, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.06 + i * 0.05)}
                  className={`relative rounded-2xl overflow-hidden bg-muted border border-border/60 ${i === 0 ? 'md:col-span-2' : ''}`}
                  style={{ aspectRatio: i === 0 ? '16/7' : '16/9' }}
                >
                  {hasCloudinary ? (
                    <Image
                      src={getCloudinaryUrl(img.url, { width: IMAGE_SIZES.card })}
                      alt={img.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-xs text-muted-foreground/40 font-mono">{img.alt}</p>
                    </div>
                  )}
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/50 backdrop-blur-sm">
                      <p className="text-[10px] text-white/80">{img.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ── SOLUTION ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
        <motion.div {...fadeUp(0)} className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-3">{t('solutionLabel')}</p>
            <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight whitespace-pre-line">
              {t('solutionTitle')}
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-8">{caseStudy.solution}</p>
        </motion.div>
      </section>

      {/* ── IMPACT ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
        <motion.div {...fadeUp(0)}>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-8">{t('impactLabel')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.impact.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.06 + i * 0.05)}
                className="flex items-start gap-3 border border-border/60 rounded-xl p-4 bg-card"
              >
                <span className="text-orange-500 shrink-0 mt-0.5">→</span>
                <p className="text-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 mb-32">
        <motion.div
          {...fadeUp(0)}
          className="border border-border/60 rounded-2xl p-8 md:p-10 bg-card"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-4">{t('reflectionLabel')}</p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            {t('reflectionText')}
          </p>
        </motion.div>
      </section>

    </main>
  );
}