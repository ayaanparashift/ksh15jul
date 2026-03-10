// // app/sitemap.js
// import { MetadataRoute } from 'next';

// export default async function sitemap() {
//   const baseUrl = 'https://www.kshinfra.com';

//   // Log to confirm baseUrl
//   console.log('Sitemap function executed with baseUrl:', baseUrl);

//   // --- 1. Dynamic blogs from WordPress API ---
//   let blogs = [];
//   try {
//     let allPosts = [];
//     let currentPage = 1;
//     const perPage = 31; // Match WordPress API's per_page parameter
//     let totalPages = 1;

//     while (currentPage <= totalPages) {
//       const response = await fetch(
//         `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}&_embed`,
//         { next: { revalidate: 3600 } } // Revalidate every hour
//       );

//       if (!response.ok) {
//         console.error(`Failed to fetch posts for page ${currentPage}: ${response.status}`);
//         break;
//       }

//       const posts = await response.json();
//       const totalPagesHeader = response.headers.get('X-WP-TotalPages');
//       totalPages = parseInt(totalPagesHeader, 10) || totalPages;

//       allPosts = [
//         ...allPosts,
//         ...posts.map((post) => ({
//           slug: post.slug,
//           updatedAt: post.modified ? new Date(post.modified).toISOString() : new Date().toISOString(),
//         })),
//       ];

//       currentPage++;
//     }

//     blogs = allPosts;
//     console.log('Fetched blogs:', blogs.length);
//   } catch (err) {
//     console.error('❌ Failed to fetch blogs for sitemap:', err);
//   }

//   // Map blogs to sitemap entries
//   const blogRoutes = blogs.map((post) => ({
//     url: `${baseUrl}/blogs/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//     changefreq: 'weekly',
//     priority: 0.8,
//   }));

//   // --- 2. Static pages ---
//   const staticRoutes = [
//     '/', // Homepage
//     '/about-ksh',
//     '/contact-us',
//     '/capabilities',
//     '/our-team',
//     '/sustainability',
//     '/blogs', // Blog index page
//     '/case-studies',
//     '/investors',
//     '/careers',
//     '/parks',
//     '/privacy-policy',
//     '/ksh-hosur-i',
//     '/ksh-chakan-iv',
//     '/ksh-chakan-iii',
//     '/ksh-chakan-ii',
//     '/ksh-chakan-i',
//     '/ksh-talegaon-i',
//   ].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date(),
//     changefreq: route === '/' ? 'daily' : 'monthly',
//     priority: route === '/' ? 1.0 : 0.5,
//   }));

//   // Log final sitemap entries
//   const allRoutes = [...staticRoutes, ...blogRoutes];
//   console.log('Sitemap entries:', allRoutes.map((route) => route.url));

//   return allRoutes;
// }
import { MetadataRoute } from "next";

export default async function sitemap() {
  const baseUrl = "https://www.kshinfra.com";

  // --- 1. Dynamic blogs from WordPress API ---
  let blogs = [];

  try {
    let allPosts = [];
    let currentPage = 1;
    const perPage = 31;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const res = await fetch(
        `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}&_embed`,
        { next: { revalidate: 3600 } }
      );

      if (!res.ok) break;

      const posts = await res.json();
      const totalPagesHeader = res.headers.get("X-WP-TotalPages");
      totalPages = parseInt(totalPagesHeader, 10) || totalPages;

      allPosts = [
        ...allPosts,
        ...posts.map((post) => ({
          slug: post.slug,
          categories: post.categories || [],
          updatedAt: post.modified
            ? new Date(post.modified).toISOString()
            : new Date().toISOString(),
        })),
      ];

      currentPage++;
    }

    blogs = allPosts;
  } catch (err) {
    // silent fail (Next.js does not allow console in route handlers)
  }

  // Blog + News routes
  const blogRoutes = blogs.map((post) => {
    const categories = post.categories || [];
    const isNews = categories.includes(7) || categories.includes(18);
    const path = isNews ? "news" : "blogs";

    return {
      url: `${baseUrl}/${path}/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changefreq: "weekly",
      priority: 0.8,
    };
  });

  // Static routes
  const staticRoutes = [
    "/",
    "/about-ksh",
    "/contact-us",
    "/capabilities",
    "/our-team",
    "/sustainability",
    "/blogs",
    "/case-studies",
    "/investors",
    "/careers",
    "/parks",
    "/privacy-policy",
    "/ksh-hosur-i",
    "/ksh-chakan-iv",
    "/ksh-chakan-iii",
    "/ksh-chakan-ii",
    "/ksh-chakan-i",
    "/ksh-talegaon-i",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changefreq: route === "/" ? "daily" : "monthly",
    priority: route === "/" ? 1.0 : 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
