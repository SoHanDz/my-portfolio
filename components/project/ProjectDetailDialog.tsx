'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink, Users, Code, TrendingUp,
  Lightbulb, Lock, X, ChevronLeft, ChevronRight, ZoomIn,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ── Lightbox — rendered via createPortal to document.body ──────────────────
interface LightboxProps {
  images: { url: string; alt: string; caption?: string }[];
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setCurrent(i => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrent(i => (i + 1) % images.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  const img = images[current];

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/92 backdrop-blur-sm p-4"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-sm font-medium transition-colors"
        style={{ zIndex: 100000 }}
      >
        <X className="w-4 h-4" />
        Close
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <p className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-white/50">
          {current + 1} / {images.length}
        </p>
      )}

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative max-w-5xl w-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full rounded-xl overflow-hidden">
          {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
            <Image
              src={getCloudinaryUrl(img.url, { width: IMAGE_SIZES.full })}
              alt={img.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[78vh]"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-white/5 rounded-xl">
              <p className="text-white/40 text-sm">{img.alt}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Caption */}
      {img.caption && (
        <p className="mt-3 text-xs text-white/50 text-center max-w-lg">{img.caption}</p>
      )}

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={e => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length); }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={e => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length); }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/30 w-1.5'}`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>,
    document.body
  );
}

// ── Main Dialog ─────────────────────────────────────────────────────────────
export default function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailDialogProps) {
  const t = useTranslations('project');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project.detail) return null;
  const { detail } = project;
  const images = detail.images ?? [];

  const handleOpenChange = (open: boolean) => {
    if (!open) setLightboxIndex(null);
    onOpenChange(open);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">

          {/* Sticky header */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-6 py-4">
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-xl md:text-2xl leading-snug mb-1">
                    {project.title}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Live link or Private badge */}
                <div className="shrink-0 pt-0.5">
                  {detail.liveUrl ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={detail.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        {t('live')}
                      </a>
                    </Button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border/60 px-3 py-1.5 rounded-full">
                      <Lock className="w-3 h-3" />
                      {t('private')}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </DialogHeader>
          </div>

          {/* Body */}
          <div className="px-6 py-6 space-y-8">

            {/* Overview */}
            <section>
              <h3 className="text-sm font-semibold mb-2">{t('projectOverview')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail.overview}</p>
              {(detail.myRole || detail.teamSize) && (
                <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-muted/40 rounded-xl border border-border/40">
                  {detail.myRole && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t('myRole')}</p>
                      <p className="text-sm font-medium">{detail.myRole}</p>
                    </div>
                  )}
                  {detail.teamSize && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t('teamSize')}</p>
                      <p className="text-sm font-medium flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {detail.teamSize}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </section>

            {/* Responsibilities */}
            <section>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-orange-500" />
                {t('keyResponsibilities')}
              </h3>
              <ul className="space-y-2">
                {detail.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-orange-500 mt-0.5 shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contributions */}
            <section>
              <h3 className="text-sm font-semibold mb-3">{t('myContributions')}</h3>
              <ul className="space-y-2">
                {detail.contributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-orange-500 mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Impact */}
            <section>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                {t('impactResults')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {detail.impact.map((item, i) => (
                  <div key={i} className="p-3 border border-border/60 rounded-xl bg-card hover:border-orange-500/40 transition-colors text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h3 className="text-sm font-semibold mb-3">{t('technologiesTools')}</h3>
              <div className="flex flex-wrap gap-2">
                {detail.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-muted border border-border/60 rounded-full text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenges */}
            {detail.challenges && (
              <section>
                <h3 className="text-sm font-semibold mb-2">{t('challengesSolutions')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.challenges}</p>
              </section>
            )}

            {/* Learnings */}
            {detail.learnings && detail.learnings.length > 0 && (
              <section>
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-orange-500" />
                  {t('keyLearnings')}
                </h3>
                <ul className="space-y-2">
                  {detail.learnings.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-orange-500 mt-0.5 shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Images grid + lightbox trigger */}
            {images.length > 0 && (
              <section>
                <h3 className="text-sm font-semibold mb-3">{t('projectVisuals')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {images.map((image, i) => (
                    <button
                      key={i}
                      className="group relative aspect-video rounded-xl overflow-hidden bg-muted border border-border/60 hover:border-orange-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                      onClick={() => setLightboxIndex(i)}
                    >
                      {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                        <Image
                          src={getCloudinaryUrl(image.url, { width: IMAGE_SIZES.card })}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-xs text-muted-foreground/50 px-2 text-center">{image.alt}</p>
                        </div>
                      )}
                      {/* Zoom overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                      {/* Caption */}
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-black/50 backdrop-blur-sm">
                          <p className="text-[10px] text-white/80 truncate">{image.caption}</p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox — portal ra ngoài mọi stacking context */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}