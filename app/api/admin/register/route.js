import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/app/models/Admin";
import ConnectDb from "@/app/utils/ConnectDb";

export const dynamic = "force-dynamic";

// ========== GET ==========
export async function GET() {
  return NextResponse.json({ message: "Admin API working" });
}

// ========== POST ==========
export async function POST(req) {
  await ConnectDb();

  try {
    const { username, password } = await req.json();

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save admin
    const admin = new Admin({
      username,
      password: hashedPassword,
    });

    await admin.save();

    return NextResponse.json({ msg: "Admin Account Created Successfully" });
  } catch (err) {
    return NextResponse.json({
      msg: "Something went wrong",
      error: err.message,
    });
  }
}
