'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/lib/i18n/routing';
import { locales, localeNames } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="flex items-center gap-2 border border-border rounded-md p-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          href="/" // Hardcode về homepage
          locale={locale}
          className={cn(
            'px-3 py-1 text-sm font-medium rounded transition-colors',
            currentLocale === locale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}