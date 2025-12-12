import VinosPage from '../../vinos/page';
import { Locale } from '../../../../i18n-config';

type ViniLangPageProps = {
  params: { lang: Locale }
}

export default function ViniLangPage({ params }: ViniLangPageProps) {
    return <VinosPage params={params} />;
}
