// BlogsServer.jsx (server component)
import BlogsLoader from "./BlogsLoader";

export default async function BlogsServer({ currentPage }) {
  let blogs = [];
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(
      `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=31&page=${currentPage}&_embed`,
      { next: { revalidate: 900 }, signal: controller.signal },
    );
    clearTimeout(timeout);
    blogs = res.ok ? await res.json() : [];
  } catch {
    blogs = [];
  }
  return <BlogsLoader currentPage={currentPage} initialBlogs={blogs} />;
}
