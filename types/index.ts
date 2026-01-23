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

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'client' | 'startup' | 'internship' | 'shipped';
  link?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  icon?: string;
}

export interface Skill {
  id: string;
  title: string;
  items: string;
  icon?: string;
}