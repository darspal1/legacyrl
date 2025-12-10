"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import MainMenu from '@/components/main-menu';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Home() {
  const [view, setView] = useState('splash'); // 'splash', 'fading', 'menu'
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for hash on initial load
    if (window.location.hash === '#menu') {
      setView('menu');
    }
  }, []);

  const handleEnter = () => {
    setView('fading');
  };

  useEffect(() => {
    if (view === 'fading') {
      const timer = setTimeout(() => {
        setView('menu');
        const current = new URL(window.location.href);
        const newUrl = `${current.pathname}${current.search}#menu`;
        window.history.pushState(null, '', newUrl);
      }, 700); // This duration should match the splash screen's fade-out animation
      return () => clearTimeout(timer);
    }
  }, [view]);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash !== '#menu' && view === 'menu') {
        setView('splash');
      } else if (window.location.hash === '#menu' && view !== 'menu') {
        setView('menu');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash !== '#menu' && view === 'menu') {
       setView('splash');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };

  }, [pathname, searchParams, view]);

  return (
    <>
      {view !== 'menu' && (
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            view === 'fading' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <SplashScreen onEnter={handleEnter} />
        </div>
      )}
      {view === 'menu' && (
        <div className="animate-in fade-in duration-1000">
          <MainMenu />
        </div>
      )}
    </>
  );
}
