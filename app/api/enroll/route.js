import Admission from "@/app/models/Admission";
import Course from "@/app/models/Course";
import User from "@/app/models/User";
import ConnectDb from "@/app/utils/ConnectDb";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await ConnectDb();

    const body = await req.json();
    const { userId, courseId } = body;

    if (!mongoose.isValidObjectId(userId) || !mongoose.isValidObjectId(courseId)) {
      return new Response(JSON.stringify({ error: "Invalid IDs" }), { status: 400 });
    }

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      return new Response(JSON.stringify({ error: "User or Course not found" }), { status: 404 });
    }

    // Prevent duplicate admission
    const exists = await Admission.findOne({ user: userId, course: courseId });
    if (exists) {
      return new Response(JSON.stringify({ message: "Already enrolled" }), { status: 200 });
    }

    // 📌 CORRECT FIELD NAMES (MAIN FIX)
    await Admission.create({
      user: userId,
      course: courseId,
      status: "enrolled",
    });

    // Update user
    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      await user.save();
    }

    // Update course
    if (!course.user.includes(userId)) {
      course.user.push(userId);
      await course.save();
    }

    return new Response(
      JSON.stringify({ message: "Successfully enrolled" }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Enroll API error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
