export const NAVIGATION_SECTIONS = [
  { id: 'home', labelKey: 'nav.home', href: '#home' },
  { id: 'case-studies', labelKey: 'nav.caseStudies', href: '#case-studies' },
  { id: 'work', labelKey: 'nav.work', href: '#work' },
  { id: 'about', labelKey: 'nav.about', href: '#about' },
  { id: 'contact', labelKey: 'nav.contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: 'Mail',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
] as const;