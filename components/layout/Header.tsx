"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Github, Linkedin, Facebook } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "https://github.com/your-username", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/your-username", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/your-username", icon: Facebook, label: "Facebook" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">

          {/* LEFT — Social Icons */}
          <div className="flex items-center gap-0.5">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                <Icon className="w-[15px] h-[15px]" />
              </a>
            ))}
          </div>

          {/* CENTER — Navigation */}
          <Navigation />

          {/* RIGHT — Language Switcher */}
          <LanguageSwitcher />

        </div>
      </div>
    </header>
  );
}