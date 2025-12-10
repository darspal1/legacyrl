import PageHeader from '@/components/page-header';
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../../i18n-config';

type TerminosYCondicionesPageProps = {
  params: { lang?: Locale }
}

export default async function TerminosYCondicionesPage({ params }: TerminosYCondicionesPageProps) {
  const lang = params?.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.termsPage;
  const pageHeaderT = dictionary.pageHeader;

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title={t.title} backButtonText={pageHeaderT.backButton}/>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-h2:font-headline prose-h2:text-primary prose-h2:border-b prose-h2:border-accent/[.2] prose-h2:pb-2 prose-p:font-body prose-p:text-muted-foreground prose-a:text-primary">
          
          <p>
            {t.intro}
          </p>

          {t.sections.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
