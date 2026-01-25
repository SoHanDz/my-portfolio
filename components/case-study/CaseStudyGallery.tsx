'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CaseStudy } from '@/types';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';

interface CaseStudyGalleryProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyGallery({ caseStudy }: CaseStudyGalleryProps) {
  const t = useTranslations('caseStudy');

  if (!caseStudy.images || caseStudy.images.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12"
          >
            {t('gallery')}
          </motion.h2>

          <div className="space-y-12">
            {caseStudy.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                  {image.url && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                    <Image
                      src={getCloudinaryUrl(image.url, {
                        width: IMAGE_SIZES.full,
                      })}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-muted-foreground">{image.alt}</p>
                        <p className="text-sm text-muted-foreground/60 mt-2">
                          Image placeholder
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Caption */}
                {image.caption && (
                  <p className="text-sm text-muted-foreground text-center">
                    {image.caption}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}