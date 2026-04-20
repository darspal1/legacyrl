import DireccionPage from '../../direccion/page';
import { Locale } from '../../../../i18n-config';

type DirectionLangPageProps = {
  params: { lang: Locale }
}

export default function DirectionLangPage({ params }: DirectionLangPageProps) {
    return <DireccionPage params={params} />;
}