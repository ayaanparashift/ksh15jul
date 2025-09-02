// app/sitemap.js
import { MetadataRoute } from "next";

export default async function sitemap() {
  // Base domain
  const baseUrl = "https://yourdomain.com";

  // Example: fetch dynamic blog slugs from your API
  let posts = [];
  try {
    const res = await fetch(`${baseUrl}/api/blogs`);
    if (res.ok) {
      posts = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap", err);
  }

  // Static routes
  const staticRoutes = ["", "/about", "/contact", "/services"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic routes from posts
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
