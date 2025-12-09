import PageHeader from '@/components/page-header';

export default function InmueblesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader title="Inmuebles" />
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="font-body text-2xl text-muted-foreground">Muros que han visto la historia pasar.</h2>
        <p className="mt-8 text-lg font-body max-w-2xl mx-auto">
          Propiedades con carácter: palacetes restaurados, fincas históricas y residencias discretas diseñadas para trascender el tiempo. Contenido sobre Bienes Raíces y Fincas próximamente.
        </p>
      </div>
    </main>
  );
}
