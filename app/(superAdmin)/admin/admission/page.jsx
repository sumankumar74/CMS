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

  // Fetch and populate
  const admissions = await Admission.find({})
    .populate("user", "name email")
    .populate("course", "title fee instructor duration")
    .lean();
  // console.log("ADMISSIONS:", admissions);
  const data = admissions.map((a) => ({
    _id: a._id.toString(),
    status: a.status,
    createdAt: a.createdAt?.toString(),
    updatedAt: a.updatedAt?.toString(),

    user: a.user
      ? {
          _id: a.user._id.toString(),
          name: a.user.name,
          email: a.user.email,
        }
      : { _id: "", name: "Unknown", email: "" },

    course: a.course
      ? {
          _id: a.course._id.toString(),
          title: a.course.title,
          fee: a.course.fee,
          instructor: a.course.instructor,
          duration: a.course.duration,
        }
      : {
          _id: "",
          title: "",
          fee: 0,
          instructor: "",
          duration: "",
        },
  }));

  return (
    <div className="px-10 w-full py-5 flex flex-col">
      <div className="flex mb-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Admissions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h2 className="text-2xl text-slate-800 font-medium mb-5">
        Manage Admissions ({data.length})
      </h2>

      {/* USE CORRECT DATA */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
