"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import MainMenu from '@/components/main-menu';
import { usePathname, useRouter } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type HomePageContentProps = {
  dictionary: Dictionary;
};

export default function HomePageContent({ dictionary }: HomePageContentProps) {
  const [view, setView] = useState('splash');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // This effect runs only on the client side after hydration.
    // It checks the URL hash and updates the view if necessary.
    if (window.location.hash === '#menu') {
      setView('menu');
    }
  }, []);

  const handleEnter = () => {
    setView('menu');
    router.push(`${pathname}#menu`, { scroll: false });
  };
  
  // Always render the splash screen initially on both server and client.
  // Then, if the hash is present, the useEffect will trigger a client-side
  // re-render to show the menu, avoiding a hydration mismatch.
  if (view === 'menu') {
    return (
      <div className="animate-in fade-in duration-1000">
        <MainMenu />
      </div>
    );
  }

  return (
    <SplashScreen onEnter={handleEnter} dictionary={dictionary} />
  );
}
