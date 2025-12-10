import GobernanzaPage from '../../gobernanza/page';
import { Locale } from '../../../../i18n-config';

type GobernanzaLangPageProps = {
  params: { lang: Locale }
}

export default function GobernanzaLangPage({ params: { lang } }: GobernanzaLangPageProps) {
    return <GobernanzaPage params={{ lang }} />;
}
