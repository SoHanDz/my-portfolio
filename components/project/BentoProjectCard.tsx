'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProjectDetailDrawer from './ProjectDetailDrawer';

interface BentoProjectCardProps {
  project: Project;
  index: number;
  size?: 'large' | 'medium' | 'small' | 'wide';
}

const sizeClasses = {
  large: 'md:col-span-2 md:row-span-2',
  wide: 'md:col-span-2 md:row-span-1',
  medium: 'md:col-span-1 md:row-span-2',
  small: 'md:col-span-1 md:row-span-1',
};

const heightClasses = {
  large: 'min-h-[420px]',
  wide: 'min-h-[200px]',
  medium: 'min-h-[420px]',
  small: 'min-h-[200px]',
};

export default function BentoProjectCard({
  project,
  index,
  size = 'small',
}: BentoProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = useTranslations('project');

  const isLarge = size === 'large' || size === 'medium';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className={`${sizeClasses[size]} relative`}
      >
        <div
          className={`relative w-full ${heightClasses[size]} rounded-2xl overflow-hidden cursor-pointer border border-border/60 bg-card`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => project.detail && setDrawerOpen(true)}
        >
          {/* Background pattern — subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Category pill — always visible */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/60 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border/50">
              {project.category}
            </span>
          </div>

          {/* Arrow — always visible */}
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              animate={{ rotate: hovered ? 0 : -45, scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center"
            >
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </motion.div>
          </div>

          {/* Default state — title at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <AnimatePresence>
              {!hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3
                    className={`font-bold text-foreground leading-snug ${
                      isLarge ? 'text-2xl' : 'text-base'
                    }`}
                  >
                    {project.title}
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute inset-0 z-20 flex flex-col justify-end p-5"
                style={{
                  background:
                    'linear-gradient(to top, hsl(var(--foreground) / 0.92) 0%, hsl(var(--foreground) / 0.7) 50%, hsl(var(--foreground) / 0.2) 100%)',
                }}
              >
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-3"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-orange-500/90 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-white leading-snug ${
                      isLarge ? 'text-2xl' : 'text-base'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* View details */}
                  {project.detail && (
                    <div className="flex items-center gap-1 text-xs font-medium text-orange-400">
                      {t('viewDetails')}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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