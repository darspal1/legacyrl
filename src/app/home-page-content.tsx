"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import MainMenu from '@/components/main-menu';
import Testimonials from '@/components/testimonials';
import { usePathname, useRouter } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../i18n-config';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function HomePageContent() {
  const [view, setView] = useState('splash');
  const router = useRouter();
  const pathname = usePathname();
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [lang, setLang] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const langSegment = (pathname.split('/')[1] || i18n.defaultLocale) as Locale;
    const currentLang = i18n.locales.includes(langSegment) ? langSegment : i18n.defaultLocale;
    setLang(currentLang);
    getDictionary(currentLang).then(setDictionary);
  }, [pathname]);

  useEffect(() => {
    // This effect runs only on the client side after hydration.
    // It checks the URL hash and updates the view if necessary.
    const handleHashChange = () => {
      if (window.location.hash === '#menu') {
        setView('menu');
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleEnter = () => {
    setView('menu');
    router.push(`${pathname}#menu`, { scroll: false });
  };
  
  if (!dictionary) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        {/* You can add a loader here */}
      </div>
    );
  }
  
  if (view === 'menu') {
    return (
      <div className="animate-in fade-in duration-1000">
        <MainMenu />
        <Testimonials dictionary={dictionary} />
      </div>
    );
  }

  return (
    <SplashScreen onEnter={handleEnter} dictionary={dictionary} />
  );
}