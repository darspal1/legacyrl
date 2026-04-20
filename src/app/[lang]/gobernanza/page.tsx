
import GobernanzaPage from '../../gobernanza/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type GobernanzaLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: GobernanzaLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.governancePage.seo.title,
    description: dictionary.governancePage.seo.description,
  };
}

export default async function GobernanzaLangPage({ params }: GobernanzaLangPageProps) {
    const { lang } = await params;
    return <GobernanzaPage params={{ lang }} />;
}
