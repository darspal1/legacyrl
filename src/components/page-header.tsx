import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="w-full p-4 md:p-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground md:absolute md:left-0">
          <Link href="/#menu">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Menú
          </Link>
        </Button>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center flex-grow">
          {title}
        </h1>
        <div className="hidden md:block" />
      </div>
    </header>
  );
}
