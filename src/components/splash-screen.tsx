'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getDictionary } from '@/dictionaries';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './language-switcher';
import Logo from './logo';

type SplashScreenProps = {
  onEnter: () => void;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

export default function SplashScreen({ onEnter, dictionary }: SplashScreenProps) {
  const splashImage = PlaceHolderImages.find(p => p.id === 'splash-office');
  const [isFading, setIsFading] = useState(false);

  const handleEnterClick = () => {
    setIsFading(true);
    setTimeout(onEnter, 700); // Match this with fade-out duration
  };
  
  const subtitleText = dictionary.splash.subtitle;
  const logoPlaceholder = "{{logo}}";
  const subtitleParts = subtitleText.split(logoPlaceholder);

  return (
    <div className={`transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#EFE6D8] text-foreground overflow-hidden py-10 px-4">
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30">
          <div className="p-1 rounded-full bg-[#EFE6D8]/90 backdrop-blur-sm border border-white/40 shadow-luxury-subtle">
            <LanguageSwitcher className="h-10 w-10 rounded-full text-primary-strong hover:bg-accent/80 hover:text-primary-strong transition-colors duration-200" />
          </div>
        </div>
        
        {/* Foto de fondo */}
        {splashImage && (
          <Image
            src={splashImage.imageUrl}
            alt={splashImage.description}
            fill
            className="object-cover sepia-[.28] contrast-105"
            priority
            data-ai-hint={splashImage.imageHint}
          />
        )}
        
        {/* Velo ambiental muy ligero (20-25%) en toda la pantalla */}
        <div className="absolute inset-0 bg-[#EFE6D8]/25 pointer-events-none" />

        {/* Tarjeta central translúcida con diseño luxury enriquecido */}
        <div className="relative z-10 w-full max-w-3xl mx-auto my-auto p-8 sm:p-11 md:p-14 rounded-xl bg-[#EFE6D8]/90 backdrop-blur-md border border-white/40 shadow-card-elevated animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center overflow-hidden">
          
          {/* Reflejo superior sutil sobre el primer tercio */}
          <div 
            aria-hidden="true" 
            className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/25 to-transparent pointer-events-none rounded-t-xl" 
          />

          {/* Doble filete interior artesanal */}
          <div 
            aria-hidden="true"
            className="absolute inset-2.5 rounded-lg border border-primary-strong/25 pointer-events-none" 
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-strong">
              {dictionary.splash.title}
            </h1>
          </div>

          {/* Filete fino bronce central (1px, ~60px de ancho) */}
          <div className="relative z-10 h-[1px] w-16 bg-primary-strong/70 mx-auto my-4 sm:my-5 rounded-full" />

          <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 font-body text-xs sm:text-sm md:text-base text-primary-strong tracking-[0.22em] uppercase font-semibold">
            <span>{subtitleParts[0]}</span>
            <Logo className="h-7 w-7 sm:h-8 sm:w-8 opacity-95 shrink-0" />
            <span>{subtitleParts[1]}</span>
          </div>

          <p className="relative z-10 mt-5 sm:mt-6 max-w-xl mx-auto font-body text-base sm:text-lg text-[#4A3C30] leading-relaxed">
            {dictionary.splash.description1}
            <br className="hidden sm:inline" /><br className="hidden sm:inline" />
            <span className="block mt-2 sm:mt-0">{dictionary.splash.description2}</span>
          </p>

          <div className="relative z-10">
            <Button
              onClick={handleEnterClick}
              className="mt-7 sm:mt-9 font-headline tracking-[0.25em] text-base sm:text-lg md:text-xl px-12 sm:px-16 py-6 sm:py-7 bg-primary-strong text-[#FAF7F2] border border-primary-strong rounded-sm hover:bg-primary-strong/90 hover:shadow-luxury transition-all duration-300 ease-in-out hover:scale-[1.02]"
              variant="default"
            >
              {dictionary.splash.enterButton}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
