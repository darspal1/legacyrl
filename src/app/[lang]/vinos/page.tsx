import VinosPage from '../../vinos/page';
import { Locale } from '../../../../i18n-config';

type VinosLangPageProps = {
  params: { lang: Locale }
}

export default function VinosLangPage({ params: { lang } }: VinosLangPageProps) {
    return <VinosPage params={{ lang }} />;
}
