import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'UI/UX Design Intern',
    company: 'VNMentors',
    period: '2024 - 2025',
    description: 'Contributed to product design, marketing materials, and cross-functional collaboration between design, development, and business teams.',
    detail: {
      overview: 'During my internship at VNMentors, I worked on diverse design projects ranging from social media graphics to complete UI redesigns and brand identity work. VNMentors is an education technology company focused on TOEIC preparation through their flagship product 990toeic.com, serving thousands of students preparing for English proficiency exams.',
      
      responsibilities: [
        'Designed social media graphics for Facebook marketing campaigns',
        'Redesigned UI/UX for 990toeic.com web platform',
        'Created brand identity and logo redesign for 990toeic',
        'Developed visual identity for VNMentors corporate brand',
        'Collaborated with marketing team on campaign visuals',
        'Worked with developers to implement design systems'
      ],
      
      projects: [
        {
          title: 'Social Media Graphics',
          description: 'Designed 10+ social media posts for Facebook marketing campaigns, focusing on student engagement and course promotion for 990toeic TOEIC preparation platform',
          category: 'social-media',
          images: [
            'experience/vnmentors/social-1',
            'experience/vnmentors/social-2',
            'experience/vnmentors/social-3',
            'experience/vnmentors/social-4',
            'experience/vnmentors/social-5',
            'experience/vnmentors/social-6',
            'experience/vnmentors/social-7',
            'experience/vnmentors/social-8',
            'experience/vnmentors/social-9',
            'experience/vnmentors/social-10',
          ]
        },
        {
          title: '990toeic.com Website Redesign',
          description: 'Complete UI/UX redesign of the 990toeic learning platform, focusing on improving student experience, course navigation, and overall visual hierarchy for better learning outcomes',
          category: 'web-design',
          images: [
            'experience/vnmentors/990toeic-before',
            'experience/vnmentors/990toeic-after',
            'experience/vnmentors/990toeic-dashboard',
            'experience/vnmentors/990toeic-course-page',
          ]
        },
        {
          title: 'Brand Identity & Logo Design',
          description: 'Redesigned logos for both 990toeic and VNMentors brands, creating modern, professional identities that better represent their education technology mission',
          category: 'branding',
          images: [
            'experience/vnmentors/990toeic-logo-before-after',
            'experience/vnmentors/990toeic-logo-variations',
            'experience/vnmentors/vnmentors-logo-before-after',
            'experience/vnmentors/vnmentors-logo-variations',
          ]
        }
      ],
      
      achievements: [
        'Successfully delivered 10+ social media designs used in active campaigns',
        'Redesigned 990toeic.com UI improving user satisfaction',
        'Created brand identities adopted by both 990toeic and VNMentors',
        'Collaborated across marketing, development, and business teams'
      ],
      
      skills: [
        'Figma',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'UI/UX Design',
        'Brand Identity',
        'Social Media Design',
        'Web Design'
      ],
      
      duration: '2024 - 2025'
    }
  },
];