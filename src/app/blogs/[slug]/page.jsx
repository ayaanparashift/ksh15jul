import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import RelatedBlogs from "./Components/RelatedBlogs";
import Link from "next/link";

async function fetchBlogData(slug) {
  const res = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } } // Cache for 60 seconds
  );
  if (!res.ok) return null;
  const data = await res.json();
  if (data.length === 0) return null;

  const blog = data[0];

  // Use embedded featured media if available.
  let featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // Fallback: fetch the media separately if needed.
  if (!featuredImage && blog.featured_media) {
    try {
      const mediaRes = await fetch(
        `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
        { next: { revalidate: 60 } }
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

export default async function BlogPage({ params }) {
  // Fetch blog data first so we can conditionally show the page.
  const blog = await fetchBlogData(params.slug);
  if (!blog) return notFound();

  const categoryLabels = {
    17: "Blogs",
    18: "News",
  };
  const categoryToShow =
    blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
    "Uncategorized";

  // Construct blog URL for sharing.
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.kshinfra.com";
  const finalUrl = `https://kshweb.vercel.app/blogs/${params.slug}`;

  // Construct message for WhatsApp sharing.
  const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

  return (
    <div id="bloginside">
      {/* Blog Header */}
      <div className="bg-[#092241]">
        <div className="fix12 pb-20 pt-32">
          <div className="pb-16">
            <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">
              <Link
                className="hover:text-white transition-colors duration-300"
                href="/"
              >
                Home
              </Link>
              &nbsp;&gt; Blog
            </p>
            <div className="space-y-7">
              <p
                className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
                dangerouslySetInnerHTML={{ __html: categoryToShow }}
              />
              <h1
                className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-white"
                dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
              />
            </div>
          </div>
          {/* Blog Featured Image */}
          <div className="imgCon">
            <Image
              src={blog.featuredImage}
              alt={blog.title.rendered}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="fix12 md:px-10">
        <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 py-10 md:py-20 relative">
          {/* Social Icons */}
          <div className="colIcon h-fit sticky top-20">
            <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  finalUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-9 h-9"
                  src="/binside/BinFB.svg"
                  alt="Share on Facebook"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  finalUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-9 h-9"
                  src="/binside/BinIN.svg"
                  alt="Share on LinkedIn"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
              >
                <img
                  className="w-9 h-9"
                  src="/binside/wsp.svg"
                  alt="Share on WhatsApp"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
          {/* Main Blog Content */}
          <div id="bloginwy" className="colContnt">
            <div
              className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            />
          </div>
        </div>
      </div>

      {/* Related Blogs Section loaded via Suspense so it doesn’t block initial render */}
      <Suspense fallback={<div>Loading related posts...</div>}>
        <RelatedBlogs currentBlogId={blog.id} slug={params.slug} />
      </Suspense>
    </div>
  );
}
