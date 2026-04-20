
import DireccionPage from '../../direccion/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type DireccionLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: DireccionLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.directionPage.seo.title,
    description: dictionary.directionPage.seo.description,
  };
}

export default function DireccionLangPage({ params }: DireccionLangPageProps) {
    return <DireccionPage params={params} />;
}
