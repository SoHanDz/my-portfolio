export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string; // Cloudinary public ID
  coverImage: string;
  tags: string[];
  year: string;
  client?: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  impact: string[];
  images: {
    url: string;
    caption?: string;
    alt: string;
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
  technologies?: string[];
  link?: {
    url: string;
    label: string;
  };
  nextProject?: string;
}

export interface ProjectDetail {
  overview: string;
  responsibilities: string[];
  contributions: string[];
  impact: string[];
  technologies: string[];
  teamSize?: string;
  myRole?: string;
  challenges?: string;
  learnings?: string[];
  images?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  liveUrl?: string;
  demoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'client' | 'startup' | 'internship' | 'shipped';
  link?: string;
  detail?: ProjectDetail; // ← Thêm field này
}

export interface ExperienceDetail {
  overview: string;
  responsibilities: string[];
  projects: {
    title: string;
    description: string;
    category: 'social-media' | 'web-design' | 'branding';
    images?: string[]; // Cloudinary public IDs
  }[];
  achievements: string[];
  skills: string[];
  duration: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  icon?: string;
  detail?: ExperienceDetail; // ← Thêm field này
}

export interface Skill {
  id: string;
  title: string;
  items: string;
  icon?: string;
}