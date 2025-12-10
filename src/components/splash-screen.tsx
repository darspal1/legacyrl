'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getDictionary } from '@/dictionaries';
import { useEffect, useState } from 'react';

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
  
  return (
    <div className={`dark transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background text-foreground overflow-hidden">
        {splashImage && (
          <Image
            src={splashImage.imageUrl}
            alt={splashImage.description}
            fill
            className="object-cover opacity-20 sepia-[.25]"
            priority
            data-ai-hint={splashImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center p-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-muted-foreground [text-shadow:_0_2px_10px_hsl(var(--background)/_0.5)]">
            {dictionary.splash.title}
          </h1>
          <h2 className="mt-6 font-body text-xl md:text-2xl text-muted-foreground/80 tracking-widest uppercase [text-shadow:_0_1px_4px_hsl(var(--background))]">
            {dictionary.splash.subtitle}
          </h2>
          <p className="mt-8 max-w-2xl mx-auto font-body text-lg text-muted-foreground/70 [text-shadow:_0_1px_4px_hsl(var(--background))]">
            {dictionary.splash.description1}
            <br /><br />
            {dictionary.splash.description2}
          </p>
          <Button
            onClick={handleEnterClick}
            className="mt-12 font-headline tracking-widest text-2xl px-12 py-8 bg-accent/[.40] text-primary-foreground border border-accent rounded-sm hover:bg-accent/[.60] hover:shadow-[0_0_20px_hsl(var(--accent))] transition-all duration-600 ease-in-out"
            variant="outline"
          >
            {dictionary.splash.enterButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
