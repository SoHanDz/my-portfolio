import { CaseStudy } from '@/types';
import { xtcEN } from './en/en_xtc';
import { xtcVI } from './vi/vi_xtc';

const caseStudiesEN: CaseStudy[] = [xtcEN];
const caseStudiesVI: CaseStudy[] = [xtcVI];

export function getCaseStudies(locale: string): CaseStudy[] {
  return locale === 'vi' ? caseStudiesVI : caseStudiesEN;
}

export function getCaseStudy(slug: string, locale: string): CaseStudy | undefined {
  return getCaseStudies(locale).find((cs) => cs.slug === slug);
}