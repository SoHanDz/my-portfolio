'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { CaseStudy } from '@/types';
import { getCloudinaryUrl, IMAGE_SIZES } from '@/lib/cloudinary';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const handleClick = () => {
    window.location.href = `/${locale}/case-studies/${caseStudy.slug}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        onClick={handleClick}
        className="group cursor-pointer space-y-4 relative"
      >
        {/* Image Container with Hover Effect */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted border border-border transition-all duration-300 group-hover:border-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          {/* Image */}
          {caseStudy.thumbnail && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
            <Image
              src={getCloudinaryUrl(caseStudy.thumbnail, {
                width: IMAGE_SIZES.card,
              })}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm">No image</p>
                <p className="text-xs mt-1">Upload to Cloudinary</p>
              </div>
            </div>
          )}

          {/* Arrow Button - Top Right Corner */}
          <div className="absolute top-4 right-4 z-20">
            <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-foreground transition-colors group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="border-cyan-500/30 text-cyan-500 group-hover:bg-cyan-500/10"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold group-hover:text-cyan-500 transition-colors">
          {caseStudy.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-2">
          {caseStudy.description}
        </p>
      </div>
    </motion.div>
  );
}