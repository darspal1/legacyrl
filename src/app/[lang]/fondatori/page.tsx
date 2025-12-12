import FundadoresPage from '../../fundadores/page';
import { Locale } from '../../../../i18n-config';

type FondatoriLangPageProps = {
  params: { lang: Locale }
}

export default function FondatoriLangPage({ params }: FondatoriLangPageProps) {
    return <FundadoresPage params={params} />;
}
