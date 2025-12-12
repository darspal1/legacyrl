'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '../../i18n-config';
import { useState, useEffect, Fragment } from 'react';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>(i18n.defaultLocale);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (pathName) {
      const segments = pathName.split('/');
      const langSegment = segments[1] as Locale;
      if (i18n.locales.includes(langSegment)) {
        setCurrentLocale(langSegment);
      } else {
        setCurrentLocale(i18n.defaultLocale);
      }
    }
  }, [pathName]);


  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return `/${locale}`;
    
    const segments = pathName.split('/');
    const isLangInPath = i18n.locales.includes(segments[1] as Locale);

    if (locale === i18n.defaultLocale) {
      if (isLangInPath) {
        segments.splice(1, 1);
        return segments.join('/') || '/';
      }
      return pathName;
    }

    if (isLangInPath) {
      segments[1] = locale;
      return segments.join('/');
    }

    segments.splice(1, 0, locale);
    return segments.join('/');
  };
  
  if (!isClient) {
    return <div className="h-8 w-24"></div>; // Placeholder to prevent layout shift
  }

  return (
    <nav className="flex items-center space-x-2">
      {i18n.locales.map((locale, index) => (
        <Fragment key={locale}>
          <Link 
            href={redirectedPathName(locale)} 
            className={cn(
              "font-mono uppercase text-sm transition-colors hover:text-primary",
              currentLocale === locale ? 'text-foreground font-bold' : 'text-muted-foreground'
            )}
          >
            {locale}
          </Link>
          {index < i18n.locales.length - 1 && (
            <span className="text-muted-foreground">|</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
