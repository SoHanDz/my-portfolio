export const NAVIGATION_SECTIONS = [
  { id: 'home', labelKey: 'nav.home', href: '#home' },
  { id: 'about', labelKey: 'nav.about', href: '#about' },
  { id: 'case-studies', labelKey: 'nav.caseStudies', href: '#case-studies' },
  { id: 'work', labelKey: 'nav.work', href: '#work' },
  { id: 'contact', labelKey: 'nav.contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Email',
    url: 'sonhadaoquoc@email.com',
    icon: 'Mail',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/SoHanDz',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
] as const;