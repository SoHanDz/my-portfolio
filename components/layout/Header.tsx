"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/your-username", // TODO: thay link thật
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/your-username", // TODO: thay link thật
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://facebook.com/your-username", // TODO: thay link thật
    icon: Facebook,
    label: "Facebook",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LEFT — Social Icons */}
          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* CENTER — Navigation */}
          <Navigation />

          {/* RIGHT — Language Switcher + CV Button */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <Button
              size="sm"
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 gap-1.5"
            >
              <a
                href="https://drive.google.com/file/d/1ivLmhSK3UiGpohJ6udCAvhPjVvQcau01/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewCV")}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
}