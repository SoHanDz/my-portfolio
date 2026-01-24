import HeroSection from '@/components/sections/HeroSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}