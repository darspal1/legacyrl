import VinosPage from '../../vinos/page';
import { Locale } from '../../../../i18n-config';

type VinosLangPageProps = {
  params: { lang: Locale }
}

export default function VinosLangPage({ params }: VinosLangPageProps) {
    return <VinosPage params={params} />;
}
