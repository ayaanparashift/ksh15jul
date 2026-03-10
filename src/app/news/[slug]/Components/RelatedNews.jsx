"use client";

import { useEffect, useState } from "react";
import NewsSlider from "./NewsSlider";

let cachedNews = null;
let inflight = null;

async function fetchNewsOnce() {
  if (cachedNews) return cachedNews;
  if (inflight) return inflight;

  inflight = fetch(
    "https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=100",
  )
    .then((res) => (res.ok ? res.json() : []))
    .then((data) => {
      cachedNews = data;
      inflight = null;
      return data;
    })
    .catch((err) => {
      console.error("News fetch failed:", err);
      inflight = null;
      return [];
    });

  return inflight;
}

export default function RelatedNews({ currentBlogId }) {
  const [allPosts, setAllPosts] = useState(cachedNews || []);
  const [loading, setLoading] = useState(!cachedNews);

  useEffect(() => {
    let mounted = true;

    fetchNewsOnce().then((data) => {
      if (mounted) {
        setAllPosts(data);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const relatedNews = (allPosts || [])
    .filter((n) => {
      const cats = Array.isArray(n.categories)
        ? n.categories.map((id) => Number(id))
        : [];
      const isNews = cats.includes(7) || cats.includes(18);
      return n.id !== currentBlogId && isNews;
    })
    .slice(0, 8)
    .map((n) => ({
      ...n,
      featuredImage:
        n._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/default-image.jpg",
      categoryPath: "news",
    }));

  if (loading && !relatedNews.length) {
    return (
      <div className="fix12 py-[70px]">
        <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center py-10">
          Loading News...
        </p>
      </div>
    );
  }

  if (!relatedNews.length) return null;

  return <NewsSlider relatedNews={relatedNews} />;
}
