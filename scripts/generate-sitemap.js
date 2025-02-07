const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:4200'; // Use env variable or default
const routes = ['home', 'about-us', 'our-people', 'services', 'contact-us', 'enquire']; // Public routes only

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${BASE_URL}/${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

const outputDir = path.resolve(__dirname, '../dist/your-project-name');
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapContent);

console.log('✅ Sitemap generated:', path.join(outputDir, 'sitemap.xml'));
