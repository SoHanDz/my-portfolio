'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const params = useParams();
  const locale = params.locale as string;

  const handleClick = () => {
    window.location.href = `/${locale}/experience/${experience.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
          <Briefcase className="w-6 h-6 text-cyan-500" />
        </div>
      </div>

      {/* Title & Company */}
      <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-500 transition-colors">
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
          className="group/btn hover:bg-cyan-500/10 hover:text-cyan-500"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      )}
    </motion.div>
  );
}