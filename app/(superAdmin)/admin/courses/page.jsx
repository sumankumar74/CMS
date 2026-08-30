import ConnectDb from "@/app/utils/ConnectDb";
import Link from "next/link";
import Course from "@/app/models/Course";
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbList,
BreadcrumbPage,
BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "../ui/data-table";
import { columns } from "./coulumn";
import { Plus, ArrowLeft, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";

const page = async ({ searchParams }) => {
await ConnectDb();

const params = await searchParams;
const categoryId = params?.category;

let courses;

if (categoryId) {
courses = await Course.find({
category: categoryId,
});
} else {
courses = await Course.find();
}

courses = JSON.parse(JSON.stringify(courses));

return ( <div className="min-h-screen bg-slate-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/admin/dashboard"
              className="text-slate-500 hover:text-sky-600"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="text-slate-800 font-medium">
              Courses
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-sky-100 text-sky-700">
            <BookOpen size={26} />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              {categoryId
                ? `Filtered Courses (${courses.length})`
                : `All Courses (${courses.length})`}
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              {categoryId
                ? "Showing courses belonging to the selected category."
                : "Manage and organize all courses available in the system."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">

          {categoryId && (
            <Link
              href="/admin/courses"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-100 px-4 py-2 rounded-lg font-medium transition"
            >
              <ArrowLeft size={18} />
              All Courses
            </Link>
          )}

          <Link
            href="/admin/courses/insert"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition"
          >
            <Plus size={18} />
            Add Course
          </Link>

        </div>
      </div>

      <div className="border-t border-slate-200 pt-6">
        {courses.length > 0 ? (
          <DataTable
            columns={columns}
            data={courses}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="p-4 rounded-full bg-slate-100 text-slate-400 mb-4">
              <BookOpen size={32} />
            </div>

            <h2 className="text-lg font-semibold text-slate-700">
              No courses found
            </h2>

            <p className="text-sm text-slate-500 mt-1 mb-5">
              There are no courses available for this category.
            </p>

            <Link
              href="/admin/courses/insert"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              <Plus size={18} />
              Create Course
            </Link>
          </div>
        )}
      </div>

    </div>
  </div>
</div>


);
};

export default page;
