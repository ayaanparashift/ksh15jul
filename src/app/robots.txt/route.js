// app/robots.txt/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return new Response(
    `User-agent: *\nAllow: /\n# Block common non-public folders\nDisallow: /api/\nDisallow: /_next/\nDisallow: /static/\nDisallow: /server-sitemap.xml\n# Sitemap location\nSitemap: https://www.kshinfra.com/sitemap.xml`,
    {
      headers: { "Content-Type": "text/plain" },
    }
  );
}
