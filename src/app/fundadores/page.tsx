'use client';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const founders = [
  {
    name: 'Daniel Beniamino Rozúa',
    title: 'Automotive & Electronics Engineer',
    country: 'Italia',
    description: 'Con una trayectoria sólida en ingeniería automotriz y electrónica de precisión, Daniel aporta a la firma la visión técnica que define nuestras adquisiciones mecánicas. Su enfoque combina rendimiento, fiabilidad y tradición, atributos esenciales en automóviles de prestigio y activos de colección.',
    image_id: 'founder-daniel',
  },
  {
    name: 'Clément Lafayette',
    title: 'BIM Architecture Specialist',
    country: 'Francia',
    description: 'Especialista en arquitectura BIM y gestión patrimonial, Clément aporta una perspectiva estructural y estética clave para la selección de inmuebles con carácter. Su sensibilidad europea por el diseño y la preservación histórica fortalece nuestro compromiso con propiedades que trascienden generaciones.',
    image_id: 'founder-clement',
  }
];

export default function FundadoresPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-fundadores');

  if (!isMounted) {
    return null; // or a loading spinner
  }
  
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Fundadores" />
      
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
            Las casas más duraderas se construyen sobre nombres que inspiran confianza.
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Rozua Point & Legacy nace del encuentro entre dos visiones complementarias: 
            la ingeniería aplicada al patrimonio y la arquitectura dedicada a la excelencia.
            <br/><br/>
            Nuestros fundadores representan dos corrientes esenciales: 
            la precisión técnica y la estética estructural. 
            Juntos, han dado forma a una firma que no solo invierte, sino que preserva legado.
          </p>
        </div>

        <Separator className="my-12 max-w-sm mx-auto bg-primary h-[2px] rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => {
            const founderImage = PlaceHolderImages.find(p => p.id === founder.image_id);
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
