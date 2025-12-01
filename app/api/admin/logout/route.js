import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json(
    { message: "Admin logged out successfully" },
    { status: 200 }
  );

  res.cookies.set("adminToken", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0), // delete cookie
  });

  return res;
}
