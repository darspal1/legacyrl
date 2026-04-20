import { MetadataRoute } from 'next'
import { i18n } from '../../i18n-config'

/**
 * Genera el sitemap dinámico para Next.js 15.
 * Incluye todas las rutas principales y sus variantes localizadas con sus respectivos slugs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legacyrl.com'
  const locales = i18n.locales
  const lastModified = new Date()
  
  const entries: MetadataRoute.Sitemap = []

  // 1. Páginas de Inicio (Raíz y Localizadas)
  entries.push({
    url: baseUrl,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
  })
  
  locales.forEach(lang => {
    entries.push({
      url: `${baseUrl}/${lang}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  })

  // 2. Mapeo de Páginas Internas con Slugs Específicos por Idioma
  // Basado en la estructura de carpetas de src/app/[lang]/ y proxies creados.
  const pageMappings = [
    {
      default: '/inmuebles',
      locales: { es: '/inmuebles', en: '/inmuebles', fr: '/immobilier', it: '/immobili' }
    },
    {
      default: '/automoviles',
      locales: { es: '/automoviles', en: '/automobiles', fr: '/automoviles', it: '/automobili' }
    },
    {
      default: '/vinos',
      locales: { es: '/vinos', en: '/vinos', fr: '/vins', it: '/vini' }
    },
    {
      default: '/fundadores',
      locales: { es: '/fundadores', en: '/fundadores', fr: '/fondateurs', it: '/fondatori' }
    },
    {
      default: '/direccion',
      locales: { es: '/direccion', en: '/direction', fr: '/direction', it: '/direzione' }
    },
    {
      default: '/contacto',
      locales: { es: '/contacto', en: '/contact', fr: '/contact', it: '/contatto' }
    },
    {
      default: '/gobernanza',
      locales: { es: '/gobernanza', en: '/governance', fr: '/gouvernance', it: '/gobernanza' }
    },
    {
      default: '/faq',
      locales: { es: '/faq', en: '/faq', fr: '/faq', it: '/faq' }
    },
    {
      default: '/politica-de-privacidad',
      locales: { 
        es: '/politica-de-privacidad', 
        en: '/politica-de-privacidad', 
        fr: '/politique-de-confidentialite', 
        it: '/politica-sulla-privacy' 
      }
    },
    {
      default: '/terminos-y-condiciones',
      locales: { 
        es: '/terminos-y-condiciones', 
        en: '/terminos-y-condiciones', 
        fr: '/terminos-y-condiciones', 
        it: '/termini-e-condizioni' 
      }
    }
  ]

  pageMappings.forEach(page => {
    // Entradas a nivel de raíz (Default/Español)
    entries.push({
      url: `${baseUrl}${page.default}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })

    // Entradas localizadas con slugs traducidos
    locales.forEach(lang => {
      const slug = (page.locales as any)[lang] || page.default
      entries.push({
        url: `${baseUrl}/${lang}${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return entries
}
