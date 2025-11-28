import Course from "@/app/models/Course";
import ConnectDb from "@/app/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
    await ConnectDb();

    let { courseId } = params;

    try {
        let course = await Course.findByIdAndUpdate(courseId, { status: "Draft" });
        return NextResponse.json(course);
    }
    catch (error) {
        console.log("Course Publish Error ", error)
        return new NextResponse("Something Went Wrong", {status:500});
    }
}