
import GobernanzaPage from '../../gobernanza/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type GobernanzaLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: GobernanzaLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.governancePage.seo.title,
    description: dictionary.governancePage.seo.description,
  };
}

export default function GobernanzaLangPage({ params }: GobernanzaLangPageProps) {
    return <GobernanzaPage params={params} />;
}
