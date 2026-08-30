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
import { formatDuration, formatPrice } from "@/lib/format";

export const columns = [
{
header: "Course",
accessorKey: "course.title",
cell: ({ row }) => {
const course = row.original.course;
  return (
    <div className="font-medium text-slate-800">
      {course?.title || "Course unavailable"}
    </div>
  );
},
},

{
header: "Student",
accessorKey: "user.name",
cell: ({ row }) => {
const user = row.original.user;

  return (
    <div className="font-medium text-slate-700">
      {user?.name || "Unknown student"}
    </div>
  );
},
},

{
header: "Fee",
accessorKey: "course.fee",
cell: ({ row }) => {
const fee = row.original.course?.fee;

  return (
    <span className="font-medium text-slate-700">
      {fee !== undefined && fee !== null
        ? formatPrice(fee)
        : "N/A"}
    </span>
  );
},
},

{
header: "Instructor",
accessorKey: "course.instructor",
cell: ({ row }) => {
return ( <span className="text-slate-600">
{row.original.course?.instructor || "N/A"} </span>
);
},
},

{
header: "Duration",
accessorKey: "course.duration",
cell: ({ row }) => {
const duration = row.original.course?.duration;
  return (
    <span className="text-slate-600">
      {duration ? formatDuration(duration) : "N/A"}
    </span>
  );
},
},

{
header: "Status",
accessorKey: "status",
cell: ({ row }) => {
const status = row.original.status || "enrolled";

  const statusClasses = {
    enrolled:
 "bg-green-100 text-green-700 border-green-200",
    pending:
      "bg-yellow-100 text-yellow-700 border-yellow-200",
    cancelled:
      "bg-red-100 text-red-700 border-red-200",
    completed:
      "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${
        statusClasses[status] ||
        "bg-slate-100 text-slate-700 border-slate-200"
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
},

},

{
header: "Action",
accessorKey: "action",

cell: ({ row }) => {
  const { _id } = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 hover:bg-slate-100"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href={`/admin/admission/${_id}`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Pencil className="h-4 w-4" />
            Edit Admission
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
},


},
];
