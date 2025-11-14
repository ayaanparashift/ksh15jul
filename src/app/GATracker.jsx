"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GATracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = pathname + searchParams.toString();

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
