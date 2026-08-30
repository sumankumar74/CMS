import ConnectDb from "@/app/utils/ConnectDb";
import Admission from "@/app/models/Admission";
import { DataTable } from "../ui/data-table";
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbList,
BreadcrumbPage,
BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { columns } from "./column";

export const dynamic = "force-dynamic";

const page = async () => {
await ConnectDb();

const admissions = await Admission.find({})
.populate("user", "name email")
.populate("course", "title fee instructor duration")
.sort({ createdAt: -1 })
.lean();

const data = admissions.map((admission) => ({
_id: admission._id.toString(),
status: admission.status || "enrolled",

createdAt: admission.createdAt
  ? admission.createdAt.toISOString()
  : null,

updatedAt: admission.updatedAt
  ? admission.updatedAt.toISOString()
  : null,

user: admission.user
  ? {
      _id: admission.user._id.toString(),
      name: admission.user.name || "Unknown",
      email: admission.user.email || "",
    }
  : {
      _id: "",
      name: "Unknown",
      email: "",
    },

course: admission.course
  ? {
      _id: admission.course._id.toString(),
      title: admission.course.title || "Course unavailable",
      fee: admission.course.fee ?? 0,
      instructor: admission.course.instructor || "N/A",
      duration: admission.course.duration || "N/A",
    }
  : {
      _id: "",
      title: "Course unavailable",
      fee: 0,
      instructor: "N/A",
      duration: "N/A",
    },
}));

return ( <div className="w-full px-4 sm:px-6 lg:px-10 py-6"> <div className="mb-6"> <Breadcrumb> <BreadcrumbList> <BreadcrumbItem> <BreadcrumbLink href="/admin/dashboard">
Home </BreadcrumbLink> </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>
            Admissions
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
        Manage Admissions
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        View and manage student course admissions.
      </p>
    </div>

    <div className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-semibold">
      Total Admissions: {data.length}
    </div>
  </div>

  <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
    <DataTable
      columns={columns}
      data={data}
    />
  </div>
</div>
);
};

export default page;
