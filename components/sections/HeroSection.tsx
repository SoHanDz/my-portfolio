"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const floatingTags = ["UI/UX", "React", "Figma", "Next.js"];
const tagPositions = [
  { top: "18%",  left: "-14%"  },
  { top: "42%",  right: "-16%" },
  { top: "68%",  left: "-18%" },
  { top: "80%",  right: "-14%" },
];

export default function HeroSection() {
  const t = useTranslations("hero");

  const handleScrollToCaseStudies = () => {
    const element = document.getElementById("case-studies");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── LEFT: Avatar with floating tags ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Avatar card */}
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[390px]">
              {/* Decorative border frame */}
              <div className="absolute inset-0 rounded-3xl border border-orange-500/20 bg-card overflow-hidden">
                <Image
                  src={
                    IMAGES.avatar.startsWith('/')
                      ? IMAGES.avatar
                      : getCloudinaryUrl(IMAGES.avatar, { width: 640, format: 'auto', quality: 'auto' })
                  }
                  alt="Son Ha"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating skill tags */}
              {floatingTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="absolute text-xs font-semibold px-3 py-1.5 rounded-full bg-background border border-border/80 text-foreground shadow-md whitespace-nowrap"
                  style={tagPositions[i]}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <div className="flex flex-col">

            {/* "Open to opportunities" badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-3"
            >
              {t("badge")} <span className="text-orange-500"></span>
            </motion.h1>

            {/* Subtitle / role */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="text-lg md:text-xl font-semibold text-foreground/70 mb-5"
            >
              UI/UX Designer · Developer Mindset
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm"
            >
              {t("description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.44 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                size="lg"
                onClick={handleScrollToCaseStudies}
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 rounded-full gap-2"
              >
                {t("cta")}
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleScrollToAbout}
                className="px-7 rounded-full border-border/70 text-foreground hover:border-orange-500/50"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.54 }}
              className="flex gap-8"
            >
              {[
                { num: "01", label: "Projects" },
                { num: "02", label: "Skills"   },
                { num: "03", label: "About"    },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-xl font-black text-foreground tabular-nums">{num}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll to explore</span>
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