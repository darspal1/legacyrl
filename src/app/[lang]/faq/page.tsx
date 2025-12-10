import FAQPage from '../../faq/page';
import { Locale } from '../../../../i18n-config';

type FAQLangPageProps = {
  params: { lang: Locale }
}

export default function FAQLangPage({ params: { lang } }: FAQLangPageProps) {
    return <FAQPage params={{ lang }} />;
}
