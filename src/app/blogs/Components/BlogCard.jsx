// import Link from "next/link";
// import React from "react";

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="flex">
//       <div className="w-[292px] h-[268px] max-w-full">
//         <img
//           className="object-cover h-full w-full"
//           src={blog.better_featured_image?.source_url || "/default-image.jpg"}
//           alt={blog.title.rendered}
//         />
//       </div>
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {blog.categories[0] || "Uncategorized"}
//           </p>
//           <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
//             {blog.title.rendered}
//           </h3>
//         </div>
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
//           <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////

// import Link from "next/link";
// import React from "react";

// const BlogCard = ({ blog, activeTabId }) => {
//   // Define category labels
//   const categoryLabels = {
//     17: "Blog",
//     18: "News",
//   };

//   // Find which category to display based on the active tab
//   let categoryToShow = "Uncategorized";
//   if (activeTabId) {
//     // If the blog contains the active tab's category, prioritize showing it
//     if (blog.categories.includes(activeTabId)) {
//       categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
//     } else {
//       // Otherwise, just show the first available category
//       const firstCategory = blog.categories.find((cat) => categoryLabels[cat]);
//       if (firstCategory) {
//         categoryToShow = categoryLabels[firstCategory];
//       }
//     }
//   }

//   return (
//     <div className="flex">
//       <div className="w-[292px] h-[268px] max-w-full">
//         <img
//           className="object-cover h-full w-full"
//           src={blog.better_featured_image?.source_url || "/default-image.jpg"}
//           alt={blog.title?.rendered}
//         />
//       </div>
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {categoryToShow}
//           </p>
//           <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
//             {blog.title?.rendered}
//           </h3>
//         </div>
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
//           <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog, activeTabId }) => {
  console.log(blog, "-------BlogCard---------");

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
    <Link
      href={`/blogs/${blog.slug}`}
      className="flex group flex-col md:flex-row"
    >
      {/* Blog Thumbnail */}
      <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
        <img
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
          src={
            blog.yoast_head_json?.schema?.["@graph"]?.[0]?.thumbnailUrl ||
            "/default-image.jpg"
          }
          // src={blog.thumbnail || "/default-image.jpg"}
          // alt={blog.title?.rendered || "Blog Thumbnail"}
        />
      </div>

      {/* Blog Content */}
      <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
        <div className="flex flex-col gap-[16px]">
          {/* Category Tag */}
          <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
            {categoryToShow}
          </p>

          {/* Blog Title */}
          {/* <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
            {blog.title?.rendered}
          </h3> */}

          <h3
            className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]"
            dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
          ></h3>
        </div>

        {/* Learn More Link */}
        <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
          <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
