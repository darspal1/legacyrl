
import FundadoresPage from '../../fundadores/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type FundadoresLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: FundadoresLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.foundersPage.seo.title,
    description: dictionary.foundersPage.seo.description,
  };
}

export default function FundadoresLangPage({ params }: FundadoresLangPageProps) {
    return <FundadoresPage params={params} />;
}
