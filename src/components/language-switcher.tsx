'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '../../i18n-config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = useState(i18n.defaultLocale);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (pathName) {
      const segments = pathName.split('/');
      const langSegment = segments[1];
      if (i18n.locales.includes(langSegment as any)) {
        setCurrentLocale(langSegment);
      } else {
        setCurrentLocale(i18n.defaultLocale);
      }
    }
  }, [pathName]);


  const redirectedPathName = (locale: string) => {
    if (!pathName) return `/${locale}`;

    const segments = pathName.split('/');
    const isLangRoot = i18n.locales.includes(segments[1] as any);
    
    if (locale === i18n.defaultLocale) {
        if(isLangRoot) {
            segments.splice(1,1);
            return segments.join('/') || '/';
        }
        return pathName;
    }

    if (isLangRoot) {
        segments[1] = locale;
        return segments.join('/');
    }

    segments.splice(1, 0, locale);
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="font-mono uppercase">
           <Globe className="mr-2 h-4 w-4" />
           {isClient ? currentLocale : ''}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => {
          return (
            <DropdownMenuItem key={locale} asChild>
              <Link href={redirectedPathName(locale)} className="font-mono uppercase">
                {locale}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
