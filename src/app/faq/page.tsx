import PageHeader from '@/components/page-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../i18n-config';

type FAQPageProps = {
  params: { lang: Locale }
}

export default async function FAQPage({ params: { lang } }: FAQPageProps) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.faqPage;
  const pageHeaderT = dictionary.pageHeader;

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title={t.title} backButtonText={pageHeaderT.backButton}/>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
           <div className="max-w-4xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                {t.intro}
              </p>
            </div>
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-accent/[.15]">
                <AccordionTrigger className="font-headline text-lg text-left hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-md text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
