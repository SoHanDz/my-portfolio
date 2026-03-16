'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, Code, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { useTranslations } from 'next-intl';

interface ProjectDetailDrawerProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailDrawer({
  project,
  open,
  onOpenChange,
}: ProjectDetailDrawerProps) {
  const t = useTranslations('project');

  if (!project.detail) return null;
  const { detail } = project;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl overflow-y-auto p-0"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-6 py-4">
          <SheetHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <SheetTitle className="text-2xl mb-1">{project.title}</SheetTitle>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              {detail.liveUrl && (
                <Button variant="outline" size="sm" asChild className="shrink-0">
                  <a href={detail.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    {t('live')}
                  </a>
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </SheetHeader>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-8">

          {/* Overview + Meta */}
          <section>
            <h3 className="text-base font-semibold mb-2">{t('projectOverview')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{detail.overview}</p>

            <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-muted/40 rounded-lg">
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
                    <Users className="w-3.5 h-3.5" />
                    {detail.teamSize}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Responsibilities */}
          <section>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {t('keyResponsibilities')}
            </h3>
            <ul className="space-y-1.5">
              {detail.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-orange-500 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Contributions */}
          <section>
            <h3 className="text-base font-semibold mb-2">{t('myContributions')}</h3>
            <ul className="space-y-1.5">
              {detail.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section>
            <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t('impactResults')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.impact.map((item, i) => (
                <div
                  key={i}
                  className="p-3 border border-border rounded-lg bg-card hover:border-orange-500/50 transition-colors text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-base font-semibold mb-3">{t('technologiesTools')}</h3>
            <div className="flex flex-wrap gap-2">
              {detail.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-muted border border-border rounded-md text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          {detail.challenges && (
            <section>
              <h3 className="text-base font-semibold mb-2">{t('challengesSolutions')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail.challenges}</p>
            </section>
          )}

          {/* Learnings */}
          {detail.learnings && detail.learnings.length > 0 && (
            <section>
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                {t('keyLearnings')}
              </h3>
              <ul className="space-y-1.5">
                {detail.learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-orange-500 mt-0.5">💡</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Images */}
          {detail.images && detail.images.length > 0 && (
            <section>
              <h3 className="text-base font-semibold mb-3">{t('projectVisuals')}</h3>
              <div className="space-y-4">
                {detail.images.map((image, i) => (
                  <div key={i} className="space-y-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                      {image.url && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                        <Image
                          src={getCloudinaryUrl(image.url, { width: IMAGE_SIZES.card })}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-sm text-muted-foreground">{image.alt}</p>
                        </div>
                      )}
                    </div>
                    {image.caption && (
                      <p className="text-xs text-muted-foreground text-center">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}