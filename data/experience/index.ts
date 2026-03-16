import { experiencesEN } from './en';
import { experiencesVI } from './vi';

export const getExperiences = (locale: string) => {
  if (locale === 'vi') return experiencesVI;
  return experiencesEN;
};

export const experiences = experiencesEN;