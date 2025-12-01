import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("adminToken")?.value || null;
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/admin/login" || path === "/admin/register";

  // Logged in → prevent visiting login page
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // Not logged in → block protected routes
  if (!token && !isPublicPath && path.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
