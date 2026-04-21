// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../i18n-config';
import LanguageSwitcher from '@/components/language-switcher';
import { ShieldCheck, Lock, Handshake, Gem, Library, Scale, KeyRound, DatabaseZap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const siteConfig = {
  name: "R.L. Legacy S.A.",
  description: "Private investment firm specializing in tangible assets: historic real estate, collectible automobiles and fine wines. Preserving generational wealth with discretion and excellence.",
  url: "https://www.legacyrl.com", // corregido: con www, consistente con sitemap
  ogImage: "https://www.legacyrl.com/og-image.jpg",
};

// Schema JSON-LD para AIs y Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": `${siteConfig.url}/#organization`,
      "name": "R.L. Legacy S.A.",
      "alternateName": "Legacy RL",
      "url": siteConfig.url,
      "logo": `${siteConfig.url}/logo.png`,
      "image": siteConfig.ogImage,
      "description": siteConfig.description,
      "slogan": "Preserving generational wealth through tangible assets",
      "foundingLocation": {
        "@type": "Country",
        "name": "Italy"
      },
      "areaServed": [
        { "@type": "Country", "name": "Italy" },
        { "@type": "Country", "name": "Spain" },
        { "@type": "Country", "name": "France" },
        { "@type": "Continent", "name": "Europe" }
      ],
      "serviceType": [
        "Private Investment Management",
        "Wealth Preservation",
        "Tangible Asset Investment",
        "Real Estate Investment",
        "Collectible Automobiles Investment",
        "Fine Wine Investment"
      ],
      "knowsAbout": [
        "Private equity",
        "Tangible asset investment",
        "Historic real estate",
        "Collectible automobiles",
        "Investment-grade fine wines",
        "Generational wealth management",
        "Family office services"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Investment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Historic Real Estate Investment",
              "url": `${siteConfig.url}/inmuebles`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Collectible Automobiles Investment",
              "url": `${siteConfig.url}/automoviles`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fine Wine Investment",
              "url": `${siteConfig.url}/vinos`
            }
          }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/legacyrl", // actualizar con URL real
        "https://twitter.com/LegacyRLsa"             // actualizar con URL real
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": "R.L. Legacy S.A.",
      "description": siteConfig.description,
      "publisher": {
        "@id": `${siteConfig.url}/#organization`
      },
      "inLanguage": ["en", "es", "fr", "it"]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "private investment firm",
    "tangible assets",
    "wealth preservation",
    "historic real estate",
    "collectible automobiles",
    "fine wine investment",
    "generational wealth",
    "family office Italy",
    "private equity Europe",
    "patrimonio generacional"
  ],
  authors: [{ name: "R.L. Legacy S.A.", url: siteConfig.url }],
  creator: "R.L. Legacy S.A.",
  publisher: "R.L. Legacy S.A.",
  alternates: {
    canonical: "/",
    languages: {
      'x-default': '/',       // indica el default para Google
      'en': '/',              // en es el default, sin prefijo
      'es': '/es',
      'fr': '/fr',
      'it': '/it',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",          //  corregido: inglés como principal
    alternateLocale: ["es_ES", "fr_FR", "it_IT"], //  los 4 idiomas
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "R.L. Legacy S.A. — Private Investment Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LegacyRLsa",      // agregar cuando tengas la cuenta
    creator: "@LegacyRLsa",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: "TU_CODIGO_DE_VERIFICACION", // agregar desde Search Console
  },
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

  const getLink = (path: string) => {
    if (lang === i18n.defaultLocale) {
      return path;
    }
    return `/${lang}${path}`;
  }

  const footerLinks = [
    { href: getLink(dictionary.footer.privacyLink), label: dictionary.footer.privacy },
    { href: getLink(dictionary.footer.termsLink), label: dictionary.footer.terms },
    { href: getLink(dictionary.footer.governanceLink), label: dictionary.footer.governance },
    { href: getLink('/faq'), label: dictionary.footer.faq },
    { href: getLink(dictionary.footer.contactLink), label: dictionary.footer.contact },
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
        {/* Schema JSON-LD para Google y AIs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <main>{children}</main>
        <footer className="w-full bg-background text-foreground border-t border-accent/[.1] mt-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h3 className="font-headline text-xl text-primary">R.L. Legacy S.A.</h3>
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