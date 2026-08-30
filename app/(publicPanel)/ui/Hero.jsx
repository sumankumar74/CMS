"use client";

import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <Card className="mx-4 mt-6 overflow-hidden border-0 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white shadow-xl">
      <CardContent className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:px-10">
        
        {/* Background decorations */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Small Badge */}
        <div className="relative mb-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm">
          <GraduationCap size={18} className="text-rose-400" />
          Learn. Grow. Succeed.
        </div>

        {/* Main Heading */}
        <CardTitle className="relative max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Welcome to Our{" "}
          <span className="bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">
            Coaching
          </span>{" "}
          Management System
        </CardTitle>

        {/* Description */}
        <CardDescription className="relative mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Transform your learning experience through personalized coaching,
          expert mentorship, and courses designed to help you achieve your goals.
        </CardDescription>

        {/* Features */}
        <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
          <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <BookOpen size={17} className="text-rose-400" />
            Quality Courses
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <Users size={17} className="text-rose-400" />
            Expert Mentors
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <GraduationCap size={17} className="text-rose-400" />
            Personalized Learning
          </div>
        </div>

        {/* CTA */}
        <CardFooter className="relative mt-8 p-0">
          <Link
            href="/register"
            className="group flex items-center gap-2 rounded-full bg-rose-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-rose-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:shadow-xl"
          >
            Get Started
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default Hero;