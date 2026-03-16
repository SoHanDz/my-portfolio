import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CaseStudySection from '@/components/sections/CaseStudiesSection';
import AboutSection from '@/components/sections/AboutSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <CaseStudySection />
      <AboutSection />
    </main>
  );
}