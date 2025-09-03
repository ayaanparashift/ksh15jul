// // app/sitemap.js
// import { MetadataRoute } from "next";

// export default async function sitemap() {
//   const baseUrl = "https://www.kshinfra.com";

//   // --- 1. Dynamic blogs ---
//   let blogs = [];
//   try {
//     const res = await fetch(`${baseUrl}/api/blogs`, {
//       next: { revalidate: 60 },
//     });
//     if (res.ok) {
//       blogs = await res.json();
//     }
//   } catch (err) {
//     console.error("❌ Failed to fetch blogs for sitemap:", err);
//   }

//   // blogs → /blogs/[slug]
//   const blogRoutes = blogs.map((post) => ({
//     url: `${baseUrl}/blogs/${post.slug}`,
//     lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
//   }));

//   // --- 2. Static pages (keep only truly static ones) ---
//   const staticRoutes = [
//     "/", // homepage
//     "/about-ksh",
//     "/contact-us",
//     "/capabilities",
//     "/our-team",
//     "/sustainability",
//     "/blogs", // blog index page
//     "/case-studies",
//     "/investors",
//     "/careers",
//     "/parks",
//     "/privacy-policy",
//   ].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date(),
//   }));

//   return [...staticRoutes, ...blogRoutes];
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
// app/sitemap.js
// import { MetadataRoute } from "next";

// export default async function sitemap() {
//   const baseUrl =
//     process.env.NODE_ENV === "production"
//       ? "https://www.kshinfra.com"
//       : "http://localhost:3000";

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
//         console.error(
//           `Failed to fetch posts for page ${currentPage}: ${response.status}`
//         );
//         break;
//       }

//       const posts = await response.json();
//       const totalPagesHeader = response.headers.get("X-WP-TotalPages");
//       totalPages = parseInt(totalPagesHeader, 10) || totalPages;

//       allPosts = [
//         ...allPosts,
//         ...posts.map((post) => ({
//           slug: post.slug,
//           updatedAt: post.modified
//             ? new Date(post.modified).toISOString()
//             : new Date().toISOString(),
//         })),
//       ];

//       currentPage++;
//     }

//     blogs = allPosts;
//   } catch (err) {
//     console.error("❌ Failed to fetch blogs for sitemap:", err);
//   }

//   // Map blogs to sitemap entries
//   const blogRoutes = blogs.map((post) => ({
//     url: `${baseUrl}/blogs/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//     changefreq: "weekly",
//     priority: 0.8,
//   }));

//   // --- 2. Static pages ---
//   const staticRoutes = [
//     "/", // Homepage
//     "/about-ksh",
//     "/contact-us",
//     "/capabilities",
//     "/our-team",
//     "/sustainability",
//     "/blogs", // Blog index page
//     "/case-studies",
//     "/investors",
//     "/careers",
//     "/parks",
//     "/privacy-policy",
//     "/ksh-hosur-i",
//     "/ksh-chakan-iv",
//     "/ksh-chakan-iii",
//     "/ksh-chakan-ii",
//     "/ksh-chakan-i",
//     "/ksh-talegaon-i",
//   ].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date(),
//     changefreq: route === "/" ? "daily" : "monthly",
//     priority: route === "/" ? 1.0 : 0.5,
//   }));

//   return [...staticRoutes, ...blogRoutes];
// }
//
//
//
//
//
//
//
// app/sitemap.js
import { MetadataRoute } from "next";

export default async function sitemap() {
  // Determine base URL based on environment
  const host =
    process.env.VERCEL_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl =
    host === "kshweb.vercel.app"
      ? "https://kshweb.vercel.app"
      : host === "www.kshinfra.com"
      ? "https://www.kshinfra.com"
      : `${protocol}://${host}`;

  // --- 1. Dynamic blogs from WordPress API ---
  let blogs = [];
  try {
    let allPosts = [];
    let currentPage = 1;
    const perPage = 31; // Match WordPress API's per_page parameter
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const response = await fetch(
        `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}&_embed`,
        { next: { revalidate: 3600 } } // Revalidate every hour
      );

      if (!response.ok) {
        console.error(
          `Failed to fetch posts for page ${currentPage}: ${response.status}`
        );
        break;
      }

      const posts = await response.json();
      const totalPagesHeader = response.headers.get("X-WP-TotalPages");
      totalPages = parseInt(totalPagesHeader, 10) || totalPages;

      allPosts = [
        ...allPosts,
        ...posts.map((post) => ({
          slug: post.slug,
          updatedAt: post.modified
            ? new Date(post.modified).toISOString()
            : new Date().toISOString(),
        })),
      ];

      currentPage++;
    }

    blogs = allPosts;
  } catch (err) {
    console.error("❌ Failed to fetch blogs for sitemap:", err);
  }

  // Map blogs to sitemap entries
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changefreq: "weekly",
    priority: 0.8,
  }));

  // --- 2. Static pages ---
  const staticRoutes = [
    "/", // Homepage
    "/about-ksh",
    "/contact-us",
    "/capabilities",
    "/our-team",
    "/sustainability",
    "/blogs", // Blog index page
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

  // Log for debugging
  console.log("Sitemap generated with baseUrl:", baseUrl);

  return [...staticRoutes, ...blogRoutes];
}
//
//
//
//
//
//
// export async function generateSitemaps() {
//   // Example: Fetch dynamic routes from an API or database
//   const dynamicPages = [
//     { id: 1, slug: "page1", lastmod: new Date().toISOString() },
//     { id: 2, slug: "page2", lastmod: new Date().toISOString() },
//   ];

//   // Define static pages
//   const staticPages = [
//     { id: 0, slug: "", lastmod: new Date().toISOString() },
//     { id: 3, slug: "about-ksh", lastmod: new Date().toISOString() },
//     { id: 4, slug: "contact-us", lastmod: new Date().toISOString() },
//     { id: 5, slug: "capabilities", lastmod: new Date().toISOString() },
//     { id: 6, slug: "sustainability", lastmod: new Date().toISOString() },
//     { id: 7, slug: "blogs", lastmod: new Date().toISOString() },
//     { id: 8, slug: "case-studies", lastmod: new Date().toISOString() },
//     { id: 9, slug: "investors", lastmod: new Date().toISOString() },
//     { id: 10, slug: "careers", lastmod: new Date().toISOString() },
//     { id: 11, slug: "ksh-hosur-i", lastmod: new Date().toISOString() },
//     { id: 12, slug: "ksh-chakan-iv", lastmod: new Date().toISOString() },
//     { id: 13, slug: "ksh-chakan-iii", lastmod: new Date().toISOString() },
//     { id: 14, slug: "ksh-chakan-ii", lastmod: new Date().toISOString() },
//     { id: 15, slug: "ksh-chakan-i", lastmod: new Date().toISOString() },
//     { id: 16, slug: "ksh-talegaon-i", lastmod: new Date().toISOString() },
//     { id: 17, slug: "parks", lastmod: new Date().toISOString() },
//   ];

//   // Combine static and dynamic pages into a single sitemap
//   const pages = [...staticPages, ...dynamicPages];

//   return [
//     {
//       id: 0, // Sitemap ID (for splitting large sitemaps)
//       async urls() {
//         return pages.map((page) => ({
//           loc: `https://www.kshinfra.com/${page.slug}`, // Replace with your domain
//           lastmod: page.lastmod,
//           changefreq: page.slug === "" ? "daily" : "weekly",
//           priority: page.slug === "" ? "1.0" : "0.5",
//         }));
//       },
//     },
//   ];
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
//
// export async function generateSitemaps() {
//   // Fetch dynamic blog posts from WordPress REST API
//   const fetchAllPosts = async () => {
//     let allPosts = [];
//     let currentPage = 1;
//     const perPage = 31; // Match your API's per_page parameter
//     let totalPages = 1;

//     try {
//       while (currentPage <= totalPages) {
//         const response = await fetch(
//           `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}&_embed`,
//           { next: { revalidate: 3600 } } // Revalidate every hour
//         );

//         if (!response.ok) {
//           console.error(
//             `Failed to fetch posts for page ${currentPage}: ${response.status}`
//           );
//           break;
//         }

//         const posts = await response.json();
//         const totalPagesHeader = response.headers.get("X-WP-TotalPages");
//         totalPages = parseInt(totalPagesHeader, 10) || totalPages;

//         allPosts = [
//           ...allPosts,
//           ...posts.map((post, index) => ({
//             id: post.id,
//             slug: `blogs/${post.slug}`,
//             lastmod: post.modified
//               ? new Date(post.modified).toISOString()
//               : new Date().toISOString(),
//           })),
//         ];

//         currentPage++;
//       }
//     } catch (error) {
//       console.error("Error fetching WordPress posts:", error);
//     }

//     return allPosts;
//   };

//   // Fetch dynamic pages
//   const dynamicPages = await fetchAllPosts();

//   // Define static pages
//   const staticPages = [
//     { id: 0, slug: "", lastmod: new Date().toISOString() },
//     { id: 3, slug: "about-ksh", lastmod: new Date().toISOString() },
//     { id: 4, slug: "contact-us", lastmod: new Date().toISOString() },
//     { id: 5, slug: "capabilities", lastmod: new Date().toISOString() },
//     { id: 6, slug: "sustainability", lastmod: new Date().toISOString() },
//     { id: 7, slug: "blogs", lastmod: new Date().toISOString() },
//     { id: 8, slug: "case-studies", lastmod: new Date().toISOString() },
//     { id: 9, slug: "investors", lastmod: new Date().toISOString() },
//     { id: 10, slug: "careers", lastmod: new Date().toISOString() },
//     { id: 11, slug: "ksh-hosur-i", lastmod: new Date().toISOString() },
//     { id: 12, slug: "ksh-chakan-iv", lastmod: new Date().toISOString() },
//     { id: 13, slug: "ksh-chakan-iii", lastmod: new Date().toISOString() },
//     { id: 14, slug: "ksh-chakan-ii", lastmod: new Date().toISOString() },
//     { id: 15, slug: "ksh-chakan-i", lastmod: new Date().toISOString() },
//     { id: 16, slug: "ksh-talegaon-i", lastmod: new Date().toISOString() },
//     { id: 17, slug: "parks", lastmod: new Date().toISOString() },
//   ];

//   // Combine static and dynamic pages
//   const pages = [...staticPages, ...dynamicPages];

//   return [
//     {
//       id: 0, // Single sitemap for simplicity
//       async urls() {
//         return pages.map((page) => ({
//           loc: `https://www.kshinfra.com/${page.slug}`,
//           lastmod: page.lastmod,
//           changefreq:
//             page.slug === ""
//               ? "daily"
//               : page.slug.startsWith("blogs/")
//               ? "weekly"
//               : "monthly",
//           priority:
//             page.slug === ""
//               ? "1.0"
//               : page.slug.startsWith("blogs/")
//               ? "0.8"
//               : "0.5",
//         }));
//       },
//     },
//   ];
// }

// export async function generateSitemaps() {
//   // Fetch dynamic blog posts from WordPress REST API
//   const fetchAllPosts = async () => {
//     let allPosts = [];
//     let currentPage = 1;
//     const perPage = 31; // Match your API's per_page parameter
//     let totalPages = 1;

//     try {
//       while (currentPage <= totalPages) {
//         const response = await fetch(
//           `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}&_embed`,
//           { next: { revalidate: 3600 } } // Revalidate every hour
//         );

//         if (!response.ok) {
//           console.error(
//             `Failed to fetch posts for page ${currentPage}: ${response.status}`
//           );
//           break;
//         }

//         const posts = await response.json();
//         const totalPagesHeader = response.headers.get("X-WP-TotalPages");
//         totalPages = parseInt(totalPagesHeader, 10) || totalPages;

//         allPosts = [
//           ...allPosts,
//           ...posts.map((post) => ({
//             id: post.id,
//             slug: `blogs/${post.slug}`,
//             lastmod: post.modified
//               ? new Date(post.modified).toISOString()
//               : new Date().toISOString(),
//           })),
//         ];

//         currentPage++;
//       }
//     } catch (error) {
//       console.error("Error fetching WordPress posts:", error);
//     }

//     return allPosts;
//   };

//   // Fetch dynamic pages
//   const dynamicPages = await fetchAllPosts();

//   // Define static pages
//   const staticPages = [
//     { id: 0, slug: "", lastmod: new Date().toISOString() },
//     { id: 3, slug: "about-ksh", lastmod: new Date().toISOString() },
//     { id: 4, slug: "contact-us", lastmod: new Date().toISOString() },
//     { id: 5, slug: "capabilities", lastmod: new Date().toISOString() },
//     { id: 6, slug: "sustainability", lastmod: new Date().toISOString() },
//     { id: 7, slug: "blogs", lastmod: new Date().toISOString() },
//     { id: 8, slug: "case-studies", lastmod: new Date().toISOString() },
//     { id: 9, slug: "investors", lastmod: new Date().toISOString() },
//     { id: 10, slug: "careers", lastmod: new Date().toISOString() },
//     { id: 11, slug: "ksh-hosur-i", lastmod: new Date().toISOString() },
//     { id: 12, slug: "ksh-chakan-iv", lastmod: new Date().toISOString() },
//     { id: 13, slug: "ksh-chakan-iii", lastmod: new Date().toISOString() },
//     { id: 14, slug: "ksh-chakan-ii", lastmod: new Date().toISOString() },
//     { id: 15, slug: "ksh-chakan-i", lastmod: new Date().toISOString() },
//     { id: 16, slug: "ksh-talegaon-i", lastmod: new Date().toISOString() },
//     { id: 17, slug: "parks", lastmod: new Date().toISOString() },
//   ];

//   // Combine static and dynamic pages
//   const pages = [...staticPages, ...dynamicPages];

//   // Log the pages for debugging
//   console.log("Sitemap pages:", pages);

//   return [
//     {
//       id: 0, // Sitemap ID
//       async urls() {
//         return pages.map((page) => ({
//           loc: `http://localhost:3000/${page.slug}`, // Use localhost for development
//           lastmod: page.lastmod,
//           changefreq:
//             page.slug === ""
//               ? "daily"
//               : page.slug.startsWith("blogs/")
//               ? "weekly"
//               : "monthly",
//           priority:
//             page.slug === ""
//               ? "1.0"
//               : page.slug.startsWith("blogs/")
//               ? "0.8"
//               : "0.5",
//         }));
//       },
//     },
//   ];
// }
