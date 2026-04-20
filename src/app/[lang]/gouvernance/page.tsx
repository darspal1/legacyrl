import GobernanzaPage from '../../gobernanza/page';
import { Locale } from '../../../../i18n-config';

type GouvernanceLangPageProps = {
  params: { lang: Locale }
}

export default function GouvernanceLangPage({ params }: GouvernanceLangPageProps) {
    return <GobernanzaPage params={params} />;
}