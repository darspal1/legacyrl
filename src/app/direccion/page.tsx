import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../../i18n-config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type DireccionPageProps = {
  params: { lang?: Locale }
}

export default async function DireccionPage({ params }: DireccionPageProps) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.directionPage;
  const pageHeaderT = dictionary.pageHeader;

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-direccion');
  
  const directorImageMap: { [key: string]: string | undefined } = {
    'Daniel Rozúa Jr.': PlaceHolderImages.find(p => p.id === 'director-daniel-rozua')?.imageUrl,
    'Facundo Stirling Ruaulth': PlaceHolderImages.find(p => p.id === 'director-facundo-stirling')?.imageUrl,
    'Victoria Spencer & Associates': PlaceHolderImages.find(p => p.id === 'director-victoria-spencer')?.imageUrl,
    'Victoria Spencer & Asociados': PlaceHolderImages.find(p => p.id === 'director-victoria-spencer')?.imageUrl,
    'Victoria Spencer & Associés': PlaceHolderImages.find(p => p.id === 'director-victoria-spencer')?.imageUrl,
    'Knight Frank S.A.': PlaceHolderImages.find(p => p.id === 'direccion-europa')?.imageUrl,
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.regions.filter(r => r.id !== 'default').map((region, index) => {
             const directorImage = directorImageMap[region.director];
             const subDirectorImage = region.subDirector ? directorImageMap[region.subDirector] : undefined;

            return (
              <div 
                key={region.id}
                className="animate-in fade-in slide-in-from-bottom-5"
                style={{animationDelay: `${index * 150}ms`, animationDuration: '700ms'}}
              >
                <Card className="h-full border-accent/[.1] bg-card text-card-foreground shadow-xl shadow-black/5">
                   <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary border-b-2 border-primary/20 pb-2">{region.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 text-left">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        {directorImage && (
                          <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                            <Image src={directorImage} alt={region.director} fill className="object-cover" sizes="80px" />
                          </div>
                        )}
                        <div>
                          <h4 className="font-body font-bold text-lg text-foreground/80">{region.directorLabel}</h4>
                          <p className="font-body text-md text-foreground">{region.director}</p>
                        </div>
                      </div>

                      {region.subDirector && region.subDirectorLabel && (
                        <div className="flex items-center gap-4">
                          {subDirectorImage && (
                            <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                              <Image src={subDirectorImage} alt={region.subDirector} fill className="object-cover" sizes="80px" />
                            </div>
                          )}
                          <div>
                            <h4 className="font-body font-bold text-lg text-foreground/80">{region.subDirectorLabel}</h4>
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
