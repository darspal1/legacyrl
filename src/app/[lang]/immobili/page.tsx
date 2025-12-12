import InmueblesPage from '../../inmuebles/page';
import { Locale } from '../../../../i18n-config';

type ImmobiliLangPageProps = {
  params: { lang: Locale }
}

export default function ImmobiliLangPage({ params }: ImmobiliLangPageProps) {
    return <InmueblesPage params={params} />;
}
