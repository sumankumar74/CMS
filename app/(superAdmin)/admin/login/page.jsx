"use client";

import AdminLogin from "../ui/AdminLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";

const Page = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 200 && data.success) {
        toast.success("Admin Logged In Successfully");
        router.push("/admin/dashboard");
      } else {
        toast.error(data.msg || "Invalid username or password");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
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
  );
};

export default Page;
