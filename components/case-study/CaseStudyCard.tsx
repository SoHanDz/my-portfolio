"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { CaseStudy } from "@/types";
import { getCloudinaryUrl, IMAGE_SIZES } from "@/lib/cloudinary";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({
  caseStudy,
  index,
}: CaseStudyCardProps) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const handleClick = () => {
    router.push(`/${locale}/case-studies/${caseStudy.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div onClick={handleClick} className="group cursor-pointer space-y-4">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
          {caseStudy.thumbnail &&
          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
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
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
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
