import PageHeader from '@/components/page-header';

export default function AutomovilesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader title="Automóviles" />
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="font-body text-2xl text-muted-foreground">Ingeniería convertida en arte.</h2>
        <p className="mt-8 text-lg font-body max-w-2xl mx-auto">
          Modelos icónicos, piezas de colección y superdeportivos de edición limitada. Automóviles donde la ingeniería se encuentra con la herencia. Contenido sobre Automoción de Prestigio próximamente.
        </p>
      </div>
    </main>
  );
}
