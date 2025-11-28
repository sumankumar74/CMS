"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";

export const columns=[
    {
        header:"Name",
        accessorKey:"name"
    },
    {
        header:"Email",
        accessorKey:"email"
    },
    {
        header:"Father Name",
        accessorKey:"father",
    },
    {
        header:"Gender",
        accessorKey:"gender",
    },
    {
        header:"Address",
        accessorKey:"address"
    },
    {
        header:"Status",
        accessorKey:"status"
    },
    {
        header:"Action",
        accessorKey:"action",
         cell:({row})=>{
            const {_id}= row.original;
            return(
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0">
                            <MoreHorizontal/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link href={`/admin/students/${_id}`} > 
                            <DropdownMenuItem>
                                <Pencil className="w-4 h-4"/>
                                Edit 
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]