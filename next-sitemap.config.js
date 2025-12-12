/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://legacyrl.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/[lang]/*', '/[lang]'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      'https://legacyrl.com/server-sitemap.xml',
    ],
  },
}
