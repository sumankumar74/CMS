import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req) {
  const { username, password } = await req.json();

  // Dummy authentication (replace with DB logic)
  if (username !== "admin" || password !== "123456") {
    return NextResponse.json(
      { success: false, msg: "Invalid username or password" },
      { status: 401 }
    );
  }

  // Generate simple token
  const token = "admin-session-token";

  const response = NextResponse.json(
    { success: true, msg: "Login successful" },
    { status: 200 }
  );

  response.headers.append(
    "Set-Cookie",
    serialize("adminToken", token, {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "strict",
    })
  );

  return response;
}
