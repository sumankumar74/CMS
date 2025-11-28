import IconBadges from "@/components/IconBadges";
import { formatDuration, formatPrice } from "@/lib/format";
import { BarChart, Clock, List, ListChecks, Presentation } from "lucide-react";
import Image from "next/image";
import EnrollButton from "./EnrollButton";
import { marked } from "marked";

const ViewCoursePage = ({ course, user }) => {
  const isEnrolled = user?.enrolledCourses?.some(
    (c) => c.toString() === course._id.toString()
  );
  return (
    <>
      <div className="w-full h-auto  mb-4 rounded-sm flex border border-teal-600 shadow-md p-4 ">
        <div className=" p-8 flex flex-col gap-y-3 w-8/12  ">
          <h1 className="font-bold text-4xl capitalize ">{course.title}</h1>
          <div className="flex items-center   text-md ">
            <List className="w-4 h-4 mr-2" />
            <span>{course.category?.name}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: marked(course.description) }}
          />
        </div>
        <div className="flex justify-end items-start right-[50px] p-4 w-4/12 ">
          <div className=" h-auto overflow-hidden bg-white border-teal-600 rounded-md px-2 border-2 shadow-md">
            <Image
              width={320}
              height={250}
              className="object-cover py-2 rounded-md"
              src={course.image}
              alt={course.title}
            />
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-x-2 ">
                <IconBadges size="sm" icon={Presentation} />
                <span>Instructor: {course.instructor}</span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <IconBadges size="sm" icon={Clock} />
                <span>Duration: {formatDuration(course.duration)}</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <IconBadges size="sm" icon={ListChecks} />
                <span>Prerequisites: {course.prerequisites}</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <IconBadges size="sm" icon={BarChart} />
                <span>Difficulty: {course.difficulty}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl">{formatPrice(course.fee)}</span>
              </div>
              <div className="gap-y-2 items-center flex justify-center w-full">
                <EnrollButton
                  courseId={course._id}
                  userId={user?._id}
                  isEnrolled={user?.enrolledCourses?.some(
                    (c) => c.toString() === course._id.toString()
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCoursePage;
