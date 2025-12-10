import FAQPage from '../../faq/page';
import { Locale } from '../../../../i18n-config';

type FAQLangPageProps = {
  params: { lang: Locale }
}

export default function FAQLangPage({ params }: FAQLangPageProps) {
    return <FAQPage params={params} />;
}
