'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '../../i18n-config';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
    return <div className="h-10 w-10"></div>; // Placeholder to prevent layout shift
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
           <DropdownMenuItem key={locale} asChild>
            <Link 
              href={redirectedPathName(locale)}
              className="font-mono uppercase"
            >
              {locale}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
