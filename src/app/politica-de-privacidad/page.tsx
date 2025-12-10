'use client'
import PageHeader from '@/components/page-header';

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Política de Privacidad" />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-h2:font-headline prose-h2:text-primary prose-h2:border-b prose-h2:border-accent/[.2] prose-h2:pb-2 prose-p:font-body prose-p:text-muted-foreground prose-a:text-primary">
          
          <p>
            En Rozua Point & Legacy, la confidencialidad y la protección de sus datos son pilares fundamentales de nuestra relación. Esta política describe cómo se recopila, utiliza y protege su información personal.
          </p>

          <h2>Información que Recopilamos</h2>
          <p>
            Recopilamos únicamente la información necesaria para establecer contacto y entender sus intereses de inversión, tal como se solicita en nuestro formulario de contacto privado. Esto puede incluir su nombre, correo electrónico, país e intereses. No recopilamos datos sensibles de forma automática.
          </p>
          
          <h2>Uso de la Información</h2>
          <p>
            Su información se utiliza exclusivamente para fines de comunicación profesional. Esto incluye responder a sus consultas, coordinar reuniones y proporcionar información relevante sobre nuestras áreas de especialización. Jamás venderemos, alquilaremos o compartiremos su información personal con terceros no autorizados.
          </p>

          <h2>Seguridad y Confidencialidad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas razonables para proteger su información contra el acceso no autorizado, la alteración o la divulgación. La comunicación se maneja a través de canales seguros y el acceso a sus datos está restringido al personal directivo autorizado.
          </p>

          <h2>Cookies y Tecnologías de Rastreo</h2>
          <p>
            Nuestro sitio web utiliza cookies esenciales para mejorar su experiencia de navegación, como mantener sus preferencias de tema (claro/oscuro). No utilizamos cookies de rastreo con fines publicitarios ni compartimos datos de navegación con terceros para dichos fines.
          </p>
          
          <h2>Sus Derechos</h2>
          <p>
            Usted tiene derecho a solicitar acceso, rectificación o eliminación de sus datos personales que obren en nuestro poder. Para ejercer estos derechos, por favor contáctenos a través de los canales de comunicación establecidos.
          </p>

          <h2>Cambios en la Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página y entrará en vigor de inmediato.
          </p>
        </div>
      </div>
    </main>
  );
}
