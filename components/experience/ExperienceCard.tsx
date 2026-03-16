'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  highlight?: boolean;
}

export default function ExperienceCard({ experience, index, highlight = false }: ExperienceCardProps) {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('experience');

  const handleClick = () => {
    window.location.href = `/${locale}/experience/${experience.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative border rounded-lg p-6 transition-all duration-300 group',
        highlight
          ? 'border-orange-500/40 bg-orange-500/5 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10'
          : 'border-border hover:border-orange-500/50'
      )}
    >
      {/* Latest badge */}
      {highlight && (
        <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-orange-500/15 text-orange-500 border border-orange-500/20">
          Latest
        </span>
      )}

      {/* Icon */}
      <div className="mb-4">
        <div className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors',
          highlight ? 'bg-orange-500/15' : 'bg-orange-500/10'
        )}>
          <Briefcase className="w-6 h-6 text-orange-500" />
        </div>
      </div>

      {/* Title & Company */}
      <h3 className="text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
        {experience.title}
      </h3>
      <p className="text-muted-foreground mb-2">
        {experience.company} · {experience.period}
      </p>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* View Details Button */}
      {experience.detail && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClick}
          className="group/btn hover:bg-orange-500/10 hover:text-orange-500"
        >
          {t('viewDetails')}
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      )}
    </motion.div>
  );
}