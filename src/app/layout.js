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
import { ReactLenis } from "lenis/react";

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased bodylayout`}>
        <ReactLenis
          root
          options={{
            lerp: 0.07,
            wheelMultiplier: 1.2,
            smoothWheel: true,
            smoothTouch: false,
          }}
        >
          <BlogProvider>
            <TabProvider>
              <GlobalEnquire>
                <NavF />
                {/* <div className="h-[100px] max-w-screen relative z-[100000000000000000000000]" /> */}
                <Toaster position="top-center" reverseOrder={false} />
                {children}

                <FooterF />
              </GlobalEnquire>
            </TabProvider>
          </BlogProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
