import { NextResponse } from "next/server";
import ConnectDb from "@/app/utils/ConnectDb";
import User from "@/app/models/User";
import Course from "@/app/models/Course";

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

const enrolledCourses = user.enrolledCourses || [];

const courses = await Course.find({
  _id: { $in: enrolledCourses },
}).lean();

return NextResponse.json(
  JSON.parse(JSON.stringify(courses)),
  { status: 200 }
);
} catch (error) {
console.error("MY COURSES ERROR:", error);

return NextResponse.json(
  {
    message: "Unable to fetch courses",
    error: error.message,
  },
  { status: 500 }
)

}
}