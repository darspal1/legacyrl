import { getDictionary } from '@/dictionaries';
import { i18n, type Locale } from '../../i18n-config';
import HomePageContent from './home-page-content';

type HomeProps = {
  params?: { lang: Locale };
};

export default async function Home({ params }: HomeProps) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);

  return <HomePageContent dictionary={dictionary} />;
}
