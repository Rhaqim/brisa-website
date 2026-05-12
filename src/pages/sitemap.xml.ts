import type { APIRoute } from 'astro';
import { SITE_URL } from '../lib/config';

export const GET: APIRoute = () => {
  const now = new Date().toISOString().split('T')[0];

  const pages = [
    { url: '/',           priority: '1.0', changefreq: 'weekly'  },
    { url: '/about',      priority: '0.8', changefreq: 'monthly' },
    { url: '/our-works',  priority: '0.8', changefreq: 'monthly' },
    { url: '/events',     priority: '0.9', changefreq: 'weekly'  },
    { url: '/blog',       priority: '0.7', changefreq: 'weekly'  },
    { url: '/volunteer',  priority: '0.7', changefreq: 'monthly' },
    { url: '/contact',    priority: '0.6', changefreq: 'yearly'  },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
