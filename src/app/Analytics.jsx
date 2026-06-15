"use client";
// "use client";
// import Script from "next/script";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// export default function Analytics() {
//   const pathname = usePathname();

//   useEffect(() => {
//     if (window.gtag) {
//       window.gtag("config", "G-EJMNK3JR62", { page_path: pathname });
//     }
//     if (window.dataLayer) {
//       window.dataLayer.push({ event: "pageview", page: pathname });
//     }
//   }, [pathname]);

//   return (
//     <>
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-EJMNK3JR62"
//         strategy="afterInteractive"
//       />
//       <Script id="ga-script" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-EJMNK3JR62');
//         `}
//       </Script>
//       {/* <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-8DSDBMLK6H"
//         strategy="afterInteractive"
//       />
//       <Script id="ga-script" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-8DSDBMLK6H');
//         `}
//       </Script> */}
//     </>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import Script from "next/script";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// export default function Analytics() {
//   const pathname = usePathname();

//   useEffect(() => {
//     const sendPageview = () => {
//       if (window.gtag) {
//         window.gtag("config", "G-8DSDBMLK6H", { page_path: pathname });
//       }
//       if (window.dataLayer) {
//         window.dataLayer.push({ event: "pageview", page: pathname });
//       }
//     };

//     if (window.gtag) {
//       sendPageview();
//     } else {
//       const interval = setInterval(() => {
//         if (window.gtag) {
//           sendPageview();
//           clearInterval(interval);
//         }
//       }, 100);
//     }
//   }, [pathname]);

//   return (
//     <>
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-EJMNK3JR62"
//         strategy="afterInteractive"
//       />
//       <Script id="ga-script" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-EJMNK3JR62');
//         `}
//       </Script>
//       ;
//     </>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import Script from "next/script";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef } from "react";

// export default function Analytics() {
//   const pathname = usePathname();
//   const initialized = useRef(false);

//   useEffect(() => {
//     if (!initialized.current) {
//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({ event: "pageview", page: pathname });
//       initialized.current = true;
//     } else {
//       // SPA route change
//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({ event: "pageview", page: pathname });
//     }
//   }, [pathname]);

//   return (
//     <>
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-EJMNK3JR62"
//         strategy="afterInteractive"
//       />
//       <Script id="ga-script" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-EJMNK3JR62', { send_page_view: false });
//         `}
//       </Script>
//     </>
//   );
// }
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Fire pageview when route changes
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-EJMNK3JR62", {
        page_path: pathname,
      });
    } else {
      // In case gtag isn't ready yet, retry a few times
      let attempts = 0;
      const interval = setInterval(() => {
        if (window.gtag) {
          window.gtag("config", "G-EJMNK3JR62", {
            page_path: pathname,
          });
          clearInterval(interval);
        }
        if (++attempts > 10) clearInterval(interval); // stop after 10 tries
      }, 500);
    }
  }, [pathname]);

  return (
    <>
      {/* Load GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EJMNK3JR62"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Disable auto page_view so we can control SPA tracking
          gtag('config', 'G-EJMNK3JR62', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
