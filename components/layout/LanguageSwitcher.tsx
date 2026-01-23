'use client';

import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { locales, localeNames } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as string;

  const handleLocaleChange = (newLocale: string) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    // Create new path with new locale
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 border border-border rounded-md p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={cn(
            'px-3 py-1 text-sm font-medium rounded transition-colors',
            currentLocale === locale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}