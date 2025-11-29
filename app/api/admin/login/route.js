import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import ConnectDb from "@/app/utils/ConnectDb";
import Admin from "@/app/models/Admin";

export const dynamic = "force-dynamic";
export const POST = async (req) => {
  await ConnectDb();
  let records = await req.json();
  let { username, password } = records;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json({ msg: "Invalid Username" }, { status: 400 });
    }
    const validPassword = await bycrypt.compare(password, admin.password);
    if (!validPassword) {
      return NextResponse.json(
        { msg: "Invalid username or password" },
        { status: 400 }
      );
    }

    //if all ok then
    let tokenData = {
      id: admin,
      username: admin.username,
    };
    let token = Jwt.sign(tokenData, "myproject", { expiresIn: "1h" });

    let response = NextResponse.json({
      msg: "Login Successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (err) {
    return NextResponse.json({ err: err.message });
  }
};
