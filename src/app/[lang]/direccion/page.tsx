
import DireccionPage from '../../direccion/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type DireccionLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: DireccionLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.directionPage.seo.title,
    description: dictionary.directionPage.seo.description,
  };
}

export default async function DireccionLangPage({ params }: DireccionLangPageProps) {
    const { lang } = await params;
    return <DireccionPage params={{ lang }} />;
}
