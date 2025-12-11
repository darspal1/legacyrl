'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImagePlaceholder } from '@/lib/placeholder-images';
import { getDictionary } from '@/dictionaries';
import { cn } from '@/lib/utils';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type RegionData = {
  id: 'south-america' | 'north-america' | 'europe' | 'default';
  title: string;
  director: string;
  directorLabel: string;
  subDirector?: string;
  subDirectorLabel?: string;
  description: string;
  directorImage?: string;
  subDirectorImage?: string;
};

type InteractiveMapProps = {
  regions: RegionData[];
  mapImage: ImagePlaceholder;
  dictionary: Dictionary
};

export default function InteractiveMap({ regions, mapImage, dictionary }: InteractiveMapProps) {
  const [activeRegionId, setActiveRegionId] = useState<RegionData['id'] | null>(null);

  const activeRegionData = regions.find(r => r.id === activeRegionId) || regions.find(r => r.id === 'default');

  const renderRegionInfo = (regionData: RegionData | undefined) => {
    if (!regionData || regionData.id === 'default' || !activeRegionId) {
      return (
        <div className="text-center text-muted-foreground p-8 flex items-center justify-center h-full">
          <p className="font-body text-lg">{dictionary.directionPage.mapCta}</p>
        </div>
      );
    }
    
    return (
      <>
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary border-b-2 border-primary/20 pb-2">{regionData.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2 text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {regionData.directorImage && (
                <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                  <Image src={regionData.directorImage} alt={regionData.director} fill className="object-cover" sizes="80px" />
                </div>
              )}
              <div>
                <h4 className="font-body font-bold text-lg text-foreground/80">{regionData.directorLabel}</h4>
                <p className="font-body text-md text-foreground">{regionData.director}</p>
              </div>
            </div>

            {regionData.subDirector && regionData.subDirectorLabel && (
              <div className="flex items-center gap-4">
                {regionData.subDirectorImage && (
                  <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                    <Image src={regionData.subDirectorImage} alt={regionData.subDirector} fill className="object-cover" sizes="80px" />
                  </div>
                )}
                <div>
                  <h4 className="font-body font-bold text-lg text-foreground/80">{regionData.subDirectorLabel}</h4>
                  <p className="font-body text-md text-foreground">{regionData.subDirector}</p>
                </div>
              </div>
            )}
          </div>
          <p className="font-body text-sm text-muted-foreground mt-6">{regionData.description}</p>
        </CardContent>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto" onMouseLeave={() => setActiveRegionId(null)}>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          fill
          className="object-contain opacity-20 sepia pointer-events-none"
          data-ai-hint={mapImage.imageHint}
        />
        <svg viewBox="0 0 1000 550" className="absolute inset-0 w-full h-full fill-transparent stroke-foreground/40 stroke-[1.5]">
            {/* Europe */}
            <path 
              d="M518 135 L525 120 L540 118 L555 130 L560 150 L545 160 L520 150 Z" 
              onMouseEnter={() => setActiveRegionId('europe')}
              className={cn('transition-all duration-300 cursor-pointer', activeRegionId === 'europe' ? 'fill-primary/30 stroke-primary' : 'hover:fill-primary/20')}
            />
            {/* North America */}
            <path 
              d="M140 100 L250 80 L350 100 L380 180 L280 230 L160 200 Z"
              onMouseEnter={() => setActiveRegionId('north-america')}
              className={cn('transition-all duration-300 cursor-pointer', activeRegionId === 'north-america' ? 'fill-primary/30 stroke-primary' : 'hover:fill-primary/20')}
            />
            {/* South America */}
            <path 
              d="M280 260 L350 250 L400 320 L350 420 L300 380 Z"
              onMouseEnter={() => setActiveRegionId('south-america')}
              className={cn('transition-all duration-300 cursor-pointer', activeRegionId === 'south-america' ? 'fill-primary/30 stroke-primary' : 'hover:fill-primary/20')}
            />
        </svg>
      </div>

      <div className="min-h-[420px]">
        <Card className="h-full border-accent/[.1] bg-card text-card-foreground shadow-xl shadow-black/5 transition-all duration-500">
          {renderRegionInfo(activeRegionData)}
        </Card>
      </div>
    </div>
  );
}
