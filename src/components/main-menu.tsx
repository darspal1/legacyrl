import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const menuItems = [
  {
    href: '/vinos',
    title: 'Vinos',
    subtitle: 'El tiempo, capturado en una botella.',
    image_id: 'card-vinos',
  },
  {
    href: '/automoviles',
    title: 'Automóviles',
    subtitle: 'Ingeniería convertida en arte.',
    image_id: 'card-automoviles',
  },
  {
    href: '/inmuebles',
    title: 'Inmuebles',
    subtitle: 'Muros que han visto la historia pasar.',
    image_id: 'card-inmuebles',
  },
];

export default function MainMenu() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {menuItems.map((item, index) => {
          const image = PlaceHolderImages.find(p => p.id === item.image_id);
          return (
            <Link 
              href={item.href} 
              key={item.title} 
              className="group block animate-in fade-in zoom-in-95" 
              style={{ animationDelay: `${index * 200}ms`, animationDuration: '500ms' }}
            >
              <Card className="relative h-[60vh] max-h-[700px] min-h-[500px] overflow-hidden border border-accent/[.2] bg-card text-card-foreground shadow-lg shadow-black/5 transition-all duration-500 ease-in-out hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description || item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <CardContent className="relative flex h-full flex-col justify-end p-8 text-white">
                  <h3 className="font-headline text-4xl font-bold transition-transform duration-500 group-hover:-translate-y-2">{item.title}</h3>
                  <p className="font-body text-lg text-white/80 opacity-0 max-w-[90%] transition-opacity duration-500 delay-100 group-hover:opacity-100">{item.subtitle}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
