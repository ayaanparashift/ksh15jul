// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Nav from "./Components/Nav/Nav";
// import GlobalEnquire from "./Components/GlobalEnquire";
// import { Toaster } from "react-hot-toast";
// import { TabProvider } from "./context/TabContext";
// import { BlogProvider } from "./context/BlogContext";
// import FooterF from "./Components/FooterF";
// import NavF from "./Components/NavF";
// // import { ReactLenis } from "lenis/react";

// export const metadata = {
//   title: "KSH INFRA",
//   description: "KSH INFRA",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={` antialiased bodylayout`}>
//         {/* <ReactLenis
//           root
//           options={{
//             lerp: 0.07,
//             wheelMultiplier: 1.2,
//             smoothWheel: true,
//             smoothTouch: false,
//           }}
//         > */}
//         <BlogProvider>
//           <TabProvider>
//             <GlobalEnquire>
//               <NavF />
//               {/* <div className="h-[100px] max-w-screen relative z-[100000000000000000000000]" /> */}
//               <Toaster position="top-center" reverseOrder={false} />
//               {children}

//               <FooterF />
//             </GlobalEnquire>
//           </TabProvider>
//         </BlogProvider>
//         {/* </ReactLenis> */}
//       </body>
//     </html>
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
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Nav from "./Components/Nav/Nav";
// import GlobalEnquire from "./Components/GlobalEnquire";
// import { Toaster } from "react-hot-toast";
// import { TabProvider } from "./context/TabContext";
// import { BlogProvider } from "./context/BlogContext";
// import FooterF from "./Components/FooterF";
// import NavF from "./Components/NavF";
// import Script from "next/script"; // ✅ Needed for GTM

// export const metadata = {
//   title: "KSH INFRA",
//   description: "KSH INFRA",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Google Tag Manager Script */}
//         <Script id="gtm-script" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-NBGQVCX');
//           `}
//         </Script>
//       </head>
//       <body className={`antialiased bodylayout`}>
//         {/* ✅ Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         {/* <ReactLenis root options={{ lerp: 0.07, wheelMultiplier: 1.2, smoothWheel: true, smoothTouch: false }}> */}
//         <BlogProvider>
//           <TabProvider>
//             <GlobalEnquire>
//               <NavF />
//               <Toaster position="top-center" reverseOrder={false} />
//               {children}
//               <FooterF />
//             </GlobalEnquire>
//           </TabProvider>
//         </BlogProvider>
//         {/* </ReactLenis> */}
//       </body>
//     </html>
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
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Nav from "./Components/Nav/Nav";
// import GlobalEnquire from "./Components/GlobalEnquire";
// import { Toaster } from "react-hot-toast";
// import { TabProvider } from "./context/TabContext";
// import { BlogProvider } from "./context/BlogContext";
// import FooterF from "./Components/FooterF";
// import NavF from "./Components/NavF";
// import Script from "next/script"; // ✅ Needed for GTM

// export const metadata = {
//   title: "KSH INFRA",
//   description: "KSH INFRA",
// };

// export default function RootLayout({ children }) {
//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "@id": "https://www.kshinfra.com/#localbusiness",
//     name: "KSH Infra",
//     url: "https://www.kshinfra.com/",
//     logo: "https://www.kshinfra.com/nav/kshlogo.svg",
//     image: "https://www.kshinfra.com/homepage/abc1.png",
//     address:
//       "Gokhale Sanchit, Office No. 4, Survey No. 846, Servants of India Society, Near Marathwada College, Shivajinagar, Pune, Maharashtra - 411 004 (India)",
//     telephone: "1800-212-2030",
//     sameAs: [
//       "https://www.instagram.com/kshinfrapark/",
//       "https://www.facebook.com/KSHInfraIndia/",
//       "https://www.linkedin.com/company/ksh-infra/?viewAsMember=true",
//     ],
//     areaServed: "India",
//   };

//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Google Tag Manager Script */}
//         <Script id="gtm-script" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-NBGQVCX');
//           `}
//         </Script>

//         {/* ✅ JSON-LD LocalBusiness Schema */}
//         <Script
//           id="local-business-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//         >
//           {JSON.stringify(localBusinessSchema)}
//         </Script>
//       </head>
//       <body className={`antialiased bodylayout`}>
//         {/* ✅ Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         <BlogProvider>
//           <TabProvider>
//             <GlobalEnquire>
//               <NavF />
//               <Toaster position="top-center" reverseOrder={false} />
//               {children}
//               <FooterF />
//             </GlobalEnquire>
//           </TabProvider>
//         </BlogProvider>
//       </body>
//     </html>
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
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Nav from "./Components/Nav/Nav";
// import GlobalEnquire from "./Components/GlobalEnquire";
// import { Toaster } from "react-hot-toast";
// import { TabProvider } from "./context/TabContext";
// import { BlogProvider } from "./context/BlogContext";
// import FooterF from "./Components/FooterF";
// import NavF from "./Components/NavF";
// import Script from "next/script"; // ✅ Needed for GTM

// export const metadata = {
//   title: "KSH INFRA",
//   description: "KSH INFRA",
// };

// export default function RootLayout({ children }) {
//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "@id": "https://www.kshinfra.com/#localbusiness",
//     name: "KSH Infra",
//     url: "https://www.kshinfra.com/",
//     logo: "https://www.kshinfra.com/nav/kshlogo.svg",
//     image: "https://www.kshinfra.com/homepage/abc1.png",
//     address:
//       "Gokhale Sanchit, Office No. 4, Survey No. 846, Servants of India Society, Near Marathwada College, Shivajinagar, Pune, Maharashtra - 411 004 (India)",
//     telephone: "1800-212-2030",
//     sameAs: [
//       "https://www.instagram.com/kshinfrapark/",
//       "https://www.facebook.com/KSHInfraIndia/",
//       "https://www.linkedin.com/company/ksh-infra/?viewAsMember=true",
//     ],
//     areaServed: "India",
//   };

//   return (
//     <html lang="en">
//       <head>
//         {/* GTM Script */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-EJMNK3JR62"
//           strategy="afterInteractive"
//         />
//         <Script id="ga-script" strategy="afterInteractive">
//           {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', 'G-EJMNK3JR62');
//         `}
//         </Script>

//         {/* ✅ Server-side JSON-LD */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(localBusinessSchema),
//           }}
//         />
//       </head>
//       <body className={`antialiased bodylayout`}>
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         <BlogProvider>
//           <TabProvider>
//             <GlobalEnquire>
//               <NavF />
//               <Toaster position="top-center" reverseOrder={false} />
//               {children}
//               <FooterF />
//             </GlobalEnquire>
//           </TabProvider>
//         </BlogProvider>
//       </body>
//     </html>
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
//
//
//
//
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import Analytics from "./Analytics"; // ✅ import component
// import { BlogProvider } from "./context/BlogContext";
// import { TabProvider } from "./context/TabContext";
// import NavF from "./Components/NavF";
// import FooterF from "./Components/FooterF";
// import GlobalEnquire from "./Components/GlobalEnquire";
// import { Toaster } from "react-hot-toast";

// export const metadata = {
//   title: "KSH INFRA",
//   description: "KSH INFRA",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Google Tag Manager */}
//         <Script id="gtm-script" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-NBGQVCX');
//           `}
//         </Script>

//         {/* ✅ Analytics Component */}
//         <Analytics />
//       </head>
//       <body>
//         {/* ✅ GTM noscript */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         <BlogProvider>
//           <TabProvider>
//             <GlobalEnquire>
//               <NavF />
//               <Toaster position="top-center" reverseOrder={false} />
//               {children}
//               <FooterF />
//             </GlobalEnquire>
//           </TabProvider>
//         </BlogProvider>
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BlogProvider } from "./context/BlogContext";
import { TabProvider } from "./context/TabContext";
import NavF from "./Components/NavF";
import FooterF from "./Components/FooterF";
import GlobalEnquire from "./Components/GlobalEnquire";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-EJMNK3JR62" />
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBGQVCX');
            `,
          }}
        />
      </head>
      <body>
        {/* ✅ GTM noscript */}
        <noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
        </noscript>

        <BlogProvider>
          <TabProvider>
            <GlobalEnquire>
              <NavF />
              <Toaster position="top-center" reverseOrder={false} />
              {children}
              <FooterF />
            </GlobalEnquire>
          </TabProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
