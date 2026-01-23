import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'healthcare-platform-redesign',
    title: 'Healthcare Platform Redesign',
    subtitle: 'Redesigning patient management flow',
    description: 'Redesigning patient management flow to reduce cognitive load and improve data accuracy',
    thumbnail: 'case-studies/healthcare-calendar',
    coverImage: 'case-studies/healthcare-hero',
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
        url: 'case-studies/healthcare-1',
        alt: 'Calendar interface redesign',
      },
      {
        url: 'case-studies/healthcare-2',
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
];