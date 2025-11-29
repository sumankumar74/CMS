"use client";

import AdminLogin from "../ui/AdminLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const dynamic = "force-dynamic";

const Page = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
      const res = await fetch(`${baseUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Admin Logged In Successfully");
        router.push("/admin/dashboard");
      } else {
        toast.error(data.msg || "Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="Sign-Up flex justify-center w-full items-center flex-col h-screen">
        <div className="border p-5 shadow-md w-1/2 rounded-lg">
          <AdminLogin
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
