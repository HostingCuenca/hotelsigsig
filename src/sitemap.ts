// src/utils/sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';

// Define base URL for your site
const baseUrl = 'https://hotelsigsig.com';

// Define all website routes
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/rooms', changefreq: 'weekly', priority: 0.9 },
  { url: '/dining', changefreq: 'weekly', priority: 0.8 },
  { url: '/gastronomy', changefreq: 'weekly', priority: 0.8 },
  { url: '/activities', changefreq: 'monthly', priority: 0.7 },
  { url: '/tourism', changefreq: 'monthly', priority: 0.7 },
  { url: '/culture', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

/**
 * Generates a sitemap.xml file for the website
 */
async function generateSitemap() {
  try {
    // Create a stream to write to
    const stream = new SitemapStream({ hostname: baseUrl });
    
    // Return a promise that resolves with your XML string
    const sitemap = await streamToPromise(
      Readable.from(routes).pipe(stream)
    );
    
    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the XML to a file
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.toString());
    
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
  }
}

// For direct execution of this script
if (require.main === module) {
  generateSitemap();
}

// Also export for programmatic use
export default generateSitemap;