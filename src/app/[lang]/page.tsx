import Home from '../page';
import { Locale } from '../../../i18n-config';

type LangHomeProps = {
  params: { lang: Locale };
}

export default function LangHome({ params }: LangHomeProps) {
    return <Home params={params} />;
}
