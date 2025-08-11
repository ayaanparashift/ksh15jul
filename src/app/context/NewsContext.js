"use client";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [loadingNews, setLoadingNews] = useState(false);
  const [newsBlogs, setNewsBlogs] = useState([]);

  return (
    <NewsContext.Provider
      value={{ loadingNews, setLoadingNews, newsBlogs, setNewsBlogs }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
