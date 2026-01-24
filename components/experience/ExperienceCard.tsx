'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Title & Company */}
      <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
      <p className="text-muted-foreground mb-2">
        {experience.company} · {experience.period}
      </p>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* View Details Button - Optional */}
      {/* <Button variant="ghost" size="sm" className="px-0">
        View Details →
      </Button> */}
    </motion.div>
  );
}