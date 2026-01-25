import { notFound } from 'next/navigation';
import { getCaseStudies, getCaseStudy } from '@/data/case-studies/index';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyContent from '@/components/case-study/CaseStudyContent';
import CaseStudyGallery from '@/components/case-study/CaseStudyGallery';
import CaseStudyMetrics from '@/components/case-study/CaseStudyMetrics';
import CaseStudyNavigation from '@/components/case-study/CaseStudyNavigation';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getCaseStudies('en').map((cs) => ({ slug: cs.slug }));
  return slugs;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { locale, slug } = await params;
  
  const caseStudy = getCaseStudy(slug, locale);
  const allCaseStudies = getCaseStudies(locale);
  const currentIndex = allCaseStudies.findIndex((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const nextProject = currentIndex < allCaseStudies.length - 1 
    ? allCaseStudies[currentIndex + 1] 
    : null;
  const prevProject = currentIndex > 0 
    ? allCaseStudies[currentIndex - 1] 
    : null;

  return (
    <main className="pt-16">
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyContent caseStudy={caseStudy} />
      <CaseStudyMetrics caseStudy={caseStudy} />
      <CaseStudyGallery caseStudy={caseStudy} />
      <CaseStudyNavigation 
        nextProject={nextProject}
        prevProject={prevProject}
        locale={locale}
      />
    </main>
  );
}