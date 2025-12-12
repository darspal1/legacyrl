import DireccionPage from '../../direccion/page';
import { Locale } from '../../../../i18n-config';

type DirezioneLangPageProps = {
  params: { lang: Locale }
}

export default function DirezioneLangPage({ params }: DirezioneLangPageProps) {
    return <DireccionPage params={params} />;
}
