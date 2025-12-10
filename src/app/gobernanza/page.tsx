import PageHeader from '@/components/page-header';
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../i18n-config';

type GobernanzaPageProps = {
  params: { lang: Locale }
}

export default async function GobernanzaPage({ params: { lang } }: GobernanzaPageProps) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.governancePage;
  const pageHeaderT = dictionary.pageHeader;

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title={t.title} backButtonText={pageHeaderT.backButton} />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.principles.map((principle, index) => (
            <div key={index} className="border border-accent/[.15] p-6 rounded-sm">
              <h3 className="font-headline text-2xl text-primary mb-3">{principle.title}</h3>
              <p className="font-body text-md text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h3 className="font-headline text-3xl text-foreground mb-4">{t.supervisionTitle}</h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {t.supervisionText}
            </p>
        </div>

      </div>
    </main>
  );
}
