import FundadoresPage from '../../fundadores/page';
import { Locale } from '../../../../i18n-config';

type FondateursLangPageProps = {
  params: { lang: Locale }
}

export default function FondateursLangPage({ params }: FondateursLangPageProps) {
    return <FundadoresPage params={params} />;
}