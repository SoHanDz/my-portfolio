import { CaseStudy } from '@/types';
import { invoiceaiEN } from './en/invoiceai';
import { libraryEN } from './en/library-vien-dong';
import { invoiceaiVI } from './vi/invoiceai';
import { libraryVI } from './vi/library-vien-dong';

export const getCaseStudies = (locale: string): CaseStudy[] => {
  if (locale === 'vi') {
    return [invoiceaiVI, libraryVI];
  }
  return [invoiceaiEN, libraryEN];
};

export const getCaseStudy = (slug: string, locale: string): CaseStudy | undefined => {
  const studies = getCaseStudies(locale);
  return studies.find(cs => cs.slug === slug);
};

// For homepage - default to EN
export const caseStudies = [invoiceaiEN, libraryEN];