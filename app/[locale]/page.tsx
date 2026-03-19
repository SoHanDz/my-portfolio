import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import AboutSection from '@/components/sections/AboutSection';

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
// const CaseStudySection = dynamic(() => import('@/components/sections/CaseStudiesSection'));

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      {/* <CaseStudySection /> */}
    </main>
  );
}