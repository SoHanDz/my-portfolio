'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import { Palette, Code, Database, Sparkles } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const iconMap = {
  design: Palette,
  frontend: Code,
  system: Database,
  ai: Sparkles,
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.icon as keyof typeof iconMap] || Code;

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
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3">{skill.title}</h3>

      {/* Items */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {skill.items}
      </p>
    </motion.div>
  );
}