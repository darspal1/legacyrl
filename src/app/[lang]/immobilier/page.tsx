import InmueblesPage from '../../inmuebles/page';
import { Locale } from '../../../../i18n-config';

type ImmobilierLangPageProps = {
  params: { lang: Locale }
}

export default function ImmobilierLangPage({ params }: ImmobilierLangPageProps) {
    return <InmueblesPage params={params} />;
}