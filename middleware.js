// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { hostname, pathname, search } = request.nextUrl;

  if (hostname === "kshinfra.com") {
    return NextResponse.redirect(
      `https://www.kshinfra.com${pathname}${search}`,
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"],
};
