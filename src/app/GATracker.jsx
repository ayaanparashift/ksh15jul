"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GATracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
}
