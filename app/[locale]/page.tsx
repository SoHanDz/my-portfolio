import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const CaseStudySection = dynamic(() => import('@/components/sections/CaseStudiesSection'));
// const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <CaseStudySection />
      {/* <AboutSection /> */}
    </main>
  );
}