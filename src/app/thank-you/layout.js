// import Script from "next/script";

// export default function ThankYouLayout({ children }) {
//   return (
//     <html>
//       <body>
//         <Script
//           id="ads-conversion-submit-lead-form-1"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.addEventListener("load", function () {
//                 if (window.gtag) {
//                   gtag('event', 'ads_conversion_SUBMIT_LEAD_FORM_1', {});
//                 }
//               });
//             `,
//           }}
//         />

//         {children}
//       </body>
//     </html>
//   );
// }
import Script from "next/script";

export default function ThankYouLayout({ children }) {
  return (
    <>
      <Script
        id="ads-conversion-submit-lead-form-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", function () {
              if (window.gtag) {
                gtag('event', 'ads_conversion_SUBMIT_LEAD_FORM_1', {});
              }
            });
          `,
        }}
      />

      {children}
    </>
  );
}
