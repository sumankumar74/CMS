
"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchInput from "@/components/search";
import {
BookOpen,
CreditCard,
GraduationCap,
LogOut,
User,
} from "lucide-react";

const HomeHeader = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo + Search */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            {/* Logo Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-lg font-extrabold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              C
            </div>

            {/* Logo Text */}
            <div className="hidden sm:block">
              <div className="text-2xl font-extrabold tracking-tight text-slate-800">
                C<span className="text-rose-600">.</span>M<span className="text-rose-600">.</span>S<span className="text-rose-600">.</span>
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Coaching Management
              </div>
            </div>
          </Link>

          {/* Search */}
          <SearchInput />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-5">
          {!session && (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-rose-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-rose-700 hover:shadow-md"
              >
                Register for Admission
              </Link>
            </>
          )}

          {session && (
   <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="rounded-full outline-none ring-offset-2 transition-all hover:ring-2 hover:ring-rose-400 focus:ring-2 focus:ring-rose-400">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={session.user.image || ""}
          alt={session.user.name || "User"}
        />
    <AvatarFallback className="bg-gradient-to-br from-rose-500 to-pink-600 font-semibold text-white">
      {session.user.name
        ?.substring(0, 2)
        .toUpperCase() || "US"}
    </AvatarFallback>
  </Avatar>
</button>
  </DropdownMenuTrigger>

<DropdownMenuContent
align="end"
className="w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
<div className="flex items-center gap-3 border-b border-slate-100 px-3 py-3">

  <Avatar className="h-11 w-11">
    <AvatarImage
      src={session.user.image || ""}
      alt={session.user.name || "User"}
    />

    <AvatarFallback className="bg-rose-100 font-semibold text-rose-600">
      {session.user.name
        ?.substring(0, 2)
        .toUpperCase() || "US"}
    </AvatarFallback>
  </Avatar>

  <div className="min-w-0">
    <p className="truncate text-sm font-semibold text-slate-800">
      {session.user.name || "Student"}
    </p>

    <p className="truncate text-xs text-slate-500">
      {session.user.email || "No email available"}
    </p>
  </div>
</div>

<DropdownMenuLabel className="px-3 py-2 text-xs uppercase tracking-wide text-slate-400">
  My Account
</DropdownMenuLabel>

<DropdownMenuItem asChild className="cursor-pointer rounded-lg">
  <Link href="/profile" className="flex items-center gap-3">
    <User className="h-4 w-4 text-slate-500" />
    <div>
      <p className="font-medium">My Profile</p>
      <p className="text-xs text-slate-400">
        View your personal details
      </p>
    </div>
  </Link>
</DropdownMenuItem>

<DropdownMenuItem asChild className="cursor-pointer rounded-lg">
  <Link href="/my-courses" className="flex items-center gap-3">
    <BookOpen className="h-4 w-4 text-sky-500" />
    <div>
      <p className="font-medium">My Courses</p>
      <p className="text-xs text-slate-400">
        View your enrolled courses
      </p>
    </div>
  </Link>
</DropdownMenuItem>

<DropdownMenuItem asChild className="cursor-pointer rounded-lg">
  <Link href="/payments" className="flex items-center gap-3">
    <CreditCard className="h-4 w-4 text-violet-500" />
    <div>
      <p className="font-medium">Payments</p>
      <p className="text-xs text-slate-400">
        View payment history
      </p>
    </div>
  </Link>
</DropdownMenuItem>

<div className="my-2 border-t border-slate-100" />

<DropdownMenuItem
  onClick={handleLogout}
  className="cursor-pointer rounded-lg text-red-600 focus:bg-red-50 focus:text-red-600"
>
  <LogOut className="mr-3 h-4 w-4" />
  Logout
</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          )}
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
