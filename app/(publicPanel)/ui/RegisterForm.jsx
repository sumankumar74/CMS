
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  UserRound,
  MapPin,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

const RegisterForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [father, setFather] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !father || !address || !gender) {
      setError("Please fill in all the required fields.");
      return;
    }

    try {
      setPending(true);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          father,
          gender,
          address,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data?.message || "Registration failed. Please try again.");
        setPending(false);
        return;
      }

      router.push("/login");
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl">

        {/* Brand */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg mb-4">
            <span className="text-2xl font-bold text-white tracking-wide">
              C.M.S.
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Create Your Account
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Register for admission and start your learning journey
          </p>
        </div>

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">

          <form onSubmit={handleSubmit}>

            {/* Personal Information */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Father's Name */}
                <div>
                  <label
                    htmlFor="father"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Father's Name
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="father"
                      name="father"
                      type="text"
                      autoComplete="name"
                      required
                      value={father}
                      onChange={(e) => setFather(e.target.value)}
                      placeholder="Enter father's name"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Account Information */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Account Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-11 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Address
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3 top-3 text-slate-400"
                />

                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address"
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Gender
              </label>

              <div className="grid grid-cols-3 gap-3">

                <label
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition ${
                    gender === "male"
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-slate-200 hover:border-teal-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-teal-600"
                  />
                  <span className="text-sm font-medium">Male</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition ${
                    gender === "female"
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-slate-200 hover:border-teal-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-teal-600"
                  />
                  <span className="text-sm font-medium">Female</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition ${
                    gender === "other"
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-slate-200 hover:border-teal-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-teal-600"
                  />
                  <span className="text-sm font-medium">Other</span>
                </label>

              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={pending}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold shadow-md hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {pending ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Register For Admission"
              )}
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="font-semibold text-teal-600 hover:text-teal-700"
            >
              Sign in
            </button>
          </p>

        </div>

        <p className="text-center text-xs text-slate-400 mt-5">
          © 2026 Coaching Management System
        </p>

      </div>
    </div>
  );
};

export default RegisterForm;