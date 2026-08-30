import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Footer = () => {
  return (
    <Card className="mt-16 rounded-none border-0 bg-slate-950 text-white">
      <CardContent className="px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Brand */}
          <CardHeader className="p-0">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              Coaching Management System
            </CardTitle>
          </CardHeader>

          {/* Tagline */}
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Empowering coaches and learners to achieve more.
          </p>

          {/* Divider */}
          <div className="my-7 h-px w-full max-w-2xl bg-slate-800" />

          {/* Navigation */}
          <CardFooter className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 p-0">
            <Link
              href="/"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              About
            </Link>

            <Link
              href="/services"
              className="font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </Link>

            
          </CardFooter>

          {/* Copyright */}
          <p className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} Coaching Management System. All rights
            reserved.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
