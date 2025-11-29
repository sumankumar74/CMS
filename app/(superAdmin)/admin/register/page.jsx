"use client";

import AdminRegister from "../ui/AdminRegister";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        toast.success("Admin Registered Successfully");
        setTimeout(() => {
          router.push("/admin/login");
        }, 1500);
      } else {
        toast.error(data.msg || "Registration failed");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex justify-center items-center w-full mx-auto -mt-20">
        <AdminRegister handleSubmit={handleSubmit} loading={loading} />
      </div>
    </>
  );
}
