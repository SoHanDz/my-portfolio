'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '@/data/projects/index';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectFilter from '@/components/project/ProjectFilter';

type FilterType = 'all' | 'client' | 'startup';

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const projects = getProjects(locale);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  // Split into 2 columns for masonry
  const leftCol = filteredProjects.filter((_, i) => i % 2 === 0);
  const rightCol = filteredProjects.filter((_, i) => i % 2 === 1);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-background overflow-hidden">

      {/* Decorative background text — same style as About */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-0 text-[18vw] font-black text-foreground/[0.03] leading-none select-none"
      >
        WORK
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-4">
            {t('eyebrow')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              {t('title')}
            </h2>
            <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-sm">No projects found</p>
              </div>
            ) : (
              <>
                {/* Desktop: 2-column masonry */}
                <div className="hidden md:grid md:grid-cols-2 gap-4 items-start">
                  {/* Left column */}
                  <div>
                    {leftCol.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={i * 2}
                      />
                    ))}
                  </div>
                  {/* Right column — offset slightly */}
                  <div className="mt-10">
                    {rightCol.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={i * 2 + 1}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile: single column */}
                <div className="md:hidden">
                  {filteredProjects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}