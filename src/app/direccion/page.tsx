import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../i18n-config';

type DireccionPageProps = {
  params: { lang: Locale }
}

const regionImageMap: { [key: string]: string } = {
  'Sudamérica': 'direccion-sudamerica',
  'South America': 'direccion-sudamerica',
  'Amérique du Sud': 'direccion-sudamerica',
  'Norteamérica': 'direccion-norteamerica',
  'North America': 'direccion-norteamerica',
  'Amérique du Nord': 'direccion-norteamerica',
  'Europa': 'direccion-europa',
  'Europe': 'direccion-europa'
};

const directorImageMap: { [key: string]: string | null } = {
  'Daniel Rozúa Jr.': 'director-daniel-rozua',
  'Facundo Stirling Ruaulth': 'director-facundo-stirling',
  'Victoria Spencer & Asociados': 'director-victoria-spencer',
  'Victoria Spencer & Associates': 'director-victoria-spencer',
  'Knight Frank S.A.': null
};

export default async function DireccionPage({ params: { lang } }: DireccionPageProps) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.directionPage;
  const pageHeaderT = dictionary.pageHeader;

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-direccion');

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

        <Separator className="my-16 max-w-sm mx-auto bg-primary h-px rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.regions.map((region, index) => {
            const regionImageId = regionImageMap[region.title];
            const regionImage = PlaceHolderImages.find(p => p.id === regionImageId);

            const directorImageId = directorImageMap[region.director];
            const directorImage = directorImageId ? PlaceHolderImages.find(p => p.id === directorImageId) : null;
            
            const subDirectorImageId = region.subDirector ? directorImageMap[region.subDirector] : null;
            const subDirectorImage = subDirectorImageId ? PlaceHolderImages.find(p => p.id === subDirectorImageId) : null;
            
            return (
              <div 
                key={region.title} 
                className="animate-in fade-in slide-in-from-bottom-5"
                style={{animationDelay: `${index * 200}ms`, animationDuration: '700ms'}}
              >
                <Card className="h-full overflow-hidden border-accent/[.1] bg-card text-card-foreground shadow-lg shadow-black/5">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary border-b-2 border-primary/20 pb-2">{region.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 text-left">
                     {region.title !== 'Sudamérica' && region.title !== 'South America' && region.title !== 'Amérique du Sud' && !directorImage && regionImage && (
                       <div className="relative h-48 w-full mb-6 overflow-hidden rounded-sm">
                         <Image
                            src={regionImage.imageUrl}
                            alt={`Representación de la región ${region.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            data-ai-hint={regionImage.imageHint}
                          />
                       </div>
                    )}
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        {directorImage && (
                          <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                            <Image src={directorImage.imageUrl} alt={region.director} fill className="object-cover" sizes="80px" data-ai-hint={directorImage.imageHint} />
                          </div>
                        )}
                        <div>
                          <h4 className="font-body font-bold text-lg">{region.directorLabel}</h4>
                          <p className="font-body text-md text-foreground">{region.director}</p>
                        </div>
                      </div>

                      {region.subDirector && region.subDirectorLabel && (
                        <div className="flex items-center gap-4">
                          {subDirectorImage && (
                            <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                              <Image src={subDirectorImage.imageUrl} alt={region.subDirector} fill className="object-cover" sizes="80px" data-ai-hint={subDirectorImage.imageHint} />
                            </div>
                          )}
                          <div>
                            <h4 className="font-body font-bold text-lg">{region.subDirectorLabel}</h4>
                            <p className="font-body text-md text-foreground">{region.subDirector}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="font-body text-sm text-muted-foreground mt-6">{region.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
