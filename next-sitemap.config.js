/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: "https://storydarpan.com", // Your domain here
  generateRobotsTxt: true, // This will generate robots.txt alongside the sitemap
  sitemapSize: 5000, // Optional, for large sites
  changefreq: 'daily',
  priority: 0.7,
};

module.exports = NextSitemapConfig;
