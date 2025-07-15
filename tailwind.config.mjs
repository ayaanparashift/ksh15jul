/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xl-768": { min: "767px", max: "1023px" },
        "xl-1024": { min: "1024px", max: "1279px" },
        "xl-1280": { min: "1280px", max: "1365px" },
        "xl-1366": { min: "1366px", max: "1439px" },
        "xl-1440": { min: "1440px", max: "1535px" },
        "xl-1536": { min: "1536px", max: "1599px" },
        "xl-1600": { min: "1600px", max: "1919px" },
        "xl-1920": { min: "1920px" },
        "min-768": { min: "768px" },
        "min-1024": { min: "1024px" },
        "min-1280": { min: "1280px" },
        "min-1366": { min: "1366px" },
        "min-1440": { min: "1440px" },
        "min-1600": { min: "1600px" },
        "min-1920": { min: "1920px" },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
