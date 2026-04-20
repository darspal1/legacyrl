
import VinosPage from '../../vinos/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type VinosLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: VinosLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.winesPage.seo.title,
    description: dictionary.winesPage.seo.description,
  };
}

export default function ViniLangPage({ params }: VinosLangPageProps) {
    return <VinosPage params={params} />;
}
