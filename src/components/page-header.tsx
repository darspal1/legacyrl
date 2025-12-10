'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { i18n } from '../../i18n-config';

type PageHeaderProps = {
  title: string;
  backButtonText?: string;
};

export default function PageHeader({ title, backButtonText = "Volver al Menú" }: PageHeaderProps) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const homeHref = i18n.locales.includes(lang as any) && lang !== i18n.defaultLocale ? `/${lang}/#menu` : '/#menu';

  return (
    <header className="w-full p-4 md:p-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground md:absolute md:left-0">
          <Link href={homeHref}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backButtonText}
          </Link>
        </Button>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center flex-grow">
          {title}
        </h1>
        <div className="hidden md:block w-48" /> 
      </div>
    </header>
  );
}
