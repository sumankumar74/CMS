import Course from "@/app/models/Course";
import User from "@/app/models/User";
import DashBoardCard from "./DashBoardCard";
import Admission from "@/app/models/Admission";

export const dynamic = "force-dynamic";

const AdminDashboard = async () => {
const totalStudents = await User.countDocuments();
const totalCourses = await Course.countDocuments();

const totalAdmissions = await Admission.countDocuments();
const totalPayments = 0;

const countData = [
{
name: "Total Students",
value: totalStudents,
color: "blue",
},
{
name: "Total Courses",
value: totalCourses,
color: "teal",
},
{
name: "Total Admissions",
value: totalAdmissions,
color: "purple",
},
{
name: "Total Payments",
value: totalPayments,
color: "green",
},
];

return ( <div className="flex-1 bg-slate-50 min-h-full px-6 md:px-10 py-8">

  {/* Dashboard Header */}
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-slate-800">
      Dashboard
    </h1>

    <p className="text-sm text-slate-500 mt-1">
      Overview of your coaching management system
    </p>
  </div>

  {/* Statistics */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {countData.map((card, i) => (
      <DashBoardCard
        key={i}
        text={card.name}
        count={card.value}
        color={card.color}
      />
    ))}
  </div>

  {/* Welcome Section */}
  <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
    <h2 className="text-xl font-semibold text-slate-800">
      Welcome to the Admin Panel
    </h2>

    <p className="text-sm text-slate-500 mt-2">
      Manage courses, categories, students, admissions and payments
      from the administration panel.
    </p>
  </div>

</div>

);
};

export default AdminDashboard;
