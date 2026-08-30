"use client";

import Link from "next/link";
import { z } from "zod";
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbList,
BreadcrumbPage,
BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { GraduationCap, ArrowLeft } from "lucide-react";

const formSchema = z.object({
title: z.string().min(1, {
message: "Course title is required",
}),
});

const Page = () => {
const router = useRouter();

const form = useForm({
resolver: zodResolver(formSchema),
defaultValues: {
title: "",
},
});

const { isSubmitting, isValid } = form.formState;

const onSubmit = async (values) => {
try {
const response = await axios.post("/api/courses/", values);


  toast.success("Course created successfully");

  router.push(`/admin/courses/${response.data._id}`);
} catch (error) {
  console.error(error);
  toast.error("Error creating course");
}

};

return ( <div className="min-h-full bg-slate-50 px-6 md:px-10 py-6"> 
  {/* Breadcrumb */}
  <div className="mb-6">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/dashboard">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/courses">
            Courses
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>
            Insert
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>

  {/* Page Header */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        Create New Course
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        Start by giving your course a clear and descriptive name.
      </p>
    </div>

    <Link
      href="/admin/courses"
      className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
    >
      <ArrowLeft size={16} />
      Back to Courses
    </Link>
  </div>

  {/* Form Section */}
  <div className="flex justify-center">
    <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8">

      {/* Form Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-teal-600" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Course Information
          </h2>

          <p className="text-sm text-slate-500">
            Enter the basic information for your new course.
          </p>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-slate-700">
                  Course Title
                </FormLabel>

                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. Full Stack Web Development"
                    {...field}
                    className="h-11 bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-100"
                  />
                </FormControl>

                <FormDescription className="text-xs text-slate-500">
                  Choose a title that clearly describes what students will
                  learn.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Link href="/admin/courses">
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                className="px-5"
              >
                Cancel
              </Button>
            </Link>

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6"
            >
              {isSubmitting ? "Creating..." : "Create Course"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  </div>
</div>

);
};

export default Page;