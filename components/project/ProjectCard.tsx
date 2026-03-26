'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Project } from '@/types';
import ProjectDetailDialog from './ProjectDetailDialog';
import Image from 'next/image';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const t = useTranslations('project');
  const thumbnail = project.thumbnail;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
        className="break-inside-avoid mb-4"
      >
        <div
          className="relative rounded-2xl overflow-hidden border border-border/60 bg-card cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => project.detail && setDialogOpen(true)}
        >
          {/* Image area */}
          <div className="relative w-full bg-muted overflow-hidden aspect-[16/9]">
            {thumbnail && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
              <Image
                src={getCloudinaryUrl(thumbnail, { width: IMAGE_SIZES.card })}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            )}

            {/* Arrow */}
            <div className="absolute top-3 right-3 z-10">
              <motion.div
                animate={{ rotate: hovered ? 0 : -45, scale: hovered ? 1.1 : 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
              </motion.div>
            </div>

            {/* Category pill */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/70 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border/40">
                {project.category}
              </span>
            </div>

            {/* Hover overlay */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 z-20 flex items-end p-3"
                  style={{
                    background: 'linear-gradient(to top, hsl(var(--foreground) / 0.85) 0%, transparent 60%)',
                  }}
                >
                  <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex flex-wrap gap-1.5"
                  >
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-orange-500 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="px-4 py-3 border-t border-border/40">
            <h3 className="text-sm font-semibold text-foreground leading-snug">
              {project.title}
            </h3>
            {project.detail && (
              <motion.p
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-orange-500 font-medium mt-1 flex items-center gap-1"
              >
                {t('viewDetails')}
                <ArrowUpRight className="w-3 h-3" />
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {project.detail && (
        <ProjectDetailDialog
          project={project}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </>
  );
}