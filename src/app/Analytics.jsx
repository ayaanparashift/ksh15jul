"use client";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 (gtag.js) */}
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
