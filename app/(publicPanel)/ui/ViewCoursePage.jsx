import IconBadges from "@/components/IconBadges";
import { formatDuration, formatPrice } from "@/lib/format";
import {
  BarChart,
  Clock,
  List,
  ListChecks,
  Presentation,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import EnrollButton from "./EnrollButton";
import { marked } from "marked";

const ViewCoursePage = ({ course, user }) => {
  const isEnrolled = user?.enrolledCourses?.some(
    (c) => c.toString() === course._id.toString()
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Course Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">

            {/* Course Information */}
            <div className="lg:col-span-2 flex flex-col justify-center">

              {/* Category */}
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 mb-5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
                <List className="w-4 h-4" />
                {course.category?.name || "Course"}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 capitalize leading-tight mb-5">
                {course.title}
              </h1>

              {/* Description */}
              <div
                className="
                  prose prose-slate max-w-none
                  text-slate-600 leading-relaxed
                  prose-headings:text-slate-800
                  prose-a:text-teal-600
                  prose-strong:text-slate-800
                "
                dangerouslySetInnerHTML={{
                  __html: marked(course.description || ""),
                }}
              />

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Instructor</p>
                    <p className="font-semibold text-slate-700">
                      {course.instructor}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Duration</p>
                    <p className="font-semibold text-slate-700">
                      {formatDuration(course.duration)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border">
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Difficulty</p>
                    <p className="font-semibold text-slate-700">
                      {course.difficulty}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

                {/* Course Image */}
                <div className="relative w-full aspect-video">
                  <Image
                    fill
                    src={course.image}
                    alt={course.title}
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  {/* Price */}
                  <div className="mb-5">
                    <p className="text-sm text-slate-500 mb-1">
                      Course Fee
                    </p>

                    <p className="text-3xl font-bold text-teal-700">
                      {formatPrice(course.fee)}
                    </p>
                  </div>

                  {/* Course Details */}
                  <div className="space-y-4 border-t border-b py-5">

                    <div className="flex items-start gap-3">
                      <ListChecks className="w-5 h-5 text-teal-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500">
                          Prerequisites
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                          {course.prerequisites || "No prerequisites"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                      <div>
                        <p className="text-xs text-slate-500">
                          Course Status
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                          {course.status}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Enroll Button */}
                  <div className="mt-6">
                    <EnrollButton
                      courseId={course._id}
                      userId={user?._id}
                      isEnrolled={isEnrolled}
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewCoursePage;