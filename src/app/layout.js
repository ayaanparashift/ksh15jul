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

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav/Nav";
import GlobalEnquire from "./Components/GlobalEnquire";
import { Toaster } from "react-hot-toast";
import { TabProvider } from "./context/TabContext";
import { BlogProvider } from "./context/BlogContext";
import FooterF from "./Components/FooterF";
import NavF from "./Components/NavF";
import Script from "next/script"; // ✅ Needed for GTM

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBGQVCX');
          `}
        </Script>
      </head>
      <body className={`antialiased bodylayout`}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBGQVCX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* <ReactLenis root options={{ lerp: 0.07, wheelMultiplier: 1.2, smoothWheel: true, smoothTouch: false }}> */}
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
        {/* </ReactLenis> */}
      </body>
    </html>
  );
}
