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
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    if (window.location.hash === '#menu') {
      setView('menu');
    }
  }, []);

  const handleEnter = () => {
    setView('menu');
    router.push(`${pathname}#menu`, { scroll: false });
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {view === 'splash' && (
        <SplashScreen onEnter={handleEnter} dictionary={dictionary} />
      )}
      {view === 'menu' && (
        <div className="animate-in fade-in duration-1000">
          <MainMenu />
        </div>
      )}
    </>
  );
}
