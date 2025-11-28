import { Inter } from "next/font/google";
import "./globals.css";
import HomeHeader from "./ui/HomeHeader";
import NextAuthProvider from "../context/NextAuthProvider";
import Footer from "./ui/Footer";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coaching-Management-System",
  description: "Created by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <HomeHeader />
          <Toaster/>
          {children}
          <Footer/>
        </NextAuthProvider>
      </body>
    </html>
  );
}
