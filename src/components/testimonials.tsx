'use client';
import { Card, CardContent } from '@/components/ui/card';
import { getDictionary } from '@/dictionaries';
import { Separator } from '@/components/ui/separator';

type TestimonialsProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

export default function Testimonials({ dictionary }: TestimonialsProps) {
  const t = dictionary.testimonials;

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{t.title}</h2>
        <p className="text-center font-body text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        <Separator className="my-10 max-w-xs mx-auto bg-border h-[1px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-5"
              style={{animationDelay: `${index * 150}ms`, animationDuration: '700ms'}}
            >
              <Card className="h-full border border-border/70 bg-card text-center shadow-luxury-subtle transition-all duration-300 hover:shadow-luxury hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <p className="font-body text-base md:text-lg text-foreground/90 italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-headline text-xl font-bold text-primary-strong tracking-wide">{testimonial.author}</p>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}