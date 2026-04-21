import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // ✅ /en con prefijo → sin prefijo (en es el locale default)
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },

      // ✅ Slugs italianos en locales incorrectos
      { source: '/es/immobili', destination: '/es/inmuebles', permanent: true },
      { source: '/it/automoviles', destination: '/it/automobili', permanent: true },
      { source: '/it/automóviles', destination: '/it/automobili', permanent: true },

      // ✅ Slugs incorrectos en francés
      { source: '/fr/contacto', destination: '/fr/contact', permanent: true },
      { source: '/fr/politica-de-privacidad', destination: '/fr/politique-de-confidentialite', permanent: true },
      { source: '/fr/inmuebles', destination: '/fr/immobilier', permanent: true },
      { source: '/fr/vinos', destination: '/fr/vins', permanent: true },
      { source: '/fr/fundadores', destination: '/fr/fondateurs', permanent: true },
      { source: '/fr/gobernanza', destination: '/fr/gouvernance', permanent: true },
      { source: '/fr/automoviles', destination: '/fr/automobiles', permanent: true },
      { source: '/fr/direccion', destination: '/fr/direction', permanent: true },
    ]
  },
};

export default nextConfig;