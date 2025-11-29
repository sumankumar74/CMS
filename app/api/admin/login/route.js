import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/app/models/Admin";
import ConnectDb from "@/app/utils/ConnectDb";

export const POST = async (req) => {
  try {
    await ConnectDb();

    const { username, password } = await req.json();
    const admin = await Admin.findOne({ username });

    if (!admin)
      return NextResponse.json({ msg: "Invalid username" }, { status: 400 });

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword)
      return NextResponse.json(
        { msg: "Invalid username or password" },
        { status: 400 }
      );

    // Login successful → generate a JWT token (optional) or just send success
    return NextResponse.json({ msg: "Admin Logged In Successfully", success: true });
  } catch (err) {
    return NextResponse.json(
      { msg: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
};
