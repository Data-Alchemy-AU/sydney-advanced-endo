const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:4200';

const robotsContent = `User-agent: *
Disallow: /admin
Disallow: /dashboard
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

const outputDir = path.resolve(__dirname, '../dist/your-project-name');
fs.writeFileSync(path.join(outputDir, 'robots.txt'), robotsContent);

console.log('✅ Robots.txt generated:', path.join(outputDir, 'robots.txt'));
