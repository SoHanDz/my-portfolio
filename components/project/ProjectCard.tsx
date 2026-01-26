'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Info, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import ProjectDetailDialog from './ProjectDetailDialog';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [detailOpen, setDetailOpen] = useState(false);
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
        <div className="relative border border-border rounded-lg p-6 h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
          {/* Gradient Border on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold transition-colors flex-1 group-hover:text-cyan-500">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-500"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* View Details Button */}
            {project.detail && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDetailOpen(true)}
                className="w-full mt-auto group/btn hover:bg-cyan-500/10 hover:text-cyan-500 border border-transparent hover:border-cyan-500/30"
              >
                <Info className="w-4 h-4 mr-2" />
                {t('viewDetails')}
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Detail Dialog */}
      {project.detail && (
        <ProjectDetailDialog
          project={project}
          open={detailOpen}
          onOpenChange={setDetailOpen}
        />
      )}
    </>
  );
}