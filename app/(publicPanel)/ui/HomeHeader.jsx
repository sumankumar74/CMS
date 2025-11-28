// components/HomeHeader.js
"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SearchInput from '@/components/search';
const HomeHeader = () => {

  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto  py-6 flex justify-between items-center">
        <div className="flex gap-x-20 items-center">
          <Link href="/" className=" text-4xl  px-4 py-2 rounded-xl shadow-md border font-bold text-rose-600 font-serif ">C.M.S.</Link>
          <SearchInput />
        </div>
       
        <nav className="space-x-4 flex gap-2 items-center">
          {!session && (<> <Link href="/login" className="text-gray-800 hover:text-blue-600">Login</Link>
            <Link href="/register" className="text-gray-800 hover:text-blue-600">Register for Admission</Link></>)}
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>{session.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} >Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
          }
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
