import AutomovilesPage from '../../automoviles/page';
import { Locale } from '../../../../i18n-config';

type AutomobilesLangPageProps = {
  params: { lang: Locale }
}

export default function AutomobilesLangPage({ params }: AutomobilesLangPageProps) {
    return <AutomovilesPage params={params} />;
}