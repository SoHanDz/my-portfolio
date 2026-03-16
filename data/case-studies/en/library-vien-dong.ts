import { CaseStudy } from '@/types';

export const libraryEN: CaseStudy = {
  id: '2',
  slug: 'library-vien-dong',
  title: 'VienDong Library Management System',
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
};