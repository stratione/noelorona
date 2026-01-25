import type { APIRoute } from "astro";
import { SITE } from "../consts";

const staticPages = ["/", "/talks", "/publications", "/contact"];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL(SITE.siteUrl);
  const urls = staticPages
    .map((path) => new URL(path, baseUrl).href)
    .map((href) => `  <url><loc>${href}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
