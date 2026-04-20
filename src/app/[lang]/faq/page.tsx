
import FAQPage from '../../faq/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type FAQLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: FAQLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.faqPage.seo.title,
    description: dictionary.faqPage.seo.description,
  };
}

export default function FAQLangPage({ params }: FAQLangPageProps) {
    return <FAQPage params={params} />;
}
