import { NextResponse } from "next/server";

export function proxy(request) {
    let path = request.nextUrl.pathname;

    const isPublicPath = path === "/admin/login" || path == "/admin/register";

    const token = request.cookies.get("token")?.value || ""

    if(isPublicPath && token){
        return NextResponse.redirect(new URL(`${path}`, request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/admin/login", request.nextUrl))
    }
}

export const config = {
    matcher : ['/admin','/admin,dashboard','/admin/course','/admin/categories','/admin/admission','/admin/students', '/login', '/signup']
}
