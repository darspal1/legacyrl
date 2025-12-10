import InmueblesPage from '../../inmuebles/page';
import { Locale } from '../../../../i18n-config';

type InmueblesLangPageProps = {
  params: { lang: Locale }
}

export default function InmueblesLangPage({ params }: InmueblesLangPageProps) {
    return <InmueblesPage params={params} />;
}
