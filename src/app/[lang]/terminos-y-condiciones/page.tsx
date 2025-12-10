import TerminosYCondicionesPage from '../../terminos-y-condiciones/page';
import { Locale } from '../../../../i18n-config';

type TerminosYCondicionesLangPageProps = {
  params: { lang: Locale }
}

export default function TerminosYCondicionesLangPage({ params }: TerminosYCondicionesLangPageProps) {
    return <TerminosYCondicionesPage params={params} />;
}
