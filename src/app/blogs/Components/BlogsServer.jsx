// BlogsServer.jsx (server component)
import BlogsLoader from "./BlogsLoader";

export default async function BlogsServer({ currentPage }) {
  const res = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${currentPage}`,
    { next: { revalidate: 60 } }
  );
  const blogs = res.ok ? await res.json() : [];
  return <BlogsLoader currentPage={currentPage} initialBlogs={blogs} />;
}
