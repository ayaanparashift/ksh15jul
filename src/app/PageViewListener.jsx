"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageViewListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-EJMNK3JR62", {
        page_path: pathname,
      });
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: pathname,
      });
    }
  }, [pathname]);

  return null;
}
