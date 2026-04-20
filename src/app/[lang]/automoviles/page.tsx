
import AutomovilesPage from '../../automoviles/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type AutomobilesLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: AutomobilesLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.automobilesPage.seo.title,
    description: dictionary.automobilesPage.seo.description,
  };
}

export default function AutomobilesLangPage({ params }: AutomobilesLangPageProps) {
    return <AutomovilesPage params={params} />;
}
