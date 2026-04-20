
import Home from '../page';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type LangHomeProps = {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: LangHomeProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.splash.seo.title,
    description: dictionary.splash.seo.description,
  };
}

export default function LangHome({ params }: LangHomeProps) {
    return <Home params={params} />;
}
