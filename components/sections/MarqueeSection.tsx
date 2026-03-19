'use client';

import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import { IMAGES } from '@/constants/images';

export default function MarqueeSection() {
  const controls = useAnimationControls();
  const images = IMAGES.marquee;
  const items = [...images, ...images];

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { duration: 40, ease: 'linear', repeat: Infinity },
    });
  }, [controls]);

  const handleHoverStart = () => controls.stop();

  const handleHoverEnd = () => {
    controls.start({
      x: [null, '-50%'],
      transition: { duration: 40, ease: 'linear', repeat: Infinity },
    });
  };

  return (
    <section className="relative w-full overflow-hidden py-8 bg-background">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-3 md:gap-4 w-max"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {items.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative h-36 w-56 md:h-44 md:w-72 shrink-0 rounded-2xl overflow-hidden border border-border/60 bg-muted cursor-pointer"
          >
            {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
              <Image
                src={getCloudinaryUrl(src, { width: 576 })}
                alt={`UI screenshot ${(i % images.length) + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 224px, 288px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-xs text-muted-foreground/40 font-mono">{src}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}