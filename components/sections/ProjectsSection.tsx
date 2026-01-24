'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectFilter from '@/components/project/ProjectFilter';

type FilterType = 'all' | 'client' | 'startup' | 'internship' | 'shipped';

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'shipped') return project.tags.includes('Shipped');
    return project.category === activeFilter;
  });

  return (
    <section id="work" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('title')}</h2>
          
          {/* Filter */}
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
}