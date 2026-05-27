import { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogSkeleton from "../../blogs/[slug]/Components/BlogSkeleton";
import NewsContent from "./Components/NewsContent";

// Reusable fetcher
async function fetchBlogData(slug) {
  const res = await fetch(
    `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) return null;
  const data = await res.json();
  if (data.length === 0) return null;

  const blog = data[0];
  let featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  if (!featuredImage && blog.featured_media) {
    try {
      const mediaRes = await fetch(
        `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/media/${blog.featured_media}`,
        { next: { revalidate: 60 } },
      );
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        featuredImage = mediaData.source_url || null;
      }
    } catch (error) {
      console.error("Media fetch error:", error);
    }
  }

  return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
}

// Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await fetchBlogData(slug);
  if (!blog) {
    return {
      title: "News Not Found - KSH Infra",
      description: "The requested news post could not be found.",
    };
  }

  const title = blog.yoast_head_json?.title || blog.title.rendered;
  const description =
    blog.yoast_head_json?.description ||
    blog.excerpt?.rendered.replace(/<[^>]+>/g, "") ||
    "Read the latest updates from KSH Infra.";

  const image = blog.featuredImage;
  const url = `https://www.kshinfra.com/news/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Page wrapper with category validation + Suspense
export default async function NewsPage({ params }) {
  const { slug } = await params;
  const blog = await fetchBlogData(slug);

  if (!blog) return notFound();

  const categories = blog.categories || [];
  const isNews = categories.includes(7) || categories.includes(18);

  if (!isNews) {
    return notFound();
  }

  return (
    <Suspense fallback={<BlogSkeleton />}>
      <NewsContent slug={slug} />
    </Suspense>
  );
}
