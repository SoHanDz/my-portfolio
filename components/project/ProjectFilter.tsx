'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'client' | 'startup';

interface ProjectFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: FilterType[] = ['all', 'client', 'startup'];

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const t = useTranslations('projects.filters');

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
            activeFilter === filter
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105'
              : 'bg-transparent text-muted-foreground border border-border hover:border-orange-500/50 hover:text-orange-500 hover:bg-orange-500/5'
          )}
        >
          {t(filter)}
        </button>
      ))}
    </div>
  );
}