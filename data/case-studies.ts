import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'healthcare-platform-redesign',
    title: 'Healthcare Platform Redesign',
    subtitle: 'Redesigning patient management flow',
    description: 'Redesigning patient management flow to reduce cognitive load and improve data accuracy',
    thumbnail: 'samples/landscapes/beach-boat', // Demo image
    coverImage: 'samples/landscapes/beach-boat', // Demo image
    tags: ['Client', 'Web App', 'UX-heavy'],
    year: '2024',
    client: 'HealthTech Corp',
    role: 'Lead Product Designer',
    duration: '4 months',
    problem: 'Healthcare providers struggled with complex patient scheduling and data management, leading to errors and inefficiencies.',
    solution: 'Redesigned the calendar interface and simplified the data entry process with smart defaults and validation.',
    impact: [
      'Reduced scheduling errors by 45%',
      'Improved data accuracy by 60%',
      'Decreased training time for new staff by 50%',
    ],
    images: [
      {
        url: 'samples/cloudinary-group',
        alt: 'Calendar interface redesign',
      },
      {
        url: 'samples/people/kitchen-bar',
        alt: 'Patient data entry flow',
      },
    ],
    metrics: [
      { label: 'Error Reduction', value: '45%' },
      { label: 'Data Accuracy', value: '60%' },
      { label: 'Training Time', value: '-50%' },
    ],
    technologies: ['Figma', 'React', 'TypeScript'],
  },
  {
    id: '2',
    slug: 'fintech-mobile-app',
    title: 'Fintech Mobile App',
    subtitle: 'Onboarding & Finance Dashboard',
    description: 'Onboarding experience and personal finance dashboard for a fintech startup',
    thumbnail: 'samples/food/spices', // Demo image
    coverImage: 'samples/landscapes/architecture-signs', // Demo image
    tags: ['Startup', 'Mobile', 'Shipped'],
    year: '2024',
    client: 'FinanceFlow',
    role: 'Product Designer',
    duration: '3 months',
    problem: 'Users abandoned onboarding process due to complexity and lack of clarity.',
    solution: 'Simplified onboarding to 3 steps with clear value propositions and visual progress indicators.',
    impact: [
      'Increased onboarding completion by 70%',
      'Reduced support tickets by 40%',
      'Improved user satisfaction score by 35%',
    ],
    images: [
      {
        url: 'samples/people/smiling-man',
        alt: 'Onboarding flow',
      },
    ],
    metrics: [
      { label: 'Completion Rate', value: '+70%' },
      { label: 'Support Tickets', value: '-40%' },
    ],
    technologies: ['Figma', 'React Native', 'TypeScript'],
  },
];