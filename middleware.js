import { NextResponse } from "next/server";

export function middleware(request) {
    let path = request.nextUrl.pathname;

    const isPublicPath = path === "/Register" || path == "/signup";

    const token = request.cookies.get("token")?.value || ""

    if(isPublicPath && token){
        return NextResponse.redirect(new URL(`${path}`, request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/Register", request.nextUrl))
    }
}

export const config = {
    matcher : ['/admin','/admin/categories','/admin/courses/insert','/admin/courses','/admin/dashboard']
}
