"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
GraduationCap,
Clock,
CheckCircle,
ArrowLeft,
BookOpen,
} from "lucide-react";
import Image from "next/image";
import { formatDuration, formatPrice } from "@/lib/format";

const AdmissionPage = () => {
const { data: session, status } = useSession();

const [admissions, setAdmissions] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const loadAdmissions = async () => {
if (status === "loading") {
return;
}

  if (!session?.user?.email) {
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(
      "/api/user/admissions?email=" +
        encodeURIComponent(session.user.email)
    );

    const data = await response.json();

    if (response.ok) {
      setAdmissions(data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

loadAdmissions();

}, [session, status]);

if (status === "loading" || loading) {
return (
<div className="min-h-screen flex items-center justify-center bg-slate-50">
<p className="text-slate-600">
Loading admissions...
</p>
</div>
);
}

if (!session) {
return (
<div className="min-h-screen flex items-center justify-center bg-slate-50">
<div className="text-center">
<h1 className="text-2xl font-bold">
Please login first
</h1>

      <Link
        href="/login"
        className="inline-block mt-4 bg-sky-600 text-white px-6 py-2 rounded-lg"
      >
        Login
      </Link>
    </div>
  </div>
);

}

return (
<div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">

  <div className="max-w-6xl mx-auto">

    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-600 mb-6"
    >
      <ArrowLeft size={16} />
      Back to Home
    </Link>

    <div className="mb-8">

      <div className="flex items-center gap-3">

        <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
          <GraduationCap size={28} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            My Admissions
          </h1>

          <p className="text-slate-500 mt-1">
            View your course admission and enrollment details.
          </p>
        </div>

      </div>

    </div>

    {admissions.length === 0 ? (

      <div className="bg-white border rounded-2xl shadow-sm p-10 text-center">

        <GraduationCap className="mx-auto h-14 w-14 text-slate-300" />

        <h2 className="text-xl font-semibold text-slate-700 mt-4">
          No Admissions Found
        </h2>

        <p className="text-slate-500 mt-2">
          You have not submitted any course admission yet.
        </p>

        <Link
          href="/"
          className="inline-block mt-5 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg"
        >
          Browse Courses
        </Link>

      </div>

    ) : (

      <div className="space-y-5">

        {admissions.map((admission) => {

          const course = admission.course;

          return (
            <div
              key={admission._id}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
            >

              <div className="flex flex-col md:flex-row">

                <div className="relative w-full md:w-64 h-48 md:h-auto bg-slate-100">

                  {course?.image ? (
                    <Image
                      fill
                      src={course.image}
                      alt={course.title || "Course"}
                      className="object-cover"
                      sizes="256px"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-slate-300" />
                    </div>
                  )}

                </div>

                <div className="flex-1 p-6">

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">

                    <div>

                      <span className="inline-block bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {course?.category?.name || "Course"}
                      </span>

                      <h2 className="text-2xl font-bold text-slate-800 mt-2">
                        {course?.title || "Course unavailable"}
                      </h2>

                    </div>

                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-sm font-semibold capitalize">
                      <CheckCircle size={15} />
                      {admission.status || "Enrolled"}
                    </span>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">

                    <div>
                      <p className="text-xs text-slate-400">
                        Instructor
                      </p>

                      <p className="font-medium text-slate-700 mt-1">
                        {course?.instructor || "Not available"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Duration
                      </p>

                      <div className="flex items-center gap-1 mt-1 text-slate-700">
                        <Clock size={15} />
                        {formatDuration(course?.duration)}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Course Fee
                      </p>

                      <p className="font-semibold text-sky-600 mt-1">
                        {formatPrice(course?.fee)}
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">

                    {course?._id && (
                      <Link
                        href={"/course/" + course._id}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-lg text-sm font-medium"
                      >
                        View Course
                      </Link>
                    )}

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    )}

  </div>
</div>

);
};

export default AdmissionPage;