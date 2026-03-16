import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'invoiceai-saas-redesign',
    title: 'InvoiceAI - SaaS Redesign',
    subtitle: 'From Warehouse Tool to SaaS E-invoicing Platform',
    description: 'Redesigning a rejected warehouse management system into a SaaS platform addressing Vietnam\'s new e-invoice regulations',
    thumbnail: 'case-studies/invoiceai-thumb',
    coverImage: 'case-studies/invoiceai-hero',
    tags: ['Startup', 'Web App', 'Redesign'],
    year: '2024 - Present',
    client: 'Confidential',
    role: 'UI/UX Designer & Frontend Developer',
    duration: 'May 2024 - Present',
    problem: 'The original XTC warehouse management system — built for a leather wallet workshop — was completed but rejected by the client. Rather than abandoning the project, the team decided to pivot: rework the system into a SaaS platform targeting SMEs that need to comply with Vietnam\'s new mandatory e-invoicing regulations.',
    solution: 'Redesigned the UI from the ground up while preserving the parts that worked well from XTC. Restructured key screens — including the order creation page — into clearer block-based layouts (header, filters, table). Used v0.dev to explore UI directions for 3 key screens, then self-implemented the chosen designs. Also built a basic design system to keep the interface consistent across modules.',
    impact: [
      'System is live and being used by real users',
      'Completed design and implementation for 20+ core screens',
      'Restructured layouts improved readability and usability over the legacy version',
      'New UI received noticeably better feedback compared to the XTC version',
    ],
    images: [
      {
        url: 'case-studies/invoiceai-dashboard',
        alt: 'InvoiceAI Dashboard Overview',
        caption: 'Redesigned dashboard for the SaaS platform'
      },
      {
        url: 'case-studies/invoiceai-invoice-form',
        alt: 'Order creation page redesign',
        caption: 'Restructured order creation page with clear block-based layout'
      },
      {
        url: 'case-studies/invoiceai-before-after',
        alt: 'Before and After comparison',
        caption: 'UI evolution from XTC to InvoiceAI'
      }
    ],
    metrics: [
      { label: 'Core Screens', value: '20+' },
      { label: 'Project Status', value: 'Live' },
      { label: 'Project Phases', value: '2' },
    ],
    technologies: ['Figma', 'v0.dev', 'React', 'TypeScript', 'Ant Design'],
  },

  {
    id: '2',
    slug: 'library-vien-dong',
    title: 'Library Management System',
    subtitle: 'Digitizing Manual Processes for Vien Dong College',
    description: 'Designing a library management system to replace manual Excel-based workflows — my first real project with on-site user research',
    thumbnail: 'case-studies/library-thumb',
    coverImage: 'case-studies/library-hero',
    tags: ['Client', 'Web App', 'UX Research'],
    year: '2024',
    client: 'Vien Dong College',
    role: 'UI/UX Designer',
    duration: '2024',
    problem: 'The librarian at Vien Dong College was managing all book borrowing and returns through Excel — manually entering each row every time a student borrowed or returned a book. The process was time-consuming and error-prone. On the student side, there was no way to know what books were available in the library without physically going there to ask.',
    solution: 'Before designing anything, I visited the library on-site and spoke with the librarian to understand her daily workflow and pain points firsthand. This surfaced two distinct user groups with different needs: students who needed to search for books, and the librarian who needed a faster way to manage borrowing operations. I took on the design for both: a web portal for students to browse and borrow books online, and a desktop dashboard for the librarian to manage all operations — fully replacing Excel.',
    impact: [
      'System is deployed and actively used at the library',
      'Librarian no longer needs to manually enter data into Excel',
      'Students can search for available books without visiting the library',
      'Fully replaced the previous paper-based process',
    ],
    images: [
      {
        url: 'case-studies/library-student-portal',
        alt: 'Student book search portal',
        caption: 'Online book search and borrowing portal for students'
      },
      {
        url: 'case-studies/library-admin-dashboard',
        alt: 'Admin dashboard for librarian',
        caption: 'Dashboard replacing the manual Excel workflow'
      },
      {
        url: 'case-studies/library-survey',
        alt: 'On-site library research',
        caption: 'On-site visit and librarian interview at the college'
      },
    ],
    metrics: [
      { label: 'User Groups', value: '2' },
      { label: 'Key Screens', value: '10+' },
      { label: 'Status', value: 'Live' },
    ],
    technologies: ['Figma', 'React', 'Material-UI', 'PostgreSQL'],
  },
];