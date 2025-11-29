import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import ConnectDb from "@/app/utils/ConnectDb";
import Admin from "@/app/models/Admin";

export async function POST(req) {
  await ConnectDb();

  try {
    const { username, password } = await req.json();

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json({ msg: "Invalid Username" }, { status: 400 });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return NextResponse.json(
        { msg: "Invalid Username or Password" },
        { status: 400 }
      );
    }

    // Create token with only useful data
    const tokenData = {
      id: admin._id,
      username: admin.username,
    };

    const token = Jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Prepare response
    const response = NextResponse.json(
      { msg: "Login Successful", success: true },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      { msg: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}
