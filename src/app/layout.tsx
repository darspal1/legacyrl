import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../i18n-config';
import LanguageSwitcher from '@/components/language-switcher';
import { ShieldCheck, Lock, Handshake, Gem, Library, Scale, KeyRound, DatabaseZap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';


export const metadata: Metadata = {
  title: 'Rozua Point & Legacy',
  description: 'Donde el patrimonio encuentra su historia.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: Locale };
}>) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const footerLinks = [
    { href: `/${lang}/politica-de-privacidad`, label: dictionary.footer.privacy },
    { href: `/${lang}/terminos-y-condiciones`, label: dictionary.footer.terms },
    { href: `/${lang}/gobernanza`, label: dictionary.footer.governance },
    { href: `/${lang}/faq`, label: dictionary.footer.faq },
    { href: `/${lang}/contacto`, label: dictionary.footer.contact },
  ];
  const seals = [
    { icon: ShieldCheck, text: "Chamber of Commerce Seal" },
    { icon: Lock, text: "SSL Encrypted Website" },
    { icon: Handshake, text: "Confidentiality & Discretion Commitment" },
    { icon: Gem, text: "Trusted Heritage Business" },
    { icon: Library, text: "Private Investment Standards" },
    { icon: Scale, text: "Ethical Governance Principles" },
    { icon: KeyRound, text: "Members-Only Access · Private Clients" },
    { icon: DatabaseZap, text: "Data Protection Commitment" },
  ];

  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased film-grain" suppressHydrationWarning>
        <header className="absolute top-0 right-0 p-4 z-20">
          <LanguageSwitcher />
        </header>
        <main>{children}</main>
        <footer className="w-full bg-background text-foreground border-t border-accent/[.1] mt-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h3 className="font-headline text-xl text-primary">Rozua Point & Legacy</h3>
                <p className="text-sm text-muted-foreground">{dictionary.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
              </div>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {footerLinks.map(link => (
                  <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <Separator className="my-8 bg-accent/10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
              {seals.map((seal) => (
                <div key={seal.text} className="flex items-center gap-3">
                  <seal.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">{seal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
