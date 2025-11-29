import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import ConnectDb from "@/app/utils/ConnectDb";
import Admin from "@/app/models/Admin";

export const POST = async (req) => {
  await ConnectDb();

  try {
    const { username, password } = await req.json();

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json({ msg: "Invalid username", success: false }, { status: 400 });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return NextResponse.json({ msg: "Invalid username or password", success: false }, { status: 400 });
    }

    // JWT token
    const tokenData = {
      id: admin._id,
      username: admin.username,
    };

    const token = Jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1h" });

    const response = NextResponse.json({ msg: "Login Successful", success: true });
    response.cookies.set("token", token, { httpOnly: true, path: "/" });

    return response;
  } catch (err) {
    return NextResponse.json({ msg: "Something went wrong", error: err.message }, { status: 500 });
  }
};
