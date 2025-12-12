import TerminosYCondicionesPage from '../../terminos-y-condiciones/page';
import { Locale } from '../../../../i18n-config';

type TerminiECondizioniLangPageProps = {
  params: { lang: Locale }
}

export default function TerminiECondizioniLangPage({ params }: TerminiECondizioniLangPageProps) {
    return <TerminosYCondicionesPage params={params} />;
}
