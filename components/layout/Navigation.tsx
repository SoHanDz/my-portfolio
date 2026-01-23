'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION_SECTIONS } from '@/lib/constants';

export default function Navigation() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_SECTIONS.map((nav) => nav.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {NAVIGATION_SECTIONS.map((nav) => (
          <a  // <--- THÊM THẺ MỞ Ở ĐÂY
            key={nav.id}
            href={nav.href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(nav.href);
            }}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              activeSection === nav.id
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            {t(nav.labelKey)}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {NAVIGATION_SECTIONS.map((nav) => (
              <a  // <--- THÊM THẺ MỞ Ở ĐÂY
                key={nav.id}
                href={nav.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(nav.href);
                }}
                className={cn(
                  'text-base font-medium transition-colors hover:text-primary py-2',
                  activeSection === nav.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {t(nav.labelKey)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}