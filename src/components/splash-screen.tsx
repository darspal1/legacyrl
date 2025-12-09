import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type SplashScreenProps = {
  onEnter: () => void;
};

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const splashImage = PlaceHolderImages.find(p => p.id === 'splash-office');

  return (
    <div className="dark">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background text-foreground overflow-hidden">
        {splashImage && (
          <Image
            src={splashImage.imageUrl}
            alt={splashImage.description}
            fill
            className="object-cover opacity-15 sepia-[.5]"
            priority
            data-ai-hint={splashImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center p-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground">
            Rozua Point & Legacy
          </h1>
          <h2 className="mt-4 font-body text-2xl md:text-3xl text-muted-foreground">
            Donde el patrimonio encuentra su historia.
          </h2>
          <p className="mt-8 max-w-2xl mx-auto font-body text-lg text-primary-foreground/80">
            En un mundo efímero, Rozua Point & Legacy S.A. se erige como un bastión de permanencia.
            No somos simplemente una firma de inversión; somos custodios del buen vivir 
            y arquitectos de legados familiares.
            <br /><br />
            Nacida de la unión de una selecta sociedad de inversionistas, nuestra firma fue concebida 
            bajo una premisa inquebrantable: el verdadero lujo no grita, susurra.
          </p>
          <Button
            onClick={onEnter}
            className="mt-12 font-headline tracking-widest text-2xl px-12 py-8 bg-accent/[.40] text-primary-foreground border border-accent rounded-sm hover:bg-accent/[.60] hover:shadow-[0_0_20px_hsl(var(--accent))] transition-all duration-600 ease-in-out"
            variant="outline"
          >
            [ ENTER ]
          </Button>
        </div>
      </div>
    </div>
  );
}
