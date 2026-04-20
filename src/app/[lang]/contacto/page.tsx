
import ContactoPage from '../../contacto/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type ContactoLangPageProps = {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: ContactoLangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.contactPage.seo.title,
    description: dictionary.contactPage.seo.description,
  };
}

export default async function ContactoLangPage({ params }: ContactoLangPageProps) {
    const { lang } = await params;
    return <ContactoPage />;
}
