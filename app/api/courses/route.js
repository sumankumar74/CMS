import Course from "@/app/models/Course";
import ConnectDb from "@/app/utils/ConnectDb";
import { NextResponse } from "next/server";


export async function POST(req) {
    await ConnectDb();
    const { title } = await req.json();
    try {
        const course = await Course.create({ title });
        return NextResponse.json(course);
    }
    catch (err) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

