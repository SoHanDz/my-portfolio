export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold">Sơn Hà</h1>
          <p className="text-xl text-muted-foreground mt-4">
            UI/UX Designer · Developer-minded
          </p>
        </div>
      </section>

      {/* Work Section - Placeholder */}
      <section id="work" className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Work & Projects</h2>
          <p className="text-muted-foreground mt-4">Coming soon...</p>
        </div>
      </section>

      {/* Case Studies Section - Placeholder */}
      <section id="case-studies" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Selected Case Studies</h2>
          <p className="text-muted-foreground mt-4">Coming soon...</p>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-muted-foreground mt-4">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}