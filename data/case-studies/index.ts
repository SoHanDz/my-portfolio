import { CaseStudy } from '@/types';
import { invoiceaiEN } from './en/invoiceai';
import { khu13EN } from './en/khu13';
import { invoiceaiVI } from './vi/invoiceai';
import { khu13VI } from './vi/khu13';

export const getCaseStudies = (locale: string): CaseStudy[] => {
  if (locale === 'vi') {
    return [invoiceaiVI, khu13VI];
  }
  return [invoiceaiEN, khu13EN];
};

export const getCaseStudy = (slug: string, locale: string): CaseStudy | undefined => {
  const studies = getCaseStudies(locale);
  return studies.find(cs => cs.slug === slug);
};

// For homepage - default to EN
export const caseStudies = [invoiceaiEN, khu13EN];