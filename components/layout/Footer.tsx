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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = t('heading').split(' ');

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden border-t border-border bg-background">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">

          {/* Big heading */}
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm uppercase tracking-[0.2em] text-orange-500 font-medium mb-6"
            >
              {t('eyebrow')}
            </motion.p>
          </div>

          <h2 className="mb-12 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight flex flex-wrap gap-x-[0.22em]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-4 -mb-4">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1 + i * 0.07,
                  }}
                  className={`inline-block ${i === words.length - 1 ? 'text-orange-500' : 'text-foreground'}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="mailto:sonha@email.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-400 transition-colors duration-200"
            >
              {t('ctaContact')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`/${locale}/cv`}
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
              {t('ctaCV')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Divider + bottom row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">{t('copyright')}</p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-2 rounded-md text-muted-foreground hover:text-orange-500 hover:bg-orange-500/10 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}