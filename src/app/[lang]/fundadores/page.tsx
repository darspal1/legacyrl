import FundadoresPage from '../../fundadores/page';
import { Locale } from '../../../../i18n-config';

type FundadoresLangPageProps = {
  params: { lang: Locale }
}

export default function FundadoresLangPage({ params }: FundadoresLangPageProps) {
    return <FundadoresPage params={params} />;
}
