"use server"

import { redirect } from "next/navigation";
import User from "./models/User";
import ConnectDb from "./utils/ConnectDb"
import Category from "./models/Category";
import { writeFile } from "fs/promises";
import { join } from "path";
import Course from "@/app/models/Course";


export async function handleApprove(formData) {
    //Database Connection
    await ConnectDb();

    let id = formData.get("_id")
    //update data
    let record = await User.findByIdAndUpdate(id, { status: true });
    redirect("/admin/students")
}
export const handleDelete = async (formData) => {

    await ConnectDb();
    let id = formData.get("_id");
    id = JSON.parse(id);

    let category = await Category.findByIdAndDelete(id);
    redirect("/admin/categories");
}

export const handleCategorySubmit = async (formData) => {
    "use server";
    await ConnectDb();

    let name = formData.get("name");
    let description = formData.get("description");

    let category = new Category({ name, description }).save();

    redirect("/admin/categories");
}



export const handleSubmit = async (formData) => {
    "use server"
    await ConnectDb();

    let title = formData.get("title");
    let description = formData.get("description");
    let fee = formData.get("fee");
    let duration = formData.get("duration");
    let category = formData.get("category");
    let startDate = formData.get("startDate");
    let endDate = formData.get("endDate");
    let difficulty = formData.get("difficulty");
    let status = formData.get("status");
    let prerequisites = formData.get("prerequisites");


    let image = formData.get("image");

    let bytes = await image.arrayBuffer();
    let buffer = Buffer.from(bytes);
    let path = join("./public", "course_images", image.name);
    await writeFile(path, buffer);

    let course = await new Course({ title, description, fee, duration, category, image: image.name, startDate, endDate, difficulty, status, prerequisites }).save();

    let courseId = course._id;

    let categoryUpdate = await Category.findByIdAndUpdate(category, { $push: { courses: courseId } });
    redirect("/admin/courses");
};


export const getCourse = async ({ title, categoryId }) => {
    try {
        await ConnectDb();
        let course;
        let query = {
            status: "Published",
            title: { $regex: new RegExp(title, "i") }
        }
        if (categoryId) {
            query.category = categoryId;
        }
        course = await Course.find(query)
        return course;
    }
    catch (error) {
        console.log("GET COURSE", error)
        return [];
    }
}