import { notFound } from 'next/navigation';
import { experiences } from '@/data/experience';
import ExperienceDetailHero from '@/components/experience/ExperienceDetailHero';
import ExperienceDetailContent from '@/components/experience/ExperienceDetailContent';

interface PageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  return experiences
    .filter(exp => exp.detail)
    .map((exp) => ({
      id: exp.id,
    }));
}

export default async function ExperiencePage({ params }: PageProps) {
  const { id } = await params;
  
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience || !experience.detail) {
    notFound();
  }

  return (
    <main className="pt-16">
      <ExperienceDetailHero experience={experience} />
      <ExperienceDetailContent experience={experience} />
    </main>
  );
}