// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { hostname, pathname, search } = request.nextUrl;

  // Normalize hostname: remove ports and convert to lowercase
  const normalizedHostname = hostname.toLowerCase().split(":")[0];

  // Log for debugging
  console.log("Middleware hostname:", normalizedHostname);

  // Check for kshinfra.com (non-www) or variations
  if (
    normalizedHostname === "kshinfra.com" ||
    normalizedHostname === "kshinfra-com"
  ) {
    const redirectUrl = `https://www.kshinfra.com${pathname}${search}`;
    console.log("Redirecting to:", redirectUrl);
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"],
};
