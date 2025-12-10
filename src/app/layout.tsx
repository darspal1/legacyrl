import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Rozua Point & Legacy',
  description: 'Donde el patrimonio encuentra su historia.',
};

const footerLinks = [
  { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
  { href: '/terminos-y-condiciones', label: 'Términos y Condiciones' },
  { href: '/gobernanza', label: 'Gobernanza' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto Privado' },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased film-grain">
        <main>{children}</main>
        <footer className="w-full bg-background text-foreground border-t border-accent/[.1] mt-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h3 className="font-headline text-xl text-primary">Rozua Point & Legacy</h3>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} — Todos los derechos reservados.</p>
              </div>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {footerLinks.map(link => (
                  <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}