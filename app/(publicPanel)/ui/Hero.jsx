// components/HomeHero.js
"use client"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Hero = () => {
    return (
      <Card className="m-2 " >
        <CardContent className="flex flex-col justify-center items-center p-5 gap-5" >
          <CardTitle className="text-5xl font-bold font-serif">Welcome to Our E-Coaching</CardTitle>
          <CardDescription className="text-xl text-slate-700">Transforming lives through personalized coaching and mentorship  </CardDescription>
          <CardFooter><Link href="/register" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">Get Started</Link></CardFooter>
        </CardContent>
      </Card>
    );
  };
  
  export default Hero;
  