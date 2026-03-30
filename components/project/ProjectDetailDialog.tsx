'use client';

import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Project } from '@/types';
import {
  ExternalLink, Lock, ChevronLeft, ChevronRight,
  Users, Wrench, TrendingUp, Lightbulb, Minimize2, Maximize2, Figma,
} from 'lucide-react';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MotionImage = motion(Image);

interface ProjectDetailDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailDialog({ project, open, onOpenChange }: ProjectDetailDialogProps) {
  const t = useTranslations('project');
  const [activeImg, setActiveImg] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const images = project.detail?.images ?? [];

  const prev = useCallback(() => setActiveImg(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActiveImg(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setExpanded(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expanded, prev, next]);

  if (!project.detail) return null;
  const { detail } = project;
  const currentImg = images[activeImg];

  const handleOpenChange = (val: boolean) => {
    if (!val) { setActiveImg(0); setExpanded(false); }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className={`p-0 overflow-y-auto max-h-[95vh] transition-all duration-300 ${expanded ? "!max-w-none !w-screen !h-screen !max-h-screen !rounded-none" : "!max-w-4xl w-[95vw]"}`}>
        <VisuallyHidden><DialogTitle>{project.title}</DialogTitle></VisuallyHidden>

        <AnimatePresence mode="wait">
          {expanded ? (
            /* ── EXPANDED: full-width image view ── */
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-screen bg-black flex items-center justify-center"
            >
              {/* Image — full space */}
              <AnimatePresence mode="wait">
                <MotionImage
                  key={activeImg}
                  src={getCloudinaryUrl(currentImg.url, { width: IMAGE_SIZES.full })}
                  alt={currentImg.alt}
                  fill
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="object-contain"
                />
              </AnimatePresence>

              {/* Minimize button */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 text-white text-xs font-medium transition-colors z-10"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                Thu nhỏ
              </button>

              {/* Counter */}
              {images.length > 1 && (
                <div className="absolute top-3 left-3 bg-black/50 text-white/80 text-xs px-2.5 py-1 rounded-full">
                  {activeImg + 1} / {images.length}
                </div>
              )}

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    onClick={e => { e.stopPropagation(); prev(); }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    onClick={e => { e.stopPropagation(); next(); }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dot strip */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setActiveImg(i)}
                        className={`h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-white w-4' : 'bg-white/40 w-1.5'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ) : (
            /* ── NORMAL: title + image + info ── */
            <motion.div
              key="normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-500 mb-1">
                    {project.category}
                  </p>
                  <h2 className="text-lg font-bold text-foreground leading-snug">{project.title}</h2>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Image viewer */}
              {images.length > 0 && (
                <div className="px-5">
                  <div
                    className="relative w-full rounded-xl overflow-hidden bg-muted cursor-pointer group"
                    style={{ aspectRatio: '16/9' }}
                    onClick={() => setExpanded(true)}
                  >
                    <AnimatePresence mode="wait">
                      <MotionImage
                        key={activeImg}
                        src={getCloudinaryUrl(currentImg.url, { width: IMAGE_SIZES.card })}
                        alt={currentImg.alt}
                        fill
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="object-cover"
                      />
                    </AnimatePresence>

                    {/* Expand hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs font-medium">
                        <Maximize2 className="w-3.5 h-3.5" /> Mở rộng
                      </div>
                    </div>

                    {/* Caption */}
                    {currentImg.caption && (
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/50 backdrop-blur-sm">
                        <p className="text-[10px] text-white/80">{currentImg.caption}</p>
                      </div>
                    )}

                    {/* Prev/Next */}
                    {images.length > 1 && (
                      <>
                        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
                          onClick={e => { e.stopPropagation(); prev(); }}>
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
                          onClick={e => { e.stopPropagation(); next(); }}>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute top-2 right-2 bg-black/40 text-white/80 text-[10px] px-2 py-0.5 rounded-full z-10">
                          {activeImg + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="flex gap-2 mt-2">
                      {images.map((img, i) => (
                        <button key={i} onClick={() => setActiveImg(i)}
                          className={`rounded-lg overflow-hidden shrink-0 transition-all duration-200 ${i === activeImg ? 'ring-2 ring-orange-500 opacity-100' : 'opacity-50 hover:opacity-80'}`}
                          style={{ width: 56, height: 36 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={getCloudinaryUrl(img.url, { width: 200 })} alt={img.alt} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Info */}
              <div className="px-5 pb-5 mt-4 space-y-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground">{tag}</span>
                  ))}
                  {detail.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{tech}</span>
                  ))}
                </div>

                {/* Meta */}
                {(detail.myRole || detail.teamSize) && (
                  <div className="flex flex-wrap gap-4 py-3 border-y border-border/40">
                    {detail.myRole && (
                      <div className="flex items-center gap-2">
                        <Wrench className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <div>
                          <p className="text-[10px] text-muted-foreground">{t('myRole')}</p>
                          <p className="text-xs font-semibold text-foreground">{detail.myRole}</p>
                        </div>
                      </div>
                    )}
                    {detail.teamSize && (
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <div>
                          <p className="text-[10px] text-muted-foreground">{t('teamSize')}</p>
                          <p className="text-xs font-semibold text-foreground">{detail.teamSize}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Figma link — nổi bật trước overview */}
                {detail.figmaUrl && (
                  <a
                    href={detail.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-border/60 hover:border-orange-500/60 hover:bg-orange-500/5 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F24E1E]/10 flex items-center justify-center shrink-0">
                        <Figma className="w-4 h-4 text-[#F24E1E]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">View Figma Design</p>
                        <p className="text-[10px] text-muted-foreground">Open design file in Figma</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-orange-500 transition-colors shrink-0" />
                  </a>
                )}

                {/* Overview */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">{t('projectOverview')}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail.overview}</p>
                </div>

                {/* Impact */}
                {detail.impact.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t('impactResults')}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {detail.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-orange-500 mt-0.5 shrink-0">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Learnings */}
                {detail.learnings && detail.learnings.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-3.5 h-3.5 text-orange-500" />
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t('keyLearnings')}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {detail.learnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-orange-500 mt-0.5 shrink-0">✦</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}