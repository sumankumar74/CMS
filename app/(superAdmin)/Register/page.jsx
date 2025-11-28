import AdminRegister from "../admin/ui/AdminRegister";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import ConnectDb from "@/app/utils/ConnectDb";

const page = async() => {
  ConnectDb();

  const handleSubmit = async (formData) => {
    "use server";

    let username = formData.get("username");
    let password = formData.get("password");

    let data = { username, password }

    let res = await fetch("http://localhost:3000/api/admin/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const register = await res.json();
    if (register.success) {
     console.log("Admin Registered Successfully");
    }
    redirect("/Login");
  };
  return (
    <div className="min-h-screen flex justify-center items-center w-1/ mx-auto -mt-20 ">
      <AdminRegister handleSubmit={handleSubmit} />
    </div>
  );
};

export default page;
