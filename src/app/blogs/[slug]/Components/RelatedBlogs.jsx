import BCSlider from "./BCslider";

// Fetch all blogs concurrently.
async function fetchAllBlogs() {
  const res = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function RelatedBlogs({ currentBlogId, slug }) {
  // Fetch related posts
  const allBlogs = await fetchAllBlogs();

  const relatedBlogs = allBlogs
    .filter((b) => b.id !== currentBlogId)
    .map((b) => ({
      ...b,
      featuredImage:
        b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/default-image.jpg",
    }));

  return <BCSlider relatedBlogs={relatedBlogs} />;
}
