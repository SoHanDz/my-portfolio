import HeroSection from '@/components/sections/HeroSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Work Section - Placeholder */}
      <section
        id="work"
        className="min-h-screen flex items-center justify-center bg-muted/30"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Work & Projects</h2>
          <p className="text-muted-foreground mt-4">Coming soon...</p>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-muted/30"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-muted-foreground mt-4">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}