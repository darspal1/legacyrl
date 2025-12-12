import HomePageContent from './home-page-content';
import { i18n, type Locale } from '../../i18n-config';

type HomeProps = {
  params?: { lang: Locale };
};

export default function Home({ params }: HomeProps) {
  return <HomePageContent />;
}
