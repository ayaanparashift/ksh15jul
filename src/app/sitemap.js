// app/sitemap.js
import { MetadataRoute } from "next";

export default async function sitemap() {
  const baseUrl = "https://kshweb.vercel.app";

  // --- 1. Dynamic blogs ---
  let blogs = [];
  try {
    const res = await fetch(`${baseUrl}/api/blogs`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (err) {
    console.error("❌ Failed to fetch blogs for sitemap:", err);
  }

  // blogs → /blogs/[slug]
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
  }));

  // --- 2. Static pages (keep only truly static ones) ---
  const staticRoutes = [
    "/", // homepage
    "/about-ksh",
    "/contact-us",
    "/capabilities",
    "/our-team",
    "/sustainability",
    "/blogs", // blog index page
    "/case-studies",
    "/investors",
    "/careers",
    "/parks",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
