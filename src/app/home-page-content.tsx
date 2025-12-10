"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import MainMenu from '@/components/main-menu';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type HomePageContentProps = {
  dictionary: Dictionary;
};

export default function HomePageContent({ dictionary }: HomePageContentProps) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEnter = () => {
    const current = new URL(window.location.href);
    const newUrl = `${current.pathname}${current.search}#menu`;
    router.push(newUrl, { scroll: false });
  };

  const showMenu = isClient && window.location.hash === '#menu';

  return (
    <>
      {!showMenu && (
        <SplashScreen onEnter={handleEnter} dictionary={dictionary} />
      )}
      {showMenu && (
        <div className="animate-in fade-in duration-1000">
          <MainMenu />
        </div>
      )}
    </>
  );
}
