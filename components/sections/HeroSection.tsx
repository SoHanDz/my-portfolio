"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default function HeroSection() {
  const t = useTranslations("hero");

  const handleScrollToCaseStudies = () => {
    const element = document.getElementById("case-studies");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-background"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div className="relative w-28 h-28 rounded-full ring-2 ring-orange-500/40 ring-offset-2 ring-offset-background overflow-hidden">
            <Image
              src={
                IMAGES.avatar.startsWith('/')
                  ? IMAGES.avatar
                  : getCloudinaryUrl(IMAGES.avatar, { width: 224, format: 'auto', quality: 'auto' })
              }
              alt="Son Ha"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Badge — emoji + plain text, không có border */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base text-muted-foreground mb-5 flex items-center gap-1.5"
        >
          👋 {t("badge")}
        </motion.p>

        {/* Heading với inline highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground !leading-[1.3] mb-6"
        >
          {t.rich("title", {
            highlight: (chunks) => (
              <span
                className="bg-orange-400/25 rounded-sm px-2"
                style={{ boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
              >
                {chunks}
              </span>
            ),
          })}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10 max-w-md"
        >
          {t("description")}
        </motion.p>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={handleScrollToCaseStudies}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full gap-2"
          >
            {t("cta")}
            <ArrowDown className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/25 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-muted-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}