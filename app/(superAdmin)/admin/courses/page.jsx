import ConnectDb from '@/app/utils/ConnectDb'
import Link from "next/link";
import Course from '@/app/models/Course';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DataTable } from '../ui/data-table';
import { columns } from './coulumn';

export const dynamic = "force-dynamic";

const page = async () => {
    await ConnectDb();

    let courses = await Course.find()
    courses = JSON.parse(JSON.stringify(courses));

    return (
        <div className='px-10 py-5 '>
            <div className='flex mb-5'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Courses</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='flex justify-between w-full items-center'>
                <h1 className='my-3 text-2xl font-medium text-slate-700'>All Courses ({courses.length})</h1>
                <Link href="/admin/courses/insert" className="text-white bg-green-600 px-3 py-2 rounded">Add Course</Link>
            </div>

            <div className='mt-5 w-full'>
                <DataTable columns={columns} data={courses} />
            </div>
        </div>
    )
}

export default page