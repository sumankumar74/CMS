import ConnectDb from "@/app/utils/ConnectDb";
import IconBadges from "@/components/IconBadges";
import { IndianRupee, LayoutDashboard } from "lucide-react";
import TitleForm from "./_components/TitleForm";
import DescriptionForm from "./_components/description-form";
import InstructorForm from "./_components/instructor-form";
import FeeForm from "./_components/fee-form";
import DurationForm from "./_components/duration-form";
import DifficultyForm from "./_components/difficulty-form";
import CategoryForm from "./_components/category-form";
import Category from "@/app/models/Category";
import EnrollLimitForm from "./_components/enroll-form";
import { Action } from "./_components/actions";
import ImageForm from "./_components/image-form";
import PrerequisitesForm from "./_components/prerequisites-form";
import Course from "@/app/models/Course";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

const page = async ({ params }) => {
await ConnectDb();

const { courseId } = await params;

if (courseId === "insert") {
return ( <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6"> <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center"> <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sky-100 flex items-center justify-center"> <LayoutDashboard className="w-7 h-7 text-sky-600" /> </div>

      <h1 className="text-2xl font-bold text-slate-800 mb-2">
        Creating New Course
      </h1>

      <p className="text-sm text-slate-500">
        Please wait while the course setup page is being prepared.
      </p>
    </div>
  </div>
);

}

if (!mongoose.Types.ObjectId.isValid(courseId)) {
return ( <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6"> <div className="w-full max-w-md bg-white border border-red-200 rounded-2xl shadow-sm p-8 text-center"> <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center"> <span className="text-2xl font-bold text-red-600">!</span> </div>

```
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Invalid Course ID
      </h2>

      <p className="text-sm text-slate-500 break-all">
        {courseId}
      </p>
    </div>
  </div>
);


}

const courseDoc = await Course.findById(courseId).lean();

if (!courseDoc) {
return ( <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6"> <div className="w-full max-w-md bg-white border border-red-200 rounded-2xl shadow-sm p-8 text-center"> <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center"> <span className="text-2xl font-bold text-red-600">!</span> </div>

      <h2 className="text-2xl font-bold text-red-600">
        Course Not Found
      </h2>

      <p className="text-sm text-slate-500 mt-2">
        The requested course could not be found.
      </p>
    </div>
  </div>
);


}

const course = JSON.parse(JSON.stringify(courseDoc));

const categoriesList = await Category.find().lean();
const categories = JSON.parse(JSON.stringify(categoriesList));

const requiredField = [
course.title,
course.description,
course.fee,
course.instructor,
course.duration,
course.category,
course.difficulty,
course.prerequisites,
course.image,
];

const totalFields = requiredField.length;
const completedFields = requiredField.filter(Boolean).length;

const completionPercentage = Math.round(
(completedFields / totalFields) * 100
);

const completedText = `${completedFields}/${totalFields} completed`;
const isCompleted = requiredField.every(Boolean);

const options = [
{
label: "Beginner",
value: "Beginner",
},
{
label: "Intermediate",
value: "Intermediate",
},
{
label: "Advanced",
value: "Advanced",
},
];

return ( <div className="min-h-screen bg-slate-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">

    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div className="flex items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-sky-600" />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              Course Setup
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Complete all required information before publishing.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-72">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">
              Course Progress
            </span>

            <span className="text-sm font-semibold text-sky-600">
              {completedText}
            </span>
          </div>

          <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-600 rounded-full transition-all duration-500"
              style={{
                width: `${completionPercentage}%`,
              }}
            />
          </div>

          <p className="text-xs text-slate-400 mt-2 text-right">
            {completionPercentage}% complete
          </p>
        </div>

        <div className="flex justify-start lg:justify-end">
          <Action
            disabled={!isCompleted}
            courseId={courseId}
            isPublish={course.status}
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        <div className="p-5 md:p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
              <IconBadges icon={LayoutDashboard} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Customize Your Course
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Add the information students will see.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-6">

          <TitleForm
            initialData={course}
            courseId={courseId}
          />

          <DescriptionForm
            initialData={course}
            courseId={courseId}
          />

          <InstructorForm
            initialData={course}
            courseId={courseId}
          />

          <CategoryForm
            initialData={course}
            courseId={courseId}
            options={categories.map((cat) => ({
              label: cat.name,
              value: cat._id.toString(),
            }))}
          />

          <ImageForm
            initialData={course}
            courseId={courseId}
          />

        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        <div className="p-5 md:p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <IconBadges icon={IndianRupee} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Sell Your Course
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Set pricing and enrollment requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-6">

          <FeeForm
            initialData={course}
            courseId={courseId}
          />

          <DurationForm
            initialData={course}
            courseId={courseId}
          />

          <DifficultyForm
            initialData={course}
            courseId={courseId}
            options={options}
          />

          <EnrollLimitForm
            initialData={course}
            courseId={courseId}
          />

          <PrerequisitesForm
            initialData={course}
            courseId={courseId}
          />

        </div>
      </div>
    </div>

    <div className="mt-6 bg-sky-50 border border-sky-100 rounded-xl p-4 md:p-5">
      <div className="flex gap-3">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
          <span className="font-bold text-sky-600">i</span>
        </div>

        <div>
          <p className="text-sm font-semibold text-sky-800">
            Course publishing tip
          </p>

          <p className="text-sm text-sky-700 mt-1">
            Complete all required fields before publishing your course.
            The progress bar above shows the current completion status.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

);
};

export default page;
