
import ContactoPage from '../../contacto/page';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';

type ContactoLangPageProps = {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: ContactoLangPageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.contactPage.seo.title,
    description: dictionary.contactPage.seo.description,
  };
}

export default function ContactoLangPage() {
    return <ContactoPage />;
}
