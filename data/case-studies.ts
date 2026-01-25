import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'invoiceai-saas-redesign',
    title: 'InvoiceAI - SaaS Redesign',
    subtitle: 'From Logistics to Fintech Compliance',
    description: 'Redesigning a warehouse system into a modern SaaS e-invoicing platform for Vietnam\'s digital compliance regulations',
    thumbnail: 'case-studies/invoiceai-thumb',
    coverImage: 'case-studies/invoiceai-hero',
    tags: ['Client', 'Web App', 'UX-heavy', 'Redesign'],
    year: '2024 - Present',
    client: 'Confidential',
    role: 'Lead UI/UX Designer',
    duration: 'May 2024 - Present (Multiple phases)',
    problem: 'Original warehouse management system for XTC Logistics was not accepted. The project needed to pivot to address a new market opportunity: Vietnam\'s mandatory e-invoice regulations requiring businesses to adopt digital invoicing solutions.',
    solution: 'Redesigned the platform from a single-purpose logistics tool into a flexible SaaS e-invoicing system. Focused on intuitive invoice creation, compliance workflows, and a modern dashboard that appeals to SMBs adapting to new regulations.',
    impact: [
      'Transformed rejected project into viable SaaS product',
      'Designed for scalability and multi-tenant architecture',
      'Addressed urgent market need (Vietnam e-invoice mandate)',
      'Modern UI improved perceived professionalism and trust'
    ],
    images: [
      {
        url: 'case-studies/invoiceai-dashboard',
        alt: 'InvoiceAI Dashboard Overview',
        caption: 'Modern SaaS dashboard with key metrics'
      },
      {
        url: 'case-studies/invoiceai-invoice-form',
        alt: 'Invoice creation flow',
        caption: 'Streamlined invoice creation process'
      },
      {
        url: 'case-studies/invoiceai-before-after',
        alt: 'Before and After comparison',
        caption: 'Evolution from logistics system to SaaS platform'
      }
    ],
    metrics: [
      { label: 'Project Phases', value: '2' },
      { label: 'Key Screens', value: '15+' },
      { label: 'Compliance', value: '100%' }
    ],
    technologies: ['Figma', 'Design System', 'User Flows'],
  },
  
  {
    id: '2',
    slug: 'khu13-music-club-website',
    title: 'Khu13 Music Club Website',
    subtitle: 'Youth-Oriented Nightlife Experience',
    description: 'Designing an engaging, interactive website for a music club targeting young adults with a modern, bold aesthetic',
    thumbnail: 'case-studies/khu13-thumb',
    coverImage: 'case-studies/khu13-hero',
    tags: ['Client', 'Web Design', 'Interactive'],
    year: '2025',
    client: 'Khu13 Music Club',
    role: 'UI/UX Designer',
    duration: 'January 2025 - Present',
    problem: 'Khu13 needed a website that captures the energy and vibe of their music club while making it easy for young audiences to discover events, view lineups, and engage with the brand. The site needed to stand out in a competitive nightlife market.',
    solution: 'Research-driven design inspired by successful club websites like Finns Beach Club. Created bold, high-impact layouts with dark aesthetics, dynamic typography, and interactive prototypes that showcase events and atmosphere. Mobile-first approach for target demographic.',
    impact: [
      'Interactive prototype ready for client review',
      'Modern, youth-appealing aesthetic',
      'Mobile-optimized for primary audience',
      'Research-backed design decisions'
    ],
    images: [
      {
        url: 'case-studies/khu13-homepage',
        alt: 'Khu13 Homepage Design',
        caption: 'Bold hero section with event highlights'
      },
      {
        url: 'case-studies/khu13-events',
        alt: 'Events page layout',
        caption: 'Event calendar and lineup showcase'
      },
      {
        url: 'case-studies/khu13-prototype',
        alt: 'Interactive prototype',
        caption: 'Clickable Figma prototype with animations'
      }
    ],
    metrics: [
      { label: 'References', value: '10+' },
      { label: 'Key Pages', value: '6' },
      { label: 'Interactive', value: '100%' }
    ],
    technologies: ['Figma', 'Interactive Prototyping', 'UI Research'],
  }
];