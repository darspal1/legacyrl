'use client'
import PageHeader from '@/components/page-header';

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Términos y Condiciones" />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-h2:font-headline prose-h2:text-primary prose-h2:border-b prose-h2:border-accent/[.2] prose-h2:pb-2 prose-p:font-body prose-p:text-muted-foreground prose-a:text-primary">
          
          <p>
            El acceso y uso de este sitio web, propiedad de Rozua Point & Legacy S.A., implica la aceptación de los siguientes términos y condiciones. Le rogamos que los lea atentamente.
          </p>

          <h2>1. Uso Permitido del Sitio</h2>
          <p>
            Este sitio web está destinado a proporcionar información sobre nuestros servicios y áreas de especialización. El contenido es para uso personal y no comercial. Queda prohibido cualquier uso del sitio que pueda dañar, deshabilitar, sobrecargar o perjudicar el mismo o interferir con el uso y disfrute por parte de terceros.
          </p>
          
          <h2>2. Propiedad Intelectual y Derechos de Autor</h2>
          <p>
            Todo el contenido de este sitio, incluyendo textos, gráficos, logotipos, imágenes y la selección y disposición de los mismos, es propiedad exclusiva de Rozua Point & Legacy S.A. o de sus licenciantes y está protegido por las leyes internacionales de derechos de autor. No se permite la reproducción, modificación, distribución o republicación de ningún contenido sin nuestro consentimiento previo por escrito.
          </p>

          <h2>3. Limitación de Responsabilidad</h2>
          <p>
            La información contenida en este sitio web se proporciona "tal cual" y con fines informativos generales. Si bien nos esforzamos por mantener la información actualizada y correcta, no ofrecemos garantías de ningún tipo, expresas o implícitas, sobre la integridad, exactitud, fiabilidad o idoneidad del contenido. En ningún caso seremos responsables de ninguna pérdida o daño, directo o indirecto, que surja del uso de este sitio web.
          </p>

          <h2>4. Prohibición de Uso Indebido</h2>
          <p>
            El usuario se compromete a no utilizar este sitio para fines ilícitos, fraudulentos o no autorizados. Esto incluye, entre otros, la transmisión de material difamatorio, la introducción de virus informáticos o la recopilación de información de otros usuarios sin su consentimiento.
          </p>
          
          <h2>5. Enlaces a Terceros</h2>
          <p>
            Este sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. No tenemos control sobre el contenido de dichos sitios y no asumimos ninguna responsabilidad por ellos.
          </p>

          <h2>6. Ley Aplicable y Jurisdicción</h2>
          <p>
             Cualquier disputa relacionada con estos términos y condiciones se regirá por las leyes de la jurisdicción principal de operaciones de la firma, sin tener en cuenta los conflictos de principios legales. 
          </p>
        </div>
      </div>
    </main>
  );
}
