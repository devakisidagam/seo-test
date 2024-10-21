/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: "https://testapp.com", // Change this to your test domain
  generateRobotsTxt: true, // This will generate robots.txt alongside the sitemap
  sitemapSize: 5000, // Optional: Adjust if you have more than 5000 URLs
  changefreq: 'daily', // Frequency with which URLs are likely to change
  priority: 0.7, // Priority of URLs, 0.7 is default for important but non-homepage URLs
};

module.exports = NextSitemapConfig;

