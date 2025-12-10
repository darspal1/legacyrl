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
import { getDictionary } from '@/dictionaries';
import { Locale, i18n } from '../../../i18n-config';
import { usePathname } from 'next/navigation';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const formSchemaBuilder = (dictionary: Dictionary | undefined) => z.object({
  fullName: z.string().min(2, { message: dictionary?.contactPage.form.validation.fullName }),
  email: z.string().email({ message: dictionary?.contactPage.form.validation.email }),
  country: z.string().min(2, { message: dictionary?.contactPage.form.validation.country }),
  interest: z.enum(dictionary?.contactPage.form.interests as [string, ...string[]] || ['Automóviles', 'Inmuebles', 'Vinos', 'Otro']),
  callMethod: z.enum(dictionary?.contactPage.form.callMethods as [string, ...string[]] || ['Skype', 'Zoom', 'Google Meet', 'Teams']),
  callId: z.string().min(2, { message: dictionary?.contactPage.form.validation.callId }),
  message: z.string().min(10, { message: dictionary?.contactPage.form.validation.message }),
});


export default function ContactoPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();
  const pathname = usePathname();
  const [dictionary, setDictionary] = useState<Dictionary>();
  
  useEffect(() => {
    setIsMounted(true);
    const langSegment = pathname.split('/')[1]
    const lang = i18n.locales.includes(langSegment as any) ? langSegment as Locale : i18n.defaultLocale
    getDictionary(lang).then(setDictionary);
  }, [pathname]);

  const formSchema = formSchemaBuilder(dictionary);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      country: '',
      interest: dictionary?.contactPage.form.interests[0],
      callMethod: dictionary?.contactPage.form.callMethods[0],
      callId: '',
      message: '',
    },
  });
  
  useEffect(() => {
    if (dictionary) {
      form.reset({
        fullName: '',
        email: '',
        country: '',
        interest: dictionary.contactPage.form.interests[0],
        callMethod: dictionary.contactPage.form.callMethods[0],
        callId: '',
        message: '',
      });
    }
  }, [dictionary, form]);

  if (!isMounted || !dictionary) return null;

  const t = dictionary.contactPage;
  const pageHeaderT = dictionary.pageHeader;

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
      title: t.form.toastTitle,
      description: t.form.toastDescription,
    });
  }

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-contacto');

  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-1000">
      <PageHeader title={t.title} backButtonText={pageHeaderT.backButton}/>
      
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
            {t.hero}
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            {t.intro}
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
                      <FormLabel>{t.form.fullName}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.form.fullNamePlaceholder} {...field} />
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
                      <FormLabel>{t.form.email}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.form.emailPlaceholder} {...field} />
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
                    <FormLabel>{t.form.country}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.countryPlaceholder} {...field} />
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
                      <FormLabel>{t.form.interest}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.interestPlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {t.form.interests.map(interest => (
                            <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                          ))}
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
                      <FormLabel>{t.form.callMethod}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.callMethodPlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {t.form.callMethods.map(method => (
                            <SelectItem key={method} value={method}>{method}</SelectItem>
                          ))}
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
                    <FormLabel>{t.form.callId}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.callIdPlaceholder} {...field} />
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
                    <FormLabel>{t.form.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.form.messagePlaceholder}
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
                  {t.form.submitButton}
                </Button>
              </div>
            </form>
          </Form>

          <div className="text-center mt-12 text-xs text-muted-foreground/80 animate-in fade-in duration-1000">
            <p>{t.confidentialityNotice1}</p>
            <p>{t.confidentialityNotice2}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
