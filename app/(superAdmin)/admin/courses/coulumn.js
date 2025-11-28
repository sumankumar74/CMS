"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { formatPrice } from "@/lib/format"
import { cn } from "@/lib/utils"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"

export const columns =[
    {
        accessorKey:"title",
        header:({column})=>{
            return <Button variant="ghost" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>
                Title
                <ArrowUpDown className="ml-2 w-4 h-4"/>
            </Button>
        },
    },
    
    {
        accessorKey:"fee",
        header:({column})=>{
            return <Button variant="ghost" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>
                Fee
                <ArrowUpDown className="ml-2 w-4 h-4"/>
            </Button>
        },
        cell:({row})=>{
            const price = parseFloat(row.getValue("fee")|| 0);
            
            return <div>{formatPrice(price)}</div>
        }
    },
    {
        accessorKey:"instructor",
        header:"Instructor"
    },
    {
        accessorKey:"duration",
        header:({column})=>{
            return <Button variant="ghost" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>
                Duration
                <ArrowUpDown className="ml-2 w-4 h-4"/>
            </Button>
        },
    },
    {
        accessorKey:"status",
        header:({column})=>{
            return(
                <Button variant="ghost" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>
                    Status
                    <ArrowUpDown className="w-4 h-4 ml-2"/>
                </Button>
            )
        },
        cell:({row})=>{
            const status = row.getValue("status")
            return(
                <Badge className={cn("bg-slate-500 text-white hover:bg-slate-600", status=="Published" && "bg-sky-600 hover:bg-sky-700")}>
                    {status}
                </Badge>
            )
        }
    },
    {
        id:"Actions",
        header:"Action",
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
                        <Link href={`/admin/courses/${_id}`} >
                            <DropdownMenuItem>
                                <Pencil className="w-4 h-4"/>
                                Edit Course
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]