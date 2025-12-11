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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl font-bold mb-4">{t.title}</h2>
        <p className="text-center font-body text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">{t.subtitle}</p>
        <Separator className="my-12 max-w-sm mx-auto bg-primary h-px rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-5"
              style={{animationDelay: `${index * 150}ms`, animationDuration: '700ms'}}
            >
              <Card className="h-full border-accent/[.1] bg-transparent shadow-none text-center">
                <CardContent className="p-8">
                  <p className="font-body text-lg text-foreground mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-headline text-xl font-bold text-primary">{testimonial.author}</p>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}