
import AutomovilesPage from '../../automoviles/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type AutomobilesLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: AutomobilesLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.automobilesPage.seo.title,
    description: dictionary.automobilesPage.seo.description,
  };
}

export default async function AutomobilesLangPage({ params }: AutomobilesLangPageProps) {
    const { lang } = await params;
    return <AutomovilesPage params={{ lang }} />;
}
