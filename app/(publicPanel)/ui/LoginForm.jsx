
"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    async function handleSigninWithGoogle() {
        await signIn("google", { callbackUrl: "/" });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!password || !email) {
            setError("Please enter your email and password.");
            return;
        }

        try {
            setPending(true);

            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid email or password.");
                setPending(false);
                return;
            }

            router.push("/");
        } catch (error) {
            setPending(false);
            setError(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 flex items-center justify-center px-4 py-12">

            <div className="w-full max-w-md">

                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center px-5 py-2 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg mb-4">
                        <span className="text-2xl font-bold text-white tracking-wide">
                            C.M.S.
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-800">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-slate-500 mt-2">
                        Sign in to continue to your Coaching Management System
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-7">

                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="mb-5">
                            <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={19}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    id="email-address"
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
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-slate-700 mb-2"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={19}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-11 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember / Forgot */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                                />
                                Remember me
                            </label>

                            <button
                                type="button"
                                className="text-sm font-medium text-teal-600 hover:text-teal-700"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Sign In */}
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold shadow-md hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {pending ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-xs text-slate-400 uppercase">
                            or
                        </span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    {/* Google */}
                    <button
                        type="button"
                        onClick={handleSigninWithGoogle}
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium transition shadow-sm"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12 12-12c3.059,0 5.842,1.154 7.961,3.039l5.657-5.657C34.046,6.053 29.268,4 24,4C12.955,4 4,12.955 4,24s8.955,20 20,20s20-8.955 20-20C44,22.659 43.862,21.35 43.611,20.083z"
                            />
                            <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108 18.961,12 24,12c3.059,0 5.842,1.154 7.961,3.039l5.657-5.657C34.046,6.053 29.268,4 24,4C16.318,4 9.656,8.337 6.306,14.691z"
                            />
                            <path
                                fill="#4caf50"
                                d="M24,44c5.166,0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211,35.091 26.715,36 24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556 16.227,44 24,44z"
                            />
                            <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205 44,34 44,24C44,22.659 43.862,21.35 43.611,20.083z"
                            />
                        </svg>

                        Continue with Google
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm text-slate-500 mt-6">
                        Don't have an account?{" "}
                        <a
                            href="/register"
                            className="font-semibold text-teal-600 hover:text-teal-700"
                        >
                            Register now
                        </a>
                    </p>
                </div>

                <p className="text-center text-xs text-slate-400 mt-6">
                    © 2026 Coaching Management System
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
