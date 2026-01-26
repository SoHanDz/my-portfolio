import { Project } from '@/types';

export const projectsEN: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Complete redesign of checkout flow, reducing cart abandonment by 23%',
    tags: ['Client', 'Shipped'],
    category: 'client',
    detail: {
      overview: 'Led the UI/UX redesign of the checkout flow for a mid-sized e-commerce platform serving 50K+ monthly users. Focused on reducing friction and improving conversion rates.',
      
      responsibilities: [
        'Conducted user research and identified pain points in existing checkout flow',
        'Created wireframes and high-fidelity mockups for 8 key screens',
        'Collaborated with frontend developers to ensure pixel-perfect implementation',
        'Ran A/B tests to validate design decisions'
      ],
      
      contributions: [
        'Redesigned 3-step checkout process with progress indicators',
        'Implemented smart form validation to reduce user errors',
        'Created mobile-first responsive layouts',
        'Designed guest checkout flow to reduce barriers',
        'Built reusable component library in Figma'
      ],
      
      impact: [
        'Reduced cart abandonment rate by 23%',
        'Increased mobile conversions by 35%',
        'Decreased checkout completion time by 40%',
        'Improved user satisfaction score from 3.2 to 4.5/5'
      ],
      
      technologies: ['Figma', 'Adobe XD', 'React', 'Tailwind CSS'],
      
      teamSize: '5 (1 Designer, 2 Frontend Devs, 1 Backend Dev, 1 PM)',
      myRole: 'Lead UI/UX Designer',
      
      challenges: 'Balancing business requirements (upselling) with user experience (simplicity). Solved by implementing optional add-ons that don\'t interrupt the main flow.',
      
      learnings: [
        'Importance of mobile-first design in e-commerce',
        'How to collaborate effectively with developers using design tokens',
        'A/B testing methodology and statistical significance'
      ],
      
      images: [
        {
          url: 'projects/ecommerce-checkout-flow',
          alt: 'Checkout flow redesign',
          caption: 'Before & After comparison of checkout steps'
        }
      ]
    }
  },
  
  {
    id: '2',
    title: 'Fintech Mobile App',
    description: 'Onboarding experience and personal finance dashboard',
    tags: ['Startup', 'Shipped'],
    category: 'startup',
    detail: {
      overview: 'Designed the onboarding flow and main dashboard for a personal finance app targeting millennials. Focus on making financial management approachable and engaging.',
      
      responsibilities: [
        'Designed complete onboarding experience (6 screens)',
        'Created main dashboard with data visualization',
        'Worked closely with product team on feature prioritization'
      ],
      
      contributions: [
        'Gamified onboarding with progress rewards',
        'Visual budget tracking with color-coded categories',
        'Swipe gestures for quick actions',
        'Dark mode support from day one'
      ],
      
      impact: [
        'Onboarding completion rate: 78% (industry avg: 40%)',
        'Daily active users increased by 45%',
        'App Store rating: 4.6/5 stars'
      ],
      
      technologies: ['Figma', 'Principle', 'React Native'],
      
      teamSize: '3 (1 Designer, 2 Mobile Devs)',
      myRole: 'Product Designer',
      
      challenges: 'Displaying complex financial data in a simple, mobile-friendly format without overwhelming users.',
      
      learnings: [
        'Mobile gesture design patterns',
        'Data visualization for small screens',
        'Working in a fast-paced startup environment'
      ]
    }
  },
  
  {
    id: '3',
    title: 'Internal CRM Tool',
    description: 'Enterprise tool for sales team workflow optimization',
    tags: ['Client', 'Shipped'],
    category: 'client',
  },
  
  {
    id: '4',
    title: 'Marketing Website',
    description: 'Landing pages and marketing materials for B2B SaaS product',
    tags: ['Internship'],
    category: 'internship',
  },
];