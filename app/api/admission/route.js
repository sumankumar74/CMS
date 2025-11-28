import Course from "@/app/models/Course";
import User from "@/app/models/User";
import Admission from "@/app/models/Admission"; // import Admission model
import ConnectDb from "@/app/utils/ConnectDb";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await ConnectDb();

    const body = await req.json();
    let { userId, courseId } = body;

    if (!userId || !courseId) {
      return new Response(JSON.stringify({ error: "userId and courseId required" }), { status: 400 });
    }

    if (!mongoose.isValidObjectId(userId) || !mongoose.isValidObjectId(courseId)) {
      return new Response(JSON.stringify({ error: "Invalid userId or courseId" }), { status: 400 });
    }

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      return new Response(JSON.stringify({ error: "User or Course not found" }), { status: 404 });
    }

    // Check if user already enrolled
    if (user.enrolledCourses.map(String).includes(String(courseId))) {
      return new Response(JSON.stringify({ message: "User already enrolled" }), { status: 200 });
    }

    // Update user and course
    user.enrolledCourses.push(courseId);
    await user.save();

    course.user = course.user || [];
    course.user.push(userId);
    await course.save();

    // ✅ Create Admission document
    const admission = new Admission({
      user: userId,
      course: courseId,
      status: "enrolled",
    });
    await admission.save();

    return new Response(JSON.stringify({
      message: "Enrolled successfully",
      user: JSON.parse(JSON.stringify(user)),
      course: JSON.parse(JSON.stringify(course)),
      admission: JSON.parse(JSON.stringify(admission)) // optional, for debugging
    }), { status: 200 });

  } catch (err) {
    console.error("Enroll API error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
