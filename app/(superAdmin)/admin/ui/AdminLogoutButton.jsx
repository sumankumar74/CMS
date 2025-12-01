"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const AdminLogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    router.push("/admin/login"); // redirect admin only
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
};

export default AdminLogoutButton;
