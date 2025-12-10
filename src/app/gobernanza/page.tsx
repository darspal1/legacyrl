'use client'
import PageHeader from '@/components/page-header';

const principles = [
  {
    title: "Código Ético Inquebrantable",
    description: "Nuestras operaciones se rigen por un código de conducta que prioriza la integridad, la honestidad y la transparencia. Cada decisión, desde la adquisición de un activo hasta la comunicación con el cliente, se somete a los más altos estándares éticos."
  },
  {
    title: "Visión de Legado a Largo Plazo",
    description: "No buscamos rendimientos efímeros. Nuestra estrategia de inversión y gestión se fundamenta en la preservación y el crecimiento del capital a través de generaciones, asegurando que el patrimonio trascienda en el tiempo."
  },
  {
    title: "Compromiso con la Excelencia",
    description: "La excelencia es la norma, no la excepción. Desde la curaduría de nuestros activos hasta el servicio al cliente, nos comprometemos a ofrecer una calidad superlativa en cada faceta de nuestra firma."
  },
  {
    title: "Confidencialidad como Pilar",
    description: "La privacidad de nuestros clientes es sagrada. Implementamos rigurosas medidas de seguridad y protocolos de discreción para garantizar que toda interacción y dato sea manejado con la máxima confidencialidad."
  }
]

export default function GobernanzaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Gobernanza Corporativa" />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            La estructura de Rozua Point & Legacy se cimienta en principios de gobernanza que garantizan la alineación de intereses, la gestión prudente del riesgo y un compromiso ineludible con la protección del patrimonio de nuestros clientes. Nuestra visión no es solo invertir, sino custodiar y engrandecer legados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div key={index} className="border border-accent/[.15] p-6 rounded-sm">
              <h3 className="font-headline text-2xl text-primary mb-3">{principle.title}</h3>
              <p className="font-body text-md text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h3 className="font-headline text-3xl text-foreground mb-4">Estructura de Supervisión</h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Aunque la composición de nuestro comité directivo y de inversiones es de carácter privado, su estructura está diseñada para asegurar una supervisión independiente, una toma de decisiones colegiada y una auditoría constante de los procesos. Los intereses de nuestros clientes son y serán siempre nuestra máxima prioridad.
            </p>
        </div>

      </div>
    </main>
  );
}
