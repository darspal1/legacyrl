'use client';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Adquisición de Propiedades con Carácter',
    description: 'Selección de palacios, fincas y residencias únicas, no disponibles en el mercado tradicional.',
    image_id: 'inmuebles-adquisicion',
  },
  {
    title: 'Auditoría Arquitectónica y Patrimonial',
    description: 'Verificación estructural, autenticidad histórica y potencial de restauración para asegurar el valor a largo plazo.',
    image_id: 'inmuebles-auditoria',
  },
  {
    title: 'Restauración con Artesanos',
    description: 'Proyectos de restauración y modernización ejecutados por artesanos certificados en patrimonio arquitectónico.',
    image_id: 'inmuebles-restauracion',
  },
  {
    title: 'Gestión y Revalorización a Largo Plazo',
    description: 'Estrategias de preservación de valor basadas en exclusividad, ubicación y rareza arquitectónica.',
    image_id: 'inmuebles-gestion',
  },
];

export default function InmueblesPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-inmuebles');

  if (!isMounted) {
    return null; // or a loading spinner
  }
  
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Inmuebles" />
      
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
            Muros que han visto la historia pasar.
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            El verdadero valor de una propiedad no se encuentra en sus metros cuadrados, 
            sino en su alma.
            <br/><br/>
            Seleccionamos inmuebles que han resistido generaciones:
            palacetes restaurados, penthouses con historia y fincas centenarias 
            donde cada muro narra un legado.
          </p>
        </div>

        <Separator className="my-12 max-w-sm mx-auto bg-primary h-[2px] rounded-full" />

        <h3 className="text-center font-headline text-4xl font-bold mb-12 animate-in fade-in duration-500">
          Servicios Exclusivos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.image_id);
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
