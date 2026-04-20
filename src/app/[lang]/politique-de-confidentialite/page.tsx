import PoliticaDePrivacidadPage from '../../politica-de-privacidad/page';
import { Locale } from '../../../../i18n-config';

type PolitiqueDeConfidentialiteLangPageProps = {
  params: { lang: Locale }
}

export default function PolitiqueDeConfidentialiteLangPage({ params }: PolitiqueDeConfidentialiteLangPageProps) {
    return <PoliticaDePrivacidadPage params={params} />;
}