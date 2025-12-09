import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="relative w-full p-4 md:p-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Menú
          </Link>
        </Button>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground absolute left-1/2 -translate-x-1/2">
          {title}
        </h1>
        <div /> 
      </div>
    </header>
  );
}
