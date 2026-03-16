'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectDetailDrawer from './ProjectDetailDrawer';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = useTranslations('project');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative"
      >
        <div
          onClick={() => project.detail && setDrawerOpen(true)}
          className={`relative border border-border/50 rounded-lg p-6 h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 bg-card ${project.detail ? 'cursor-pointer' : ''}`}
        >
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold flex-1 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-500 transition-colors shrink-0 ml-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-orange-500/30 text-orange-500 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Footer */}
            {project.detail && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-auto pt-3 border-t border-border/50 group-hover:text-orange-500 transition-colors">
                {t('viewDetails')}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {project.detail && (
        <ProjectDetailDrawer
          project={project}
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
        />
      )}
    </>
  );
}