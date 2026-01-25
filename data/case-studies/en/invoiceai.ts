import { CaseStudy } from '@/types';

export const invoiceaiEN: CaseStudy = {
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
};