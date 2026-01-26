'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, Code, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { useTranslations } from 'next-intl';

interface ProjectDetailDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: ProjectDetailDialogProps) {
  if (!project.detail) return null;

  const t = useTranslations('project');
  const { detail } = project;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl mb-2">
                {project.title}
              </DialogTitle>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            {detail.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="shrink-0"
              >
                <a href={detail.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </a>
              </Button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-6">
          {/* Overview */}
          <section>
            <h3 className="text-xl font-bold mb-3">{t('projectOverview')}</h3>
            <p className="text-muted-foreground leading-relaxed">{detail.overview}</p>
            
            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-muted/30 rounded-lg">
              {detail.myRole && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('myRole')}</p>
                  <p className="font-medium">{detail.myRole}</p>
                </div>
              )}
              {detail.teamSize && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('teamSize')}</p>
                  <p className="font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {detail.teamSize}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Responsibilities */}
          <section>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              {t('keyResponsibilities')}
            </h3>
            <ul className="space-y-2">
              {detail.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contributions */}
          <section>
            <h3 className="text-xl font-bold mb-3">{t('myContributions')}</h3>
            <ul className="space-y-2">
              {detail.contributions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              {t('impactResults')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {detail.impact.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-border rounded-lg bg-card hover:border-cyan-500/50 transition-colors"
                >
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-xl font-bold mb-3">{t('technologiesTools')}</h3>
            <div className="flex flex-wrap gap-2">
              {detail.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted border border-border rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          {detail.challenges && (
            <section>
              <h3 className="text-xl font-bold mb-3">{t('challengesSolutions')}</h3>
              <p className="text-muted-foreground leading-relaxed">{detail.challenges}</p>
            </section>
          )}

          {/* Learnings */}
          {detail.learnings && detail.learnings.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                {t('keyLearnings')}
              </h3>
              <ul className="space-y-2">
                {detail.learnings.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">💡</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Images */}
          {detail.images && detail.images.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-4">{t('projectVisuals')}</h3>
              <div className="space-y-4">
                {detail.images.map((image, index) => (
                  <div key={index} className="space-y-2">
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
                          <p className="text-muted-foreground">{image.alt}</p>
                        </div>
                      )}
                    </div>
                    {image.caption && (
                      <p className="text-sm text-muted-foreground text-center">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}