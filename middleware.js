// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  const normalizedHost = host.toLowerCase().split(":")[0]; // strip port if present

  // Debug logs
  console.log("Middleware host:", normalizedHost);

  // Redirect non-www → www
  if (normalizedHost === "kshinfra.com") {
    const redirectUrl = `https://www.kshinfra.com${pathname}${search}`;
    console.log("Redirecting to:", redirectUrl);
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"],
};
