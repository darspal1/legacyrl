
import VinosPage from '../../vinos/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type VinosLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: VinosLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.winesPage.seo.title,
    description: dictionary.winesPage.seo.description,
  };
}

export default async function ViniLangPage({ params }: VinosLangPageProps) {
    const { lang } = await params;
    return <VinosPage params={{ lang }} />;
}
