import Course from "@/app/models/Course";
import ConnectDb from "@/app/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH = async(req, {params})=>{
    try{
        await ConnectDb();
        let values = await req.json();
        let {courseId} = params;
        let course = await Course.findByIdAndUpdate(courseId,{...values});

        return NextResponse.json(course)
    }
    catch(err){
        console.log("[Course Update Error]" + err);
        return new NextResponse("Internal Error", {status:500});
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await ConnectDb();
        let { courseId } = params;
        let course = await Course.findByIdAndDelete(courseId);
        return NextResponse.json(course);
    }
    catch (error) {
        console.log("course delete Error", error)

        return new NextResponse("Internal Server Error", { status: 500 });
    }

}