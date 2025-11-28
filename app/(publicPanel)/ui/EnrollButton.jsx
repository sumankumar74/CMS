"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EnrollButton({ courseId, userId, isEnrolled }) {
  const router = useRouter();

  const handleEnroll = async () => {
    if (!userId) {
      toast.error("User ID missing");
      return;
    }
    try {
      await axios.post("/api/enroll", { userId, courseId });
      toast.success("Enrolled successfully!");
      router.refresh()
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Enrollment failed");
    }
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={isEnrolled}
      className={`w-full py-2 px-4 rounded-md text-lg transition-all
        ${isEnrolled? "bg-gray-400 cursor-not-allowed": "bg-blue-600 hover:bg-blue-700 text-white"}`}>
      {isEnrolled ? "Already Enrolled" : "Enroll Now"}
    </button>
  );
}
