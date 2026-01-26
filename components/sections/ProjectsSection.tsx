'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { getProjects } from '@/data/projects/index';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectFilter from '@/components/project/ProjectFilter';

type FilterType = 'all' | 'client' | 'startup' | 'internship' | 'shipped';

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const projects = getProjects(locale);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'shipped') return project.tags.some(tag => 
      tag.toLowerCase().includes('shipped') || tag.toLowerCase().includes('hoàn thành')
    );
    return project.category === activeFilter;
  });

  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('title')}</h2>
          
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
}