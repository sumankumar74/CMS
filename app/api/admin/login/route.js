
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import ConnectDb from "@/app/utils/ConnectDb";
import Admin from "@/app/models/Admin";

export const POST = async (req) => {
  await ConnectDb();

  const headers = {
    "Access-Control-Allow-Origin": "*", // or specify your frontend domain
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { headers });
  }

  try {
    const records = await req.json();
    const { username, password } = records;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json({ msg: "Invalid Username" }, { status: 400, headers });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return NextResponse.json(
        { msg: "Invalid username or password" },
        { status: 400, headers }
      );
    }

    const tokenData = {
      id: admin._id,
      username: admin.username,
    };

    const token = Jwt.sign(tokenData, process.env.NEXTAUTH_SECRET, { expiresIn: "1h" });

    const response = NextResponse.json(
      { msg: "Login Successful", success: true },
      { headers }
    );

    response.cookies.set("token", token, { httpOnly: true, path: "/" });

    return response;
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500, headers });
  }
};
