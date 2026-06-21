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
  { top: "12%", left: "-16%" },
  { top: "38%", right: "-18%" },
  { top: "62%", left: "-20%" },
  { top: "82%", right: "-16%" },
];

const roles = ["Web Developer", "UI/UX Designer"];

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
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Intro line */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="text-base md:text-lg text-muted-foreground mb-3"
            >
              {t("badge")}
            </motion.p>

            {/* Roles — stacked large */}
            <div className="mb-8">
              {roles.map((role, i) => (
                <motion.h1
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.24 + i * 0.12, ease: "easeOut" }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-foreground"
                >
                  {i === 1 ? (
                    <span className="text-orange-500">{role}</span>
                  ) : (
                    role
                  )}
                </motion.h1>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-md"
            >
              {t("description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.58 }}
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
              transition={{ duration: 0.4, delay: 0.66 }}
              className="flex gap-8"
            >
              {[
                { num: "7+", label: "Projects" },
                { num: "4+", label: "Clients"  },
                { num: "3.7", label: "GPA"     },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-black text-foreground tabular-nums">{num}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Avatar with floating tags ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[390px]">
              {/* Avatar card */}
              <div className="absolute inset-0 rounded-3xl border border-orange-500/20 bg-card overflow-hidden">
                <Image
                  src={
                    IMAGES.avatar.startsWith("/")
                      ? IMAGES.avatar
                      : getCloudinaryUrl(IMAGES.avatar, { width: 640, format: "auto", quality: "auto" })
                  }
                  alt="Son Ha"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating skill tags */}
              {floatingTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="absolute text-xs font-semibold px-3 py-1.5 rounded-full bg-background border border-border/80 text-foreground shadow-md whitespace-nowrap"
                  style={tagPositions[i]}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
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