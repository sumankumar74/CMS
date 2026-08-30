import { NextResponse } from "next/server";
import ConnectDb from "@/app/utils/ConnectDb";
import User from "@/app/models/User";
import Admission from "@/app/models/Admission";

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

const user = await User.findOne({ email }).lean();

if (!user) {
  return NextResponse.json(
    { message: "User not found" },
    { status: 404 }
  );
}

const admissions = await Admission.find({
  user: user._id,
})
  .populate("course")
  .lean();

return NextResponse.json(
  JSON.parse(JSON.stringify(admissions)),
  { status: 200 }
);

} catch (error) {
console.error("ADMISSIONS ERROR:", error);

return NextResponse.json(
  {
    message: "Unable to fetch admissions",
    error: error.message,
  },
  { status: 500 }
);

}
}