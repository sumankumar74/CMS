import User from "@/app/models/User";
import ConnectDb from "@/app/utils/ConnectDb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
try {
await ConnectDb();

const {
  name,
  email,
  password,
  father,
  gender,
  address,
} = await req.json();

if (!name || !email || !password || !father || !gender || !address) {
  return NextResponse.json(
    { message: "All fields are required" },
    { status: 400 }
  );
}

const existingUser = await User.findOne({ email });

if (existingUser) {
  return NextResponse.json(
    { message: "Email already exists" },
    { status: 400 }
  );
}

const hashedPassword = await bcrypt.hash(password, 10);

await User.create({
  name,
  email,
  father,
  gender,
  address,
  password: hashedPassword,
});

return NextResponse.json(
  { message: "Registration successful" },
  { status: 201 }
);


} catch (error) {
console.error("REGISTER ERROR:", error);

return NextResponse.json(
  {
    message: "Registration failed",
    error: error.message,
  },
  { status: 500 }
);


}
}
