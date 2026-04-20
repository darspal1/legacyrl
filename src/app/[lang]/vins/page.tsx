import VinosPage from '../../vinos/page';
import { Locale } from '../../../../i18n-config';

type VinsLangPageProps = {
  params: { lang: Locale }
}

export default function VinsLangPage({ params }: VinsLangPageProps) {
    return <VinosPage params={params} />;
}