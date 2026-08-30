
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/app/models/Admin";
import ConnectDb from "@/app/utils/ConnectDb";
import { serialize } from "cookie";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await ConnectDb();

    const { username, password } = await req.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          msg: "Username and password are required",
        },
        { status: 400 }
      );
    }

    // Find admin in MongoDB
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          msg: "Invalid username or password",
        },
        { status: 401 }
      );
    }

    // Compare entered password with hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          msg: "Invalid username or password",
        },
        { status: 401 }
      );
    }

    // Create admin session token
    const token = "admin-session-token";

    const response = NextResponse.json(
      {
        success: true,
        msg: "Login successful",
      },
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
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      {
        success: false,
        msg: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
