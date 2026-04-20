
import FAQPage from '../../faq/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type FAQLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: FAQLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.faqPage.seo.title,
    description: dictionary.faqPage.seo.description,
  };
}

export default async function FAQLangPage({ params }: FAQLangPageProps) {
    const { lang } = await params;
    return <FAQPage params={{ lang }} />;
}
