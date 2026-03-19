'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap = { Mail, Github, Linkedin };

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-background">

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-orange-500/[0.06] blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-6"
        >
          {t('eyebrow')}
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground max-w-3xl mb-5"
        >
          {t('heading')}
        </motion.h2>

        {/* Subtext — lời cảm ơn thật sự */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mb-12"
        >
          {t('subtext')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-3 mb-20"
        >
          <a
            href="mailto:sonha@email.com"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition-colors duration-200"
          >
            {t('ctaContact')}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`/${locale}/cv`}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-full hover:border-orange-500/60 hover:text-orange-500 transition-colors duration-200"
          >
            {t('ctaCV')}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-border/50"
        >
          <p className="text-xs text-muted-foreground/60">{t('copyright')}</p>

          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 rounded-lg text-muted-foreground/50 hover:text-orange-500 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}