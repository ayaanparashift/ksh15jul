import React from "react";
import Link from "next/link";
import BlogSpot from "./Components/BlogSpot";
import SlideBlog from "./Components/SlideBlog";
import TabBlogs from "./Components/TabBlogs";
import CapEnq from "../capabilities/componentsf/CapEnq";
const fetchBlogByPage = async (page = 1) => {
  const resp = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${page}`,
    { next: { revalidate: 60 } }
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await resp.json();
  const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

  return { data, totalPages };
};
export const metadata = {
  title:
    "KSH INFRA Blog | Expert Insights on Industrial & Logistics Park Trends, Warehouse Development in India",
  description:
    "Explore the KSH INFRA blog for the latest trends, insights, and updates on industrial parks, logistics park developments, and Warehouse solutions in India.",
};
// Server Component
const BlogPage = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const { data: blogs, totalPages } = await fetchBlogByPage(currentPage);
  // Create an array of page numbers (can add logic to limit if needed)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  // console.log(blogs);
  return (
    <>
      <BlogSpot />
      <SlideBlog blogs={blogs.slice(0, 4)} />
      <TabBlogs blogs={blogs} />
      <CapEnq />
    </>
  );
};

export default BlogPage;
