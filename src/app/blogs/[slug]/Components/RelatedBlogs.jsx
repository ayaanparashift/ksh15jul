// import BCSlider from "./BCslider";

// // Fetch all blogs concurrently.
// async function fetchAllBlogs() {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function RelatedBlogs({ currentBlogId, slug }) {
//   // Fetch related posts
//   const allBlogs = await fetchAllBlogs();

//   const relatedBlogs = allBlogs
//     .filter((b) => b.id !== currentBlogId)
//     .map((b) => ({
//       ...b,
//       featuredImage:
//         b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//         "/default-image.jpg",
//     }));

//   return <BCSlider relatedBlogs={relatedBlogs} />;
// }
//
//
//
//
//
//
//
//
//
//
//
//
// import BCSlider from "./BCslider";

// async function fetchAllBlogs() {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function RelatedBlogs({ currentBlogId, slug }) {
//   const allBlogs = await fetchAllBlogs();

//   // Determine the current blog object to extract category
//   const currentBlog = allBlogs.find((b) => b.id === currentBlogId);
//   if (!currentBlog) return null;

//   const currentCategories = currentBlog.categories;

//   // Filter to same category and exclude current blog
//   const relatedBlogs = allBlogs
//     .filter(
//       (b) =>
//         b.id !== currentBlogId &&
//         b.categories.some((cat) => currentCategories.includes(cat))
//     )
//     .slice(0, 8) // only 8 blogs max
//     .map((b) => ({
//       ...b,
//       featuredImage:
//         b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//         "/default-image.jpg",
//     }));

//   if (!relatedBlogs.length) return null;

//   return <BCSlider relatedBlogs={relatedBlogs} />;
// }

import BCSlider from "./BCslider";

async function fetchAllBlogs() {
  try {
    const res = await fetch(
      `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Blog fetch failed", err);
    return [];
  }
}

export default async function RelatedBlogs({ currentBlogId }) {
  const allBlogs = await fetchAllBlogs();
  if (!allBlogs.length) return null;

  const currentBlog = allBlogs.find((b) => b.id === currentBlogId);
  if (!currentBlog) return null;

  const currentCats = currentBlog.categories;
  const isNews = currentCats.includes(18);
  const isBlog = currentCats.includes(17);

  let related = [];

  if (isNews) {
    // Only other News posts
    related = allBlogs.filter(
      (b) => b.id !== currentBlogId && b.categories.includes(18)
    );
  } else if (isBlog) {
    // Blogs only (must not be News)
    related = allBlogs.filter(
      (b) =>
        b.id !== currentBlogId &&
        b.categories.includes(17) &&
        !b.categories.includes(18)
    );
  } else {
    // If neither News nor Blogs — fallback to any posts (excluding current)
    related = allBlogs.filter((b) => b.id !== currentBlogId);
  }

  const relatedBlogs = related.slice(0, 8).map((b) => ({
    ...b,
    featuredImage:
      b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/default-image.jpg",
  }));

  if (!relatedBlogs.length) return null;

  return <BCSlider relatedBlogs={relatedBlogs} />;
}
