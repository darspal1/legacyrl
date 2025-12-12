'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../i18n-config';
import { useEffect, useState } from 'react';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const imageMap: { [key: string]: string } = {
  Wines: 'card-vinos',
  Vins: 'card-vinos',
  Vinos: 'card-vinos',
  Vini: 'card-vinos',
  Automobiles: 'card-automoviles',
  Automóviles: 'card-automoviles',
  Automobili: 'card-automoviles',
  'Real Estate': 'card-inmuebles',
  Immobilier: 'card-inmuebles',
  Inmuebles: 'card-inmuebles',
  Immobili: 'card-inmuebles',
  Founders: 'card-fundadores',
  Fondateurs: 'card-fundadores',
  Fundadores: 'card-fundadores',
  Fondatori: 'card-fundadores',
  Direction: 'card-direccion',
  Dirección: 'card-direccion',
  Direzione: 'card-direccion',
  Contact: 'card-contacto',
  Contacto: 'card-contacto',
  Contatto: 'card-contacto',
};


export default function MainMenu() {
  const pathname = usePathname();
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [lang, setLang] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const langSegment = (pathname.split('/')[1] || i18n.defaultLocale) as Locale;
    const currentLang = i18n.locales.includes(langSegment) ? langSegment : i18n.defaultLocale;
    setLang(currentLang);
    getDictionary(currentLang).then(setDictionary);
  }, [pathname]);

  if (!dictionary) return null;

  const menuItems = dictionary.mainMenu.items;
  
  const getHref = (itemHref: string) => {
    if (lang === i18n.defaultLocale) {
      return itemHref;
    }
    return `/${lang}${itemHref}`;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
      <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {menuItems.map((item, index) => {
          const image = PlaceHolderImages.find(p => p.id === imageMap[item.title]);
          const href = getHref(item.href);
          
          return (
            <Link 
              href={href} 
              key={item.title} 
              className="group block animate-in fade-in zoom-in-95" 
              style={{ animationDelay: `${index * 150}ms`, animationDuration: '500ms' }}
            >
              <Card className="relative h-[60vh] max-h-[700px] min-h-[500px] overflow-hidden border border-accent/[.2] bg-card text-card-foreground shadow-lg shadow-black/5 transition-all duration-500 ease-in-out hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
                {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description || item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
