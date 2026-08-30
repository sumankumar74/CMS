"use client";

import Link from "next/link";
import AdminLogoutButton from "./AdminLogoutButton";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        
        {/* Logo / Brand */}
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 shadow-md transition duration-300 group-hover:scale-105">
            <span className="font-bold text-white text-lg">A</span>
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-800 leading-tight">
              Admin Panel
            </h1>
            <p className="hidden text-xs text-slate-400 sm:block">
              Coaching Management System
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
          >
            Home
          </Link>

          <AdminLogoutButton />
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
