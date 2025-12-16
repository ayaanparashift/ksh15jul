// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { BlogProvider } from "./context/BlogContext";
// import { TabProvider } from "./context/TabContext";
// import NavF from "./Components/NavF";
// import FooterF from "./Components/FooterF";
// import GlobalEnquire from "./Components/GlobalEnquire";
// import Script from "next/script";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { Toaster } from "react-hot-toast";
// import GATracker from "./GATracker";

// export const metadata = {
//   title: "KSH INFRA",
//   description: "KSH INFRA",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <GoogleAnalytics gaId="G-EJMNK3JR62" />
//       <head>
//         <Script
//           id="gtm-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-NBGQVCX');
//             `,
//           }}
//         />
//       </head>
//       <body>
//         {/* ✅ GTM noscript */}
//         <GATracker />
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
import GATracker from "./GATracker";
import { FormSubmitProvider } from "./context/FormSubmitContext";

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-EJMNK3JR62" />
      <head>
        {/* GTM */}
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

        {/* Ads conversion */}
        <Script
          id="ads-conversion-contact"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.gtag) {
                gtag('event', 'ads_conversion_contact', {});
              }
            `,
          }}
        />
      </head>

      <body>
        <GATracker />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <FormSubmitProvider>
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
        </FormSubmitProvider>
      </body>
    </html>
  );
}
