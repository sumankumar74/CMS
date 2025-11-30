"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const AdminLogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
};

export default AdminLogoutButton;
