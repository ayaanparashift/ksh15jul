"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-EJMNK3JR62", { page_path: pathname });
    }
    if (window.dataLayer) {
      window.dataLayer.push({ event: "pageview", page: pathname });
    }
  }, [pathname]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EJMNK3JR62"
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EJMNK3JR62');
        `}
      </Script>
    </>
  );
}
