'use client'
import PageHeader from '@/components/page-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿En qué áreas de inversión se especializa Rozua Point & Legacy?",
    answer: "Nuestra firma se concentra en tres pilares de inversión patrimonial: Vinos de colección y añadas singulares; Automóviles icónicos y de producción limitada; e Inmuebles con valor histórico y arquitectónico. Cada área es gestionada por curadores y especialistas dedicados."
  },
  {
    question: "¿Cómo garantizan la confidencialidad de sus clientes?",
    answer: "La discreción es el fundamento de nuestra firma. Toda comunicación e información del cliente es tratada bajo los más estrictos protocolos de confidencialidad. No compartimos datos con terceros y utilizamos plataformas seguras para todas las interacciones."
  },
  {
    question: "¿Qué tipo de trato puedo esperar como cliente?",
    answer: "Ofrecemos un servicio de atención directa y personalizada. Cada cliente es asignado a un director de la firma, quien actúa como único punto de contacto para asegurar una comunicación fluida, una comprensión profunda de sus objetivos y una ejecución impecable."
  },
  {
    question: "¿Cómo puedo iniciar una conversación con la firma?",
    answer: "Para iniciar una consulta, le invitamos a utilizar nuestro formulario en la sección de 'Contacto Privado'. Uno de nuestros directores revisará su solicitud y se pondrá en contacto para coordinar una videoconferencia privada en la plataforma de su elección."
  },
    {
    question: "¿Invierten en activos financieros tradicionales?",
    answer: "No. Nuestro enfoque se centra exclusivamente en activos tangibles y pasionales con potencial de revalorización a largo plazo. Creemos en el valor del legado, la historia y la artesanía como pilares de una cartera patrimonial sólida."
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Preguntas Frecuentes" />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
           <div className="max-w-4xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                A continuación, respondemos algunas de las consultas más habituales sobre nuestra firma, nuestros principios y nuestro método de trabajo.
              </p>
            </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
