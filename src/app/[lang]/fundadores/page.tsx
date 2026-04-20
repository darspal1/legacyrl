
import FundadoresPage from '../../fundadores/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type FundadoresLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: FundadoresLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.foundersPage.seo.title,
    description: dictionary.foundersPage.seo.description,
  };
}

export default async function FundadoresLangPage({ params }: FundadoresLangPageProps) {
    const { lang } = await params;
    return <FundadoresPage params={{ lang }} />;
}
