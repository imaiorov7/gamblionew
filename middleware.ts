import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname === "/under-construction"
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/under-construction", request.url));
}

export const config = {
  matcher: "/:path*",
};
