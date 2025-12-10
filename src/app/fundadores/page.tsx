import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../../i18n-config';

type FundadoresPageProps = {
  params: { lang?: Locale }
}

const founderImageMap: { [key: string]: string } = {
  'Daniel Beniamino Rozúa': 'founder-daniel',
  'Clément Lafayette': 'founder-clement'
};

export default async function FundadoresPage({ params }: FundadoresPageProps) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.foundersPage;
  const pageHeaderT = dictionary.pageHeader;

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-fundadores');
  
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title={t.title} backButtonText={pageHeaderT.backButton}/>
      
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
          <h2 className="font-body text-4xl md:text-5xl text-white/90 text-center animate-in fade-in zoom-in-95 duration-1000 px-4">
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

        <Separator className="my-12 max-w-sm mx-auto bg-primary h-[2px] rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {t.founders.map((founder, index) => {
            const founderImageId = founderImageMap[founder.name];
            const founderImage = PlaceHolderImages.find(p => p.id === founderImageId);
            return (
              <div 
                key={founder.name} 
                className="animate-in fade-in slide-in-from-bottom-5"
                style={{animationDelay: `${index * 200}ms`, animationDuration: '700ms'}}
              >
                <Card className="h-full flex flex-col md:flex-row items-center gap-8 p-8 border-accent/[.1] bg-transparent shadow-none">
                  <div className="relative h-48 w-40 shrink-0">
                    {founderImage && (
                       <Image
                          src={founderImage.imageUrl}
                          alt={`Retrato de ${founder.name}`}
                          fill
                          className="object-cover rounded-sm sepia-[.3] contrast-125"
                          sizes="160px"
                          data-ai-hint={founderImage.imageHint}
                        />
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className="font-headline text-2xl font-bold">{founder.name}</h3>
                    <p className="font-body text-md text-primary">{founder.title}</p>
                    <p className="font-body text-sm text-muted-foreground mb-4">{founder.country}</p>
                    <p className="font-body text-sm text-muted-foreground">{founder.description}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
