import PoliticaDePrivacidadPage from '../../politica-de-privacidad/page';
import { Locale } from '../../../../i18n-config';

type PoliticaSullaPrivacyLangPageProps = {
  params: { lang: Locale }
}

export default function PoliticaSullaPrivacyLangPage({ params }: PoliticaSullaPrivacyLangPageProps) {
    return <PoliticaDePrivacidadPage params={params} />;
}
