import { writeFileSync } from "fs";
import { join } from "path";

/**
 * Script para generar sitemap.xml
 * Solo incluye rutas reales que existen en el sitio
 */

// URL base del sitio
const BASE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || "https://www.shalombayit.shifrastudio.com.ar";

// Obtener la fecha actual en formato ISO (YYYY-MM-DD)
const currentDate = new Date().toISOString().split("T")[0];

/**
 * Rutas reales del sitio
 * Solo incluir rutas que realmente existen en App.tsx
 */
const routes = [
  {
    loc: "/",
    lastmod: currentDate,
    changefreq: "weekly",
    priority: "1.0",
  },
];

/**
 * Generar el contenido del sitemap
 */
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Escribir el archivo en la carpeta public
const projectRoot = join(process.cwd());
const publicDir = join(projectRoot, "public");
const sitemapPath = join(publicDir, "sitemap.xml");

writeFileSync(sitemapPath, sitemapContent, "utf-8");

console.log("✅ Sitemap generado exitosamente");
console.log(`📁 Ubicación: ${sitemapPath}`);
console.log(`🌐 URL base: ${BASE_URL}`);
console.log(`📊 Total de URLs: ${routes.length}`);
