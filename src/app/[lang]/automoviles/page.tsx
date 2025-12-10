import AutomovilesPage from '../../automoviles/page';
import { Locale } from '../../../../i18n-config';

type AutomovilesLangPageProps = {
  params: { lang: Locale }
}

export default function AutomovilesLangPage({ params: { lang } }: AutomovilesLangPageProps) {
    return <AutomovilesPage params={{ lang }} />;
}
