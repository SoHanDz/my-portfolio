'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import ImageCarousel from '@/components/shared/ImageCarousel';

interface ExperienceDetailContentProps {
  experience: Experience;
}

const categoryLabels = {
  'social-media': 'Social Media Design',
  'web-design': 'Web Design',
  'branding': 'Brand Identity',
};

export default function ExperienceDetailContent({ experience }: ExperienceDetailContentProps) {
  if (!experience.detail) return null;

  const { detail } = experience;

  return (
    <>
      {/* Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {detail.overview}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Responsibilities</h2>
              <ul className="space-y-3">
                {detail.responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-orange-500 mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Projects & Work
            </motion.h2>

            <div className="space-y-20">
              {detail.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Project Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <Badge variant="outline" className="text-orange-500 border-orange-500/30">
                        {categoryLabels[project.category]}
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Image Carousel */}
                  {project.images && project.images.length > 0 && (
                    <ImageCarousel images={project.images} alt={project.title} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-orange-500" />
              Key Achievements
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detail.achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-border rounded-lg bg-card hover:border-orange-500/50 transition-colors"
                >
                  <p className="leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8"
            >
              Tools & Skills Used
            </motion.h2>

            <div className="flex flex-wrap gap-3">
              {detail.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-medium hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}