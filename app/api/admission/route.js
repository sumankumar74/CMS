import Course from "@/app/models/Course";
import User from "@/app/models/User";
import Admission from "@/app/models/Admission";
import ConnectDb from "@/app/utils/ConnectDb";
import mongoose from "mongoose";

export async function POST(req) {
try {
await ConnectDb();

const { userId, courseId } = await req.json();

if (!userId || !courseId) {
  return new Response(
    JSON.stringify({
      error: "userId and courseId are required",
    }),
    { status: 400 }
  );
}

if (
  !mongoose.isValidObjectId(userId) ||
  !mongoose.isValidObjectId(courseId)
) {
  return new Response(
    JSON.stringify({
      error: "Invalid userId or courseId",
    }),
    { status: 400 }
  );
}

const user = await User.findById(userId);
const course = await Course.findById(courseId);

if (!user || !course) {
  return new Response(
    JSON.stringify({
      error: "User or Course not found",
    }),
    { status: 404 }
  );
}

const alreadyEnrolled = user.enrolledCourses
  .map(String)
  .includes(String(courseId));

let admission = await Admission.findOne({
  user: userId,
  course: courseId,
});

if (alreadyEnrolled) {
  if (!admission) {
    admission = await Admission.create({
      user: userId,
      course: courseId,
      status: "enrolled",
    });
  }

  return new Response(
    JSON.stringify({
      message: "User already enrolled",
      user: JSON.parse(JSON.stringify(user)),
      course: JSON.parse(JSON.stringify(course)),
      admission: JSON.parse(JSON.stringify(admission)),
    }),
    { status: 200 }
  );
}

user.enrolledCourses.push(courseId);
await user.save();

course.user = course.user || [];

const courseAlreadyHasUser = course.user
  .map(String)
  .includes(String(userId));

if (!courseAlreadyHasUser) {
  course.user.push(userId);
  await course.save();
}

if (!admission) {
  admission = await Admission.create({
    user: userId,
    course: courseId,
    status: "enrolled",
  });
}

return new Response(
  JSON.stringify({
    message: "Enrolled successfully",
    user: JSON.parse(JSON.stringify(user)),
    course: JSON.parse(JSON.stringify(course)),
    admission: JSON.parse(JSON.stringify(admission)),
  }),
  { status: 200 }
);

} catch (err) {
console.error("Enroll API error:", err);

return new Response(
  JSON.stringify({
    error: "Server error",
    details: err.message,
  }),
  { status: 500 }
);

}
}