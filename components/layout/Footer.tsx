'use client';

import { useTranslations } from 'next-intl';
import { Mail, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap = {
  Mail,
  Github,
  Linkedin,
};

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer id="contact" className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Name */}
          <h3 className="text-2xl font-bold">Sơn Hà</h3>

          {/* Tagline */}
          <p className="text-muted-foreground">{t('tagline')}</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}