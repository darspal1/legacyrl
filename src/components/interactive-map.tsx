'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';

type RegionData = {
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
};

type RegionId = 'north-america' | 'south-america' | 'europe' | null;

export default function InteractiveMap({ regions, mapImage }: InteractiveMapProps) {
  const [activeRegion, setActiveRegion] = useState<RegionId>(null);

  const regionIdMap: { [key: string]: RegionId } = {
    'Sudamérica': 'south-america',
    'South America': 'south-america',
    'Amérique du Sud': 'south-america',
    'Norteamérica': 'north-america',
    'North America': 'north-america',
    'Amérique du Nord': 'north-america',
    'Europa': 'europe',
    'Europe': 'europe',
  };

  const handleRegionHover = (regionKey: string | undefined) => {
    if (!regionKey) {
      setActiveRegion(null);
      return;
    }
    const regionId = regionIdMap[regionKey];
    setActiveRegion(regionId);
  };
  
  const getRegionData = (id: RegionId): RegionData | undefined => {
    if (!id) return undefined;
    const regionKey = Object.keys(regionIdMap).find(key => regionIdMap[key] === id);
    return regions.find(r => r.title === regionKey);
  }

  const activeRegionData = getRegionData(activeRegion);

  const renderRegionInfo = (regionData: RegionData | undefined) => {
    if (!regionData) {
      return (
        <div className="text-center text-muted-foreground p-8">
          <p className="font-body text-lg">Pase el cursor sobre una región para ver los detalles.</p>
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
                <h4 className="font-body font-bold text-lg">{regionData.directorLabel}</h4>
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
                  <h4 className="font-body font-bold text-lg">{regionData.subDirectorLabel}</h4>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          fill
          className="object-contain opacity-20 sepia"
          data-ai-hint={mapImage.imageHint}
        />
        <svg viewBox="0 0 1000 550" className="absolute inset-0 w-full h-full fill-transparent stroke-foreground/40 stroke-[1.5]" onMouseLeave={() => handleRegionHover(undefined)}>
            {/* Europe */}
            <path 
              d="M518 135 L525 120 L540 118 L555 130 L560 150 L545 160 L520 150 Z" 
              onMouseEnter={() => handleRegionHover('Europe')}
              className={`transition-all duration-300 ${activeRegion === 'europe' ? 'fill-primary/30 stroke-primary' : 'hover:fill-primary/20'}`}
            />
            {/* North America */}
            <path 
              d="M140 100 L250 80 L350 100 L380 180 L280 230 L160 200 Z"
              onMouseEnter={() => handleRegionHover('North America')}
              className={`transition-all duration-300 ${activeRegion === 'north-america' ? 'fill-primary/30 stroke-primary' : 'hover:fill-primary/20'}`}
            />
            {/* South America */}
            <path 
              d="M280 260 L350 250 L400 320 L350 420 L300 380 Z"
              onMouseEnter={() => handleRegionHover('South America')}
              className={`transition-all duration-300 ${activeRegion === 'south-america' ? 'fill-primary/30 stroke-primary' : 'hover:fill-primary/20'}`}
            />
        </svg>
      </div>

      <div className="min-h-[350px]">
        <Card className="h-full border-accent/[.1] bg-card text-card-foreground shadow-xl shadow-black/5 transition-all duration-500">
          {renderRegionInfo(activeRegionData)}
        </Card>
      </div>
    </div>
  );
}
