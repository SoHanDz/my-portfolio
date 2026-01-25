'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CaseStudy } from '@/types';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { Badge } from '@/components/ui/badge';

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {caseStudy.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {caseStudy.subtitle}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-1">Role</p>
              <p className="font-medium">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Client</p>
              <p className="font-medium">{caseStudy.client}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Duration</p>
              <p className="font-medium">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Year</p>
              <p className="font-medium">{caseStudy.year}</p>
            </div>
          </motion.div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted"
          >
            {caseStudy.coverImage && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
              <Image
                src={getCloudinaryUrl(caseStudy.coverImage, {
                  width: IMAGE_SIZES.hero,
                })}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground">Cover Image</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">
                    {caseStudy.title}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}