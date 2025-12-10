'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Por favor ingrese un email válido.' }),
  country: z.string().min(2, { message: 'El país es requerido.' }),
  interest: z.enum(['Automóviles', 'Inmuebles', 'Vinos', 'Otro']),
  callMethod: z.enum(['Skype', 'Zoom', 'Google Meet', 'Teams']),
  callId: z.string().min(2, { message: 'Su ID/usuario es requerido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export default function ContactoPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      country: '',
      interest: 'Automóviles',
      callMethod: 'Skype',
      callId: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = `Solicitud de Contacto Privado: ${values.interest}`;
    const body = `
      Nombre Completo: ${values.fullName}
      Email: ${values.email}
      País de Residencia: ${values.country}
      Área de Interés: ${values.interest}
      Método de Llamada: ${values.callMethod}
      Usuario/ID: ${values.callId}
      
      Mensaje:
      ${values.message}
    `;

    const mailtoLink = `mailto:contact@rozua-legacy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Solicitud preparada.",
      description: "Su cliente de correo se abrirá para enviar la solicitud.",
    });
  }

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-contacto');
  
  if (!isMounted) {
    return null; // o un spinner de carga
  }

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title="Contacto Privado" />
      
      <div className="relative h-[50vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h2 className="font-body text-4xl md:text-5xl text-white/90 text-center animate-in fade-in slide-in-from-bottom-5 duration-1000 px-4">
            Atención personalizada para quienes valoran la discreción.
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            En Rozua Point & Legacy ofrecemos un servicio de atención privada y personalizada.
            Complete el siguiente formulario y uno de nuestros directores se pondrá en contacto
            para coordinar una videoconferencia a través de Skype u otra plataforma segura.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Su nombre y apellido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email corporativo o personal</FormLabel>
                      <FormControl>
                        <Input placeholder="sudireccion@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>País de residencia</FormLabel>
                    <FormControl>
                      <Input placeholder="País desde donde nos contacta" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Área de interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un área" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Automóviles">Automóviles</SelectItem>
                          <SelectItem value="Inmuebles">Inmuebles</SelectItem>
                          <SelectItem value="Vinos">Vinos</SelectItem>
                          <SelectItem value="Otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="callMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Método preferido de llamada</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione una plataforma" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Skype">Skype</SelectItem>
                          <SelectItem value="Zoom">Zoom</SelectItem>
                          <SelectItem value="Google Meet">Google Meet</SelectItem>
                          <SelectItem value="Teams">Teams</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="callId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario o ID de videollamada</FormLabel>
                    <FormControl>
                      <Input placeholder="Su ID para la plataforma elegida" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escriba aquí su consulta o la razón de su contacto."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  className="font-headline tracking-widest text-xl px-10 py-7 bg-primary/90 text-primary-foreground border border-primary-foreground/20 rounded-sm hover:bg-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.8)] transition-all duration-300 ease-in-out"
                >
                  Enviar Solicitud
                </Button>
              </div>
            </form>
          </Form>

          <div className="text-center mt-12 text-xs text-muted-foreground/80 animate-in fade-in duration-1000">
            <p>Toda la información enviada será tratada con estricta confidencialidad.</p>
            <p>Las reuniones se coordinan únicamente con fines profesionales.</p>
          </div>
        </div>
      </div>
    </main>
  );
}