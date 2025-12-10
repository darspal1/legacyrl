import { i18n, Locale } from '../../../i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function LangLayout({
  children
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return <>{children}</>;
}
