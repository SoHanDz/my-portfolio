'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'uiux' | 'frontend' | 'other';

interface ProjectFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all',      label: 'All' },
  { key: 'uiux',     label: 'UI/UX' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'other',    label: 'Other' },
];

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
            activeFilter === key
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105'
              : 'bg-transparent text-muted-foreground border border-border hover:border-orange-500/50 hover:text-orange-500 hover:bg-orange-500/5'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}