import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import InteractiveMap from '@/components/interactive-map';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../../i18n-config';

type DireccionPageProps = {
  params: { lang?: Locale }
}

export default async function DireccionPage({ params }: DireccionPageProps) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.directionPage;
  const pageHeaderT = dictionary.pageHeader;

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-direccion');
  const mapImage = PlaceHolderImages.find(p => p.id === 'world-map-texture');
  
  const directorImageMap: { [key: string]: string | undefined } = {
    'Daniel Rozúa Jr.': PlaceHolderImages.find(p => p.id === 'director-daniel-rozua')?.imageUrl,
    'Facundo Stirling Ruaulth': PlaceHolderImages.find(p => p.id === 'director-facundo-stirling')?.imageUrl,
    'Victoria Spencer & Associates': PlaceHolderImages.find(p => p.id === 'director-victoria-spencer')?.imageUrl,
    'Victoria Spencer & Asociados': PlaceHolderImages.find(p => p.id === 'director-victoria-spencer')?.imageUrl,
    'Victoria Spencer & Associés': PlaceHolderImages.find(p => p.id === 'director-victoria-spencer')?.imageUrl,
    'Knight Frank S.A.': PlaceHolderImages.find(p => p.id === 'direccion-europa')?.imageUrl,
  };

  const regionsWithImages = t.regions.map(region => {
    // Determine the correct image key, which might vary by language
    const directorImage = directorImageMap[region.director];
    const subDirectorImage = region.subDirector ? directorImageMap[region.subDirector] : undefined;

    return {
      ...region,
      directorImage: directorImage,
      subDirectorImage: subDirectorImage,
    }
  });

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title={t.title} backButtonText={pageHeaderT.backButton} />
      
      <div className="relative h-[50vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h2 className="font-body text-4xl md:text-5xl text-white/90 text-center animate-in fade-in slide-in-from-bottom-5 duration-1000 px-4">
            {t.hero}
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            {t.intro1}
            <br/><br/>
            {t.intro2}
          </p>
        </div>
        
        {mapImage && <InteractiveMap regions={regionsWithImages} mapImage={mapImage} dictionary={dictionary} />}

      </div>
    </main>
  );
}
