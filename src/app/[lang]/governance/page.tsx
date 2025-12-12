import GobernanzaPage from '../../gobernanza/page';
import { Locale } from '../../../../i18n-config';

type GovernanceLangPageProps = {
  params: { lang: Locale }
}

export default function GovernanceLangPage({ params }: GovernanceLangPageProps) {
    return <GobernanzaPage params={params} />;
}
