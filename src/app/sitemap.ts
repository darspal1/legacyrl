// src/app/sitemap.ts
import { MetadataRoute } from 'next'

const baseUrl = 'https://www.legacyrl.com' // con www, siempre consistente

// Slugs verificados desde la estructura real de src/app/[lang]/
// 'en' es el locale default → sus URLs van SIN prefijo de locale
const routes: {
  slug: { en: string; es: string; it: string; fr: string }
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] = [
  {
    slug: { en: '', es: '', it: '', fr: '' }, // home
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    slug: {
      en: '/inmuebles',        // carpeta real en [lang]/inmuebles
      es: '/inmuebles',
      it: '/immobili',
      fr: '/immobilier',
    },
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    slug: {
      en: '/automoviles',      // carpeta real en [lang]/automoviles
      es: '/automoviles',
      it: '/automobili',
      fr: '/automobiles',
    },
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    slug: {
      en: '/vinos',
      es: '/vinos',
      it: '/vini',
      fr: '/vins',
    },
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    slug: {
      en: '/fundadores',
      es: '/fundadores',
      it: '/fondatori',
      fr: '/fondateurs',
    },
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    slug: {
      en: '/direccion',
      es: '/direccion',
      it: '/direzione',
      fr: '/direction',
    },
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    slug: {
      en: '/contacto',
      es: '/contacto',
      it: '/contatto',
      fr: '/contact',
    },
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    slug: {
      en: '/gobernanza',
      es: '/gobernanza',
      it: '/governance',       // ✅ carpeta real en [lang]/governance
      fr: '/gouvernance',
    },
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    slug: {
      en: '/faq',
      es: '/faq',
      it: '/faq',
      fr: '/faq',
    },
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    slug: {
      en: '/politica-de-privacidad',
      es: '/politica-de-privacidad',
      it: '/politica-sulla-privacy',
      fr: '/politique-de-confidentialite',
    },
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    slug: {
      en: '/terminos-y-condiciones',
      es: '/terminos-y-condiciones',
      it: '/termini-e-condizioni',
      fr: '/terminos-y-condiciones', // ⚠️ cambiar si creás slug fr real
    },
    changeFrequency: 'yearly',
    priority: 0.3,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    // 'en' = locale default → sin prefijo
    entries.push({
      url: `${baseUrl}${route.slug.en}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })

    // es, it, fr → con prefijo /locale/
    for (const locale of ['es', 'it', 'fr'] as const) {
      entries.push({
        url: `${baseUrl}/${locale}${route.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      })
    }
  }

  return entries
}