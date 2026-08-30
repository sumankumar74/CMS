
"use client";

import { cn } from "@/lib/utils";
import {
  Filter,
  GraduationCap,
  IndianRupee,
  LayoutDashboard,
  List,
  User,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SideBarItems = ({ name, url, icon: Icon }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    pathname === url || pathname?.startsWith(`${url}/`);

  const onClick = () => {
    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full items-center border-r-2 border-transparent px-5 py-1 text-left text-sm font-medium text-slate-600 transition-all duration-200",
        "hover:bg-slate-100 hover:text-indigo-600",
        isActive &&
          "border-indigo-600 bg-indigo-50 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700"
      )}
    >
      <div className="flex w-full items-center gap-3 rounded-lg px-2 py-3">
        <Icon
          size={20}
          strokeWidth={2}
          className={cn(
            "text-slate-400 transition-colors",
            "group-hover:text-indigo-600",
            isActive && "text-indigo-600"
          )}
        />

        <span>{name}</span>
      </div>
    </button>
  );
};

const SideBarRoutes = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    url: "/admin/dashboard",
  },
  {
    icon: GraduationCap,
    name: "Courses",
    url: "/admin/courses",
  },
  {
    icon: Filter,
    name: "Categories",
    url: "/admin/categories",
  },
  {
    icon: User,
    name: "Students",
    url: "/admin/students",
  },
  {
    icon: List,
    name: "Admissions",
    url: "/admin/admission",
  },
  {
    icon: IndianRupee,
    name: "Payments",
    url: "/admin/payments",
  },
];

const MenuBar = () => {
  return (
    <aside className="flex h-full w-full flex-col border-r border-slate-200 bg-white">
      {/* Sidebar Header */}
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Administration
        </p>

        <h2 className="mt-1 text-lg font-bold text-slate-800">
          Management
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 py-4">
        {SideBarRoutes.map((side) => (
          <SideBarItems key={side.url} {...side} />
        ))}
      </nav>
    </aside>
  );
};

export default MenuBar;
