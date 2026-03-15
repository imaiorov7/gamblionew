import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname === "/under-construction" ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next();
  }
  // Prevent redirect loop once already on /widgets
  if (pathname !== "/widgets") {
    return NextResponse.redirect(new URL("/widgets#widgets-demo", request.url));
  }

  return NextResponse.next();

  // return NextResponse.redirect(new URL("/widgets#widgets-demo", request.url));
}
