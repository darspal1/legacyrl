
import InmueblesPage from '../../inmuebles/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type InmueblesLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: InmueblesLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.realEstatePage.seo.title,
    description: dictionary.realEstatePage.seo.description,
  };
}

export default async function InmueblesLangPage({ params }: InmueblesLangPageProps) {
    const { lang } = await params;
    return <InmueblesPage params={{ lang }} />;
}
