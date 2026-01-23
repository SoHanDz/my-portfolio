'use client';

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/lib/i18n/routing';
import { locales, localeNames } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = params.locale as string;

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
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