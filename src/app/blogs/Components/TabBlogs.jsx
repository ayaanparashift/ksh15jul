// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import BlogCard from "./BlogCard";

// const TabBlogs = () => {
//   const tabs = [
//     { title: "All", link: "#park-overview" },
//     { title: "News", link: "#park-highlight" },
//     { title: "Blogs", link: "#pi" },
//     { title: "Press Release", link: "#db" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <div className="w-full  bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <Link
//                   href={tab.link}
//                   key={index}
//                   className={`
//               flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px]
//               ${
//                 activeIndex === index
//                   ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                   : "text-white hover:text-gray-300"
//               }
//               whitespace-nowrap
//             `}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {tab.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//       </div>
//     </>
//   );
// };

// export default TabBlogs;

////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////

// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";

// const TabBlogs = () => {
//   // Tabs with just titles (no link property)
//   const tabs = [
//     { title: "All" },
//     { title: "News" },
//     { title: "Blogs" },
//     { title: "Press Release" },
//   ];

//   // Default active tab is "All" (index 0)
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Sample blog data with two posts per category using the same image
//   const blogData = {
//     news: [
//       {
//         id: 1,
//         category: "News",
//         image: "/blog/blog2.png",
//         title: `How Grade A Industrial Parks Aid the 7 Principles of Lean Manufacturing`,
//       },
//       {
//         id: 2,
//         category: "News",
//         image: "/blog/blogin/blogin1.png",
//         title: "Breaking: Market Trends Update",
//       },
//     ],
//     blogs: [
//       {
//         id: 3,
//         category: "Blogs",
//         image: "/blog/blogin/blogin1.png",
//         title:
//           "Harnessing AI in Logistics: The Future of Supply Chain Optimization",
//       },
//       {
//         id: 4,
//         category: "Blogs",
//         image: "/blog/blogin/blogin1.png",
//         title: "Inside the World of Digital Transformation",
//       },
//     ],
//     pressRelease: [
//       {
//         id: 5,
//         category: "Press Release",
//         image: "/blog/blogin/blogin1.png",
//         title: "Company Announces New Partnership",
//       },
//       {
//         id: 6,
//         category: "Press Release",
//         image: "/blog/blogin/blogin1.png",
//         title: "Press Release: Quarterly Earnings Report",
//       },
//     ],
//   };

//   // Determine which blogs to display based on the active tab.
//   let blogsToDisplay = [];
//   if (activeIndex === 0) {
//     // "All" tab: show all items
//     blogsToDisplay = [
//       ...blogData.news,
//       ...blogData.blogs,
//       ...blogData.pressRelease,
//     ];
//   } else if (activeIndex === 1) {
//     blogsToDisplay = blogData.news;
//   } else if (activeIndex === 2) {
//     blogsToDisplay = blogData.blogs;
//   } else if (activeIndex === 3) {
//     blogsToDisplay = blogData.pressRelease;
//   }

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         {blogsToDisplay.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;

////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////
////////////// 9999999999999999 %%%%%%%%%%%%%%%% ////////////////////////

// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "News", id: 18 }, // Ensure 18 is correct for News
//     { title: "Blogs", id: 17 },
//     { title: "Press Release", id: 8 },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeTabId = tabs[activeIndex].id; // Get the active tab's ID

//   // Correct filtering logic
//   const blogsToDisplay =
//     activeTabId === null
//       ? blogs // Show all blogs
//       : blogs.filter((blog) =>
//           blog.categories.some((cat) => cat === activeTabId)
//         );

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         {blogsToDisplay.length > 0 ? (
//           blogsToDisplay.map((blog) => (
//             <BlogCard key={blog.id} blog={blog} activeTabId={activeTabId} />
//           ))
//         ) : (
//           <p className="text-white text-center col-span-2">
//             No blogs available.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;

/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%

// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";

// const TabBlogs = ({ blogs, bimg }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "News", id: 18 }, // Replace with actual ID from WordPress
//     { title: "Blogs", id: 17 }, // Replace with actual ID from WordPress
//     { title: "Press Release", id: 8 }, // Replace with actual ID from WordPress
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   // Filter blogs based on active category
//   const blogsToDisplay =
//     activeIndex === 0
//       ? blogs
//       : blogs.filter((blog) => blog.categories.includes(tabs[activeIndex].id));

//   // Pagination Logic
//   const totalPages = Math.ceil(blogsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentBlogs = blogsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setCurrentPage(1); // Reset to first page when switching tabs
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         {currentBlogs.length > 0 ? (
//           currentBlogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               blog={blog}
//               activeTabId={tabs[activeIndex].id}
//             />
//           ))
//         ) : (
//           <p className="text-white text-center col-span-2">
//             No blogs available.
//           </p>
//         )}
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-6">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 border rounded ${
//                 currentPage === index + 1
//                   ? "bg-[#F7E327] text-black"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;

"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { motion, AnimatePresence } from "framer-motion";

const TabBlogs = ({ blogs }) => {
  // console.log(blogs, "----------");

  const tabs = [
    { title: "All", id: null },
    { title: "News", id: 18 }, // Replace with actual category ID from WordPress
    { title: "Blogs", id: 17 }, // Replace with actual category ID from WordPress
    //{ title: "Press Release", id: 8 }, // Replace with actual category ID from WordPress
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter blogs based on active category
  const blogsToDisplay =
    activeIndex === 0
      ? blogs
      : blogs.filter((blog) => blog.categories.includes(tabs[activeIndex].id));

  // Pagination Logic
  const totalPages = Math.ceil(blogsToDisplay.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentBlogs = blogsToDisplay.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <>
      {/* Tabs Section */}
      <div className="w-full bg-[#092241]">
        <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
          <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
            Other Blogs
          </h2>
          <div>
            <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
                    activeIndex === index
                      ? "text-[#F7E327] border-b-2 border-[#F7E327]"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setCurrentPage(1); // Reset to first page when switching tabs
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBlogs.map((id) => id.id)}
          className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
          }}
        >
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-white text-center col-span-2">
              No blogs available.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
      {/* Pagination Controls */}
      <div className="pb-[70px]">
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-[#F7E327] text-black"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TabBlogs;

// "use client";
// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";

// const TabBlogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   const tabs = [
//     { title: "All", id: null },
//     { title: "News", id: 18 },
//     { title: "Blogs", id: 17 },
//     { title: "Press Release", id: 8 },
//   ];

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const baseUrl = "https://www.kshinfra.com/wp-json/wp/v2/posts";
//         const mediaUrl = "https://www.kshinfra.com/wp-json/wp/v2/media";
//         const perPage = 10;

//         // First, fetch to get total count
//         const firstResponse = await fetch(`${baseUrl}?per_page=1`);
//         const totalPosts = firstResponse.headers.get("X-WP-Total");
//         const totalPages = Math.ceil(totalPosts / perPage);

//         // Fetch all posts
//         const requests = Array.from({ length: totalPages }, (_, i) =>
//           fetch(`${baseUrl}?per_page=${perPage}&page=${i + 1}`).then((res) =>
//             res.json()
//           )
//         );
//         const allBlogs = (await Promise.all(requests)).flat();

//         // Fetch media
//         const mediaRequests = allBlogs
//           .map((blog) => blog.featured_media)
//           .filter(Boolean)
//           .map((id) => fetch(`${mediaUrl}/${id}`).then((res) => res.json()));
//         const mediaData = await Promise.all(mediaRequests);

//         const mediaMap = Object.fromEntries(
//           mediaData.map((media) => [media.id, media.source_url])
//         );

//         const blogsWithThumb = allBlogs.map((blog) => ({
//           ...blog,
//           thumbnail: mediaMap[blog.featured_media] || "No Thumbnail",
//         }));

//         setBlogs(blogsWithThumb);
//       } catch (error) {
//         console.error("Failed to fetch blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-white py-10">Loading blogs...</div>;
//   }

//   // Filter based on tab
//   const blogsToDisplay =
//     activeIndex === 0
//       ? blogs
//       : blogs.filter((blog) => blog.categories.includes(tabs[activeIndex].id));

//   const totalPages = Math.ceil(blogsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentBlogs = blogsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         {currentBlogs.length > 0 ? (
//           currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
//         ) : (
//           <p className="text-white text-center col-span-2">
//             No blogs available.
//           </p>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="pb-[70px]">
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2 mt-6">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === index + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;
