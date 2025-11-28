"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";

export const columns = [
  {
    header: "Course",
    accessorKey: "course.title", // populated course title
  },
  {
    header: "Student",
    accessorKey: "user.name", // populated user name
  },
  {
    header: "Fee",
    accessorKey: "course.fee",
  },
  {
    header: "Instructor",
    accessorKey: "course.instructor",
  },
  {
    header: "Duration",
    accessorKey: "course.duration",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => {
      const { _id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-4 p-0">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/admin/admission/${_id}`}>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4" />
                Edit
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
