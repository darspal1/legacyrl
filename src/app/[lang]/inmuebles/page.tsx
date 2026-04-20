
import InmueblesPage from '../../inmuebles/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type InmueblesLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: InmueblesLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.realEstatePage.seo.title,
    description: dictionary.realEstatePage.seo.description,
  };
}

export default function InmueblesLangPage({ params }: InmueblesLangPageProps) {
    return <InmueblesPage params={params} />;
}
