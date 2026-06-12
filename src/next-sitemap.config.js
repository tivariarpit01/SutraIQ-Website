/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sutraiq.com',
  generateRobotsTxt: true, 
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin', '/api/*', '/404', '/500'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services/web-development'),
    await config.transform(config, '/services/mobile-development'),
    await config.transform(config, '/services/ai-ml-projects'),
    await config.transform(config, '/services/automation'),
    await config.transform(config, '/services/cloud-solutions'),
    await config.transform(config, '/services/ui-ux-design'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/get-started'),
    await config.transform(config, '/projects'),
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.sutraiq.com/server-sitemap.xml', 
    ],
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/', '/admin/'] },
    ],
  },
}