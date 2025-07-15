import React from "react";
import Link from "next/link";
import BlogSpot from "../blogs/Components/BlogSpot";
import SlideBlog from "../blogs/Components/SlideBlog";
import TabBlogs from "../blogs/Components/TabBlogs";

// Server function to fetch blogs for a given page
const fetchBlogByPage = async (page = 1) => {
  // const resp = await fetch(
  //   `https://www.kshinfra.com/wp-json/wp/v2/posts?page=${page}`,
  //   { next: { revalidate: 60 } } // Optional: cache for 60 seconds
  // );
  const resp = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31`, // Fetch 31 posts
    { next: { revalidate: 60 } } // Optional: ISR cache for 60 seconds
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await resp.json();
  const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

  return { data, totalPages };
};

// Server Component
const BlogPage = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const { data: blogs, totalPages } = await fetchBlogByPage(currentPage);

  // Create an array of page numbers (can add logic to limit if needed)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  // console.log(blogs);
  return (
    // <div className="my-7">
    //   <div>
    //     {blogs.map((blog) => (
    //       <div key={blog.id} className="m-2 p-2 border-2">
    //         <h2 dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
    //       </div>
    //     ))}
    //   </div>

    //   {/* Pagination Controls */}
    //   <div className="flex gap-2 mt-4 items-center justify-center">
    //     {currentPage > 1 && (
    //       <Link
    //         href={`?page=${currentPage - 1}`}
    //         className="px-3 py-1 border rounded bg-gray-200"
    //       >
    //         Prev
    //       </Link>
    //     )}

    //     {pageNumbers.map((num) => (
    //       <Link
    //         key={num}
    //         href={`?page=${num}`}
    //         className={`px-3 py-1 border rounded ${
    //           num === currentPage ? "bg-blue-500 text-white" : "bg-gray-100"
    //         }`}
    //       >
    //         {num}
    //       </Link>
    //     ))}

    //     {currentPage < totalPages && (
    //       <Link
    //         href={`?page=${currentPage + 1}`}
    //         className="px-3 py-1 border rounded bg-gray-200"
    //       >
    //         Next
    //       </Link>
    //     )}
    //   </div>
    // </div>
    <>
      <BlogSpot />
      <SlideBlog blogs={blogs} />
      <TabBlogs blogs={blogs} />
    </>
  );
};

export default BlogPage;
