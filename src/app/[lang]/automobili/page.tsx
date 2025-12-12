import AutomovilesPage from '../../automoviles/page';
import { Locale } from '../../../../i18n-config';

type AutomobiliLangPageProps = {
  params: { lang: Locale }
}

export default function AutomobiliLangPage({ params }: AutomobiliLangPageProps) {
    return <AutomovilesPage params={params} />;
}
