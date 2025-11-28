// components/AdminDashboard.js

import Course from "@/app/models/Course";
import User from "@/app/models/User";
import DashBoardCard from "./DashBoardCard";

export const dynamic = "force-dynamic";

const AdminDashboard = async () => {
  //sample data
  const totalStudents = await User.countDocuments();
  const totalCourses = await Course.countDocuments();
  const totalAdmissions = await User.countDocuments();
  const totalPayments = await Course.countDocuments();

  let CountData = [
    {
      name: "Total Students",
      value: totalStudents,
      color: "red",
    },
    {
      name: "Total Courses",
      value: totalCourses,
      color: "slate",
    },
    {
      name: "Total Admissions",
      value: totalAdmissions,
      color: "red",
    },
    {
      name: "Total Payment",
      value: totalPayments,
      color: "blue",
    },
  ];

  return (
    <div className="flex md:flex-row flex-1 gap-4 px-10 py-5 ">
      {CountData.map((card, i) => (
        <DashBoardCard
          key={i}
          text={card.name}
          count={card.value}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default AdminDashboard;
