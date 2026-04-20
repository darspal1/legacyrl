
import Home from '../page';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type LangHomeProps = {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: LangHomeProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  if (!dictionary.splash || !dictionary.splash.seo) {
    return {
      title: 'R.L. Legacy S.A.',
      description: 'Custodios del buen vivir y arquitectos de legados familiares.',
    };
  }

  return {
    title: dictionary.splash.seo.title,
    description: dictionary.splash.seo.description,
  };
}

export default async function LangHome({ params }: LangHomeProps) {
    const { lang } = await params;
    return <Home params={{ lang }} />;
}
