'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';

interface ExperienceDetailHeroProps {
  experience: Experience;
}

export default function ExperienceDetailHero({ experience }: ExperienceDetailHeroProps) {
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as string;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => router.push(`/${locale}#about`)}
              className="group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to About
            </Button>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="w-16 h-16 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-orange-500" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {experience.title}
          </motion.h1>

          {/* Company & Period */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6"
          >
            <span className="text-lg font-medium">{experience.company}</span>
            <span>•</span>
            <span>{experience.period}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {experience.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}