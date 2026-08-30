"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
User,
Mail,
MapPin,
Users,
UserRound,
BookOpen,
ArrowLeft,
} from "lucide-react";

const ProfilePage = () => {
const { data: session, status } = useSession();

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const loadProfile = async () => {
if (status === "loading") {
return;
}

  if (!session?.user?.email) {
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(
      "/api/user/profile?email=" +
        encodeURIComponent(session.user.email)
    );

    const data = await response.json();

    if (response.ok) {
      setUser(data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

loadProfile();

}, [session, status]);

if (status === "loading" || loading) {
return (
<div className="min-h-screen flex items-center justify-center bg-slate-50">
<p className="text-slate-600">
Loading profile...
</p>
</div>
);
}

if (!session) {
return (
<div className="min-h-screen flex items-center justify-center bg-slate-50">
<div className="text-center">
<h1 className="text-2xl font-bold">
Please login first
</h1>

      <Link
        href="/login"
        className="inline-block mt-4 bg-sky-600 text-white px-6 py-2 rounded-lg"
      >
        Login
      </Link>
    </div>
  </div>
);

}

return (
<div className="min-h-screen bg-slate-50 px-4 py-10">

  <div className="max-w-4xl mx-auto">

    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-600 mb-6"
    >
      <ArrowLeft size={16} />
      Back to Home
    </Link>

    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

      <div className="bg-gradient-to-r from-sky-600 to-cyan-500 px-6 py-10 text-white">

        <div className="flex items-center gap-5">

          <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
            {(user?.name || session.user.name || "U")
              .substring(0, 2)
              .toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user?.name || session.user.name || "Student"}
            </h1>

            <p className="text-sky-100 mt-1">
              Student Profile
            </p>
          </div>

        </div>
      </div>

      <div className="p-6">

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Mail className="text-sky-600" size={20} />

              <div>
                <p className="text-xs text-slate-400">
                  Email
                </p>

                <p className="font-medium text-slate-700">
                  {user?.email || session.user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <User className="text-sky-600" size={20} />

              <div>
                <p className="text-xs text-slate-400">
                  Full Name
                </p>

                <p className="font-medium text-slate-700">
                  {user?.name || "Not available"}
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <UserRound className="text-emerald-600" size={20} />

              <div>
                <p className="text-xs text-slate-400">
                  Father Name
                </p>

                <p className="font-medium text-slate-700">
                  {user?.father || "Not available"}
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Users className="text-violet-600" size={20} />

              <div>
                <p className="text-xs text-slate-400">
                  Gender
                </p>

                <p className="font-medium text-slate-700 capitalize">
                  {user?.gender || "Not available"}
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-4 md:col-span-2">
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" size={20} />

              <div>
                <p className="text-xs text-slate-400">
                  Address
                </p>

                <p className="font-medium text-slate-700">
                  {user?.address || "Not available"}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6">
          <Link
            href="/my-courses"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-lg font-medium"
          >
            <BookOpen size={18} />
            View My Courses
          </Link>
        </div>

      </div>
    </div>
  </div>
</div>

);
};

export default ProfilePage;