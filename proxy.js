import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/admin/login" || path === "/admin/register";

  // If logged in and on login page → redirect to dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // If NOT logged in and trying to access private path → redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path* , /admin/dashboard/:path* , /admin/courses/:path* , /admin/users/:path* , /admin/profile/:path* , /admin/login , /admin/register",
  ],
};
