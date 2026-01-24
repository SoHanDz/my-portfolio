'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'client' | 'startup' | 'internship' | 'shipped';

interface ProjectFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: FilterType[] = ['all', 'client', 'startup', 'internship', 'shipped'];

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const t = useTranslations('projects.filters');

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            'px-4 py-2 rounded-md text-sm font-medium transition-colors',
            activeFilter === filter
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          )}
        >
          {t(filter)}
        </button>
      ))}
    </div>
  );
}