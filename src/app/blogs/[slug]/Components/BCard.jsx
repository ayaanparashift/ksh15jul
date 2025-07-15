import Link from "next/link";
import React from "react";

const BCard = ({ blog, activeTabId, image }) => {
  // Category Labels
  const categoryLabels = {
    17: "Blogs",
    18: "News",
  };

  let categoryToShow = "Uncategorized";

  if (activeTabId === null) {
    // "All" tab: Prioritize "News" over "Blogs" if both exist
    if (blog.categories.includes(18)) {
      categoryToShow = "News";
    } else if (blog.categories.includes(17)) {
      categoryToShow = "Blogs";
    }
  } else {
    // Active category logic
    if (blog.categories.includes(activeTabId)) {
      categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
    } else {
      // Fallback to the first matching category
      const firstCategory = blog.categories.find((cat) => categoryLabels[cat]);
      if (firstCategory) {
        categoryToShow = categoryLabels[firstCategory];
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row pt-5">
      {/* Blog Thumbnail */}
      <div className="md:w-[292px] w-full h-[200px] lg:h-[300px] max-w-full">
        <img
          className="object-cover h-full w-full"
          src={image || "/default-image.jpg"} // Use the passed image prop
          alt={blog.title?.rendered || "Blog Thumbnail"}
        />
      </div>

      {/* Blog Content */}
      <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-full md:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
        <div className="flex flex-col gap-[16px]">
          {/* Category Tag */}
          <p
            className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]"
            dangerouslySetInnerHTML={{ __html: categoryToShow }}
          />

          {/* Blog Title */}
          <h3
            className="spotlightheaddd fsans-600 text-[20px] text-[#565656] line-clamp-2 md:line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: blog.title?.rendered || "Untitled Blog",
            }}
          />
        </div>

        {/* Learn More Link */}
        <Link
          href={`/blogs/${blog.slug}`}
          className="flex items-center gap-2 pt-5"
        >
          <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </Link>
      </div>
    </div>
  );
};

export default BCard;
