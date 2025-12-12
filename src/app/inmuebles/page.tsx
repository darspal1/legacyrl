import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../../i18n-config';

type InmueblesPageProps = {
  params: { lang?: Locale }
}

const serviceImageMap: { [key: string]: string } = {
  'Adquisición de Propiedades con Carácter': 'inmuebles-adquisicion',
  'Acquisition of Properties with Character': 'inmuebles-adquisicion',
  'Acquisition de Propriétés de Caractère': 'inmuebles-adquisicion',
  'Acquisizione di Immobili di Carattere': 'inmuebles-adquisicion',
  'Auditoría Arquitectónica y Patrimonial': 'inmuebles-auditoria',
  'Architectural and Heritage Audit': 'inmuebles-auditoria',
  'Audit Architectural et Patrimonial': 'inmuebles-auditoria',
  'Audit Architettonico e Patrimoniale': 'inmuebles-auditoria',
  'Restauración con Artesanos': 'inmuebles-restauracion',
  'Restoration with Artisans': 'inmuebles-restauracion',
  'Restauration avec des Artisans': 'inmuebles-restauracion',
  'Restauro con Artigiani': 'inmuebles-restauracion',
  'Gestión y Revalorización a Largo Plazo': 'inmuebles-gestion',
  'Long-Term Management and Revaluation': 'inmuebles-gestion',
  'Gestion et Revalorisation à Long Terme': 'inmuebles-gestion',
  'Gestione e Rivalutazione a Lungo Termine': 'inmuebles-gestion'
};


export default async function InmueblesPage({ params }: InmueblesPageProps) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.realEstatePage;
  const pageHeaderT = dictionary.pageHeader;

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-inmuebles');
  
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
          <h2 className="font-body text-4xl md:text-5xl text-white/90 text-center animate-in fade-in zoom-in-95 duration-1000">
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

        <h3 className="text-center font-headline text-4xl font-bold mb-12 animate-in fade-in duration-500">
          {t.servicesTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === serviceImageMap[service.title]);
            return (
              <div 
                key={service.title} 
                className="animate-in fade-in slide-in-from-bottom-5"
                style={{animationDelay: `${index * 150}ms`, animationDuration: '700ms'}}
              >
                <Card className="h-full overflow-hidden border-accent/[.2] bg-card text-card-foreground shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-accent/10 hover:-translate-y-2">
                  <div className="relative h-48 w-full overflow-hidden">
                    {serviceImage && (
                       <Image
                          src={serviceImage.imageUrl}
                          alt={serviceImage.description}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          data-ai-hint={serviceImage.imageHint}
                        />
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-headline text-xl font-bold mb-2">{service.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{service.description}</p>
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
