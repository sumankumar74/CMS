"use client"
import Link from "next/link";
import { z } from "zod";
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "title is required",
  }),
});

const Page = () => {
 const router = useRouter('admin/courses/$course.courseId');
  const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: { title: "" }
  })

  const{ isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post("/api/courses/", values);
      toast.success("Successfully submitted");
      router.push(`/admin/courses/${response.data._id}`);
    } catch (error) {
      toast.error("error creating course ");
    }
  };

  return (
    <div className="px-10 py-5">
      <div className="flex">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Insert</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-between w-full items-center">
        <h1 className="my-3 text-3xl font-semibold text-slate-500">
          Insert Course
        </h1>
        <Link
          href="/admin/courses"
          className="text-white bg-green-600 px-3 py-2 rounded">
          Go Back
        </Link>
      </div>

      <div className="flex gap-2 justify-center flex-col items-center">
        <h1 className="text-3xl text-bold ">Name Your Course</h1>
        <p className="text-sm italic text-slate-600">
          What Would You like to name your course? don t worry you can change
          this later
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8 w-1/2  bg-zinc-200 px-8 py-4 rounded-xl">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. Web Development"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormDescription>
                    What You will teach in this course
                  </FormDescription>
                </FormItem>
              )}
            />
            <Link href="/admin/courses">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-black text-white hover:bg-slate-700 hover-text-black">
              Create Course
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
