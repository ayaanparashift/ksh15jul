import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav/Nav";
import GlobalEnquire from "./Components/GlobalEnquire";
import { Toaster } from "react-hot-toast";
import { TabProvider } from "./context/TabContext";
import { BlogProvider } from "./context/BlogContext";

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased bodylayout`}>
        <BlogProvider>
          <TabProvider>
            <GlobalEnquire>
              <Navbar />
              {/* <div className="h-[100px] max-w-screen relative z-[100000000000000000000000]" /> */}
              <Toaster position="top-center" reverseOrder={false} />
              {children}

              <Footer />
            </GlobalEnquire>
          </TabProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
