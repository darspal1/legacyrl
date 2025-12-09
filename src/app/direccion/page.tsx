'use client';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const regions = [
  {
    title: 'Sudamérica',
    director: 'Daniel Rozúa Jr.',
    subDirector: 'Facundo Stirling Ruaulth',
    description: 'Responsables de la expansión patrimonial en mercados emergentes de alto valor, lideran las operaciones automotrices, inmobiliarias y vitivinícolas en Sudamérica. Su enfoque combina precisión técnica, visión estratégica y profundo conocimiento del patrimonio regional.',
    imageId: 'direccion-sudamerica',
  },
  {
    title: 'Norteamérica',
    director: 'Victoria Spencer & Asociados',
    subDirector: null,
    description: 'Con décadas de experiencia en mercados norteamericanos, Victoria Spencer & Asociados ofrecen una gestión impecable, centrada en activos exclusivos, propiedades históricas certificadas y colecciones privadas de alto valor.',
    imageId: 'direccion-norteamerica',
  },
  {
    title: 'Europa',
    director: 'Knight Frank S.A.',
    subDirector: null,
    description: 'Socios estratégicos en el continente europeo, Knight Frank S.A. lidera la consultoría patrimonial en bienes raíces históricos y activos exclusivos. Su reputación intachable y su presencia global los posiciona como custodios ideales de los mercados más exigentes del mundo.',
    imageId: 'direccion-europa',
  },
];

export default function DireccionPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-direccion');

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Dirección" />
      
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
            La excelencia requiere liderazgo; el legado, visión.
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Rozua Point & Legacy se sostiene sobre una estructura directiva internacional, 
            compuesta por profesionales que representan la integridad, la discreción 
            y la visión a largo plazo que define a nuestra firma.
            <br/><br/>
            Cada región opera bajo los estándares más altos de gobernanza financiera 
            y curaduría de activos patrimoniales.
          </p>
        </div>

        <Separator className="my-16 max-w-sm mx-auto bg-primary h-px rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {regions.map((region, index) => {
            const regionImage = PlaceHolderImages.find(p => p.id === region.imageId);
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
                     {regionImage && (
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
                    <h4 className="font-body font-bold text-lg">Director Regional:</h4>
                    <p className="font-body text-md text-foreground mb-4">{region.director}</p>
                    
                    {region.subDirector && (
                      <>
                        <h4 className="font-body font-bold text-lg">Sub-Director:</h4>
                        <p className="font-body text-md text-foreground mb-4">{region.subDirector}</p>
                      </>
                    )}

                    <p className="font-body text-sm text-muted-foreground mt-4">{region.description}</p>
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
