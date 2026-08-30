import { NextResponse } from "next/server";
import ConnectDb from "@/app/utils/ConnectDb";
import User from "@/app/models/User";

export const dynamic = "force-dynamic";

export async function GET(req) {
try {
await ConnectDb();

const { searchParams } = new URL(req.url);
const email = searchParams.get("email");

if (!email) {
  return NextResponse.json(
    { message: "User email is required" },
    { status: 400 }
  );
}

const user = await User.findOne({ email })
  .select("-password")
  .lean();

if (!user) {
  return NextResponse.json(
    { message: "User not found" },
    { status: 404 }
  );
}

return NextResponse.json(
  JSON.parse(JSON.stringify(user)),
  { status: 200 }
);

} catch (error) {
console.error("PROFILE ERROR:", error);

return NextResponse.json(
  {
    message: "Unable to fetch profile",
    error: error.message,
  },
  { status: 500 }
);

}
}