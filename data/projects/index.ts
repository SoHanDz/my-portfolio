import { Project } from '@/types';
import { projectsEN } from './en';
import { projectsVI } from './vi';

export const getProjects = (locale: string): Project[] => {
  if (locale === 'vi') {
    return projectsVI;
  }
  return projectsEN;
};

// For backward compatibility
export const projects = projectsEN;