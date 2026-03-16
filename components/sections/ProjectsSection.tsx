'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '@/data/projects/index';
import BentoProjectCard from '@/components/project/BentoProjectCard';
import ProjectFilter from '@/components/project/ProjectFilter';

type FilterType = 'all' | 'client' | 'startup' | 'shipped';

// Bento pattern repeats every 6 cards:
// [large, small, small, wide, medium, small, ...]
const BENTO_PATTERN: Array<'large' | 'medium' | 'small' | 'wide'> = [
  'large',  // col-span-2 row-span-2
  'small',  // col-span-1 row-span-1
  'small',  // col-span-1 row-span-1
  'wide',   // col-span-2 row-span-1
  'medium', // col-span-1 row-span-2
  'small',  // col-span-1 row-span-1
];

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const projects = getProjects(locale);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            {t('eyebrow')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold">{t('title')}</h2>
            <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </motion.div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4"
          >
            {filteredProjects.map((project, index) => (
              <BentoProjectCard
                key={project.id}
                project={project}
                index={index}
                size={BENTO_PATTERN[index % BENTO_PATTERN.length]}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
}