import PageHeader from '@/components/page-header';

export default function VinosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader title="Vinos" />
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="font-body text-2xl text-muted-foreground">El tiempo, capturado en una botella.</h2>
        <p className="mt-8 text-lg font-body max-w-2xl mx-auto">
          Acceda a una curaduría de viñedos centenarios, ediciones limitadas y Grands Crus seleccionados bajo criterios de legado y excelencia. Contenido sobre Viticultura y Enología próximamente.
        </p>
      </div>
    </main>
  );
}
