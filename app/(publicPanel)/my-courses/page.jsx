"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
BookOpen,
Clock,
GraduationCap,
User,
} from "lucide-react";
import { formatDuration, formatPrice } from "@/lib/format";

const MyCoursesPage = () => {
const { data: session, status } = useSession();

const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
const loadCourses = async () => {
if (status === "loading") {
return;
}

  if (!session?.user?.email) {
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(
      "/api/user/courses?email=" +
        encodeURIComponent(session.user.email)
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to load courses");
    }

    setCourses(data);
  } catch (err) {
    console.error(err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

loadCourses();

}, [session, status]);

if (status === "loading" || loading) {
return (
<div className="min-h-screen bg-slate-50 flex items-center justify-center">
<div className="text-lg font-medium text-slate-600">
Loading your courses...
</div>
</div>
);
}

if (!session) {
return (
<div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
<div className="bg-white rounded-2xl shadow-sm border p-8 text-center max-w-md">
<BookOpen className="mx-auto h-12 w-12 text-sky-500" />

      <h1 className="text-2xl font-bold text-slate-800 mt-4">
        Login Required
      </h1>

      <p className="text-slate-500 mt-2">
        Please login to view your enrolled courses.
      </p>

      <Link
        href="/login"
        className="inline-block mt-5 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg"
      >
        Login
      </Link>
    </div>
  </div>
);

}

if (error) {
return (
<div className="min-h-screen bg-slate-50 flex items-center justify-center">
<div className="text-red-600">
{error}
</div>
</div>
);
}

return (
<div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">

  <div className="max-w-7xl mx-auto">

    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
          <BookOpen size={26} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            My Courses
          </h1>

          <p className="text-slate-500 mt-1">
            Courses you have enrolled in.
          </p>
        </div>
      </div>
    </div>

    {courses.length === 0 ? (
      <div className="bg-white border rounded-2xl shadow-sm p-10 text-center">
        <GraduationCap className="mx-auto h-14 w-14 text-slate-300" />

        <h2 className="text-xl font-semibold text-slate-700 mt-4">
          No Courses Yet
        </h2>

        <p className="text-slate-500 mt-2">
          You have not enrolled in any course yet.
        </p>

        <Link
          href="/"
          className="inline-block mt-5 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg"
        >
          Browse Courses
        </Link>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((course) => (
          <Link
            key={course._id}
            href={"/course/" + course._id}
          >
            <div className="group h-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

              <div className="relative aspect-video bg-slate-100 overflow-hidden">

                {course.image ? (
                  <Image
                    fill
                    src={course.image}
                    alt={course.title || "Course"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    <BookOpen className="h-14 w-14 text-slate-300" />
                  </div>
                )}

              </div>

              <div className="p-5">

                <span className="inline-block bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {course.category?.name || "Course"}
                </span>

                <h2 className="text-xl font-semibold text-slate-800 mt-3 line-clamp-2 group-hover:text-sky-600 transition">
                  {course.title}
                </h2>

                <div className="mt-4 space-y-2">

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <User size={16} />
                    <span>
                      {course.instructor || "Instructor not available"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock size={16} />
                    <span>
                      {formatDuration(course.duration)}
                    </span>
                  </div>

                </div>

                <div className="mt-5 pt-4 border-t flex justify-between items-center">

                  <span className="text-lg font-bold text-sky-600">
                    {formatPrice(course.fee)}
                  </span>

                  <span className="text-sm font-semibold text-slate-500 group-hover:text-sky-600">
                    View Course →
                  </span>

                </div>

              </div>
            </div>
          </Link>
        ))}

      </div>
    )}

  </div>
</div>

);
};

export default MyCoursesPage;