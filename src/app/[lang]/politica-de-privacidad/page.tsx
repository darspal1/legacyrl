import PoliticaDePrivacidadPage from '../../politica-de-privacidad/page';
import { Locale } from '../../../../i18n-config';

type PoliticaDePrivacidadLangPageProps = {
  params: { lang: Locale }
}

export default function PoliticaDePrivacidadLangPage({ params }: PoliticaDePrivacidadLangPageProps) {
    return <PoliticaDePrivacidadPage params={params} />;
}
