import DireccionPage from '../../direccion/page';
import { Locale } from '../../../../i18n-config';

type DireccionLangPageProps = {
  params: { lang: Locale }
}

export default function DireccionLangPage({ params: { lang } }: DireccionLangPageProps) {
    return <DireccionPage params={{ lang }} />;
}
