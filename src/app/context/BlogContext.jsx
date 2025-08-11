"use client";

import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  return (
    <BlogContext.Provider
      value={{ blogs, setBlogs, totalPages, setTotalPages }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  return useContext(BlogContext);
}
