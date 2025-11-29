import { NextResponse } from "next/server";

export function proxy(request) {
  const path = request.nextUrl.pathname;

  // Public routes
  const publicPaths = ["/admin/register", "/signup", "/admin/login"];
  const token = request.cookies.get("token")?.value || "";

  // If user is logged in and tries to access public page → redirect to dashboard
  if (publicPaths.includes(path) && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
  }

  // If user is not logged in and tries to access private page → redirect to login
  const privatePaths = [
    "/admin",
    "/admin/categories",
    "/admin/courses",
    "/admin/courses/insert",
    "/admin/dashboard",
  ];

  if (privatePaths.includes(path) && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  }

  // Otherwise, allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/categories",
    "/admin/courses/insert",
    "/admin/courses",
    "/admin/dashboard",
    "/admin/register",
    "/admin/login",
  ],
};
