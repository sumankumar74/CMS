import Category from '@/app/models/Category';
import AddCategory from '../ui/AddCategory'
import Categories from '../ui/Categories'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import ConnectDb from '@/app/utils/ConnectDb';


export const dynamic = "force-dynamic";
const page = async () => {
    await ConnectDb();

    let categories = await Category.find();
  return (
    <div className='px-10 py-5'>
      <div className="flex mb-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Categories</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
    <h1 className='mb-6 text-2xl font-medium text-slate-700'>Category Management({categories.length})</h1>
    <div className='flex flex-col gap-5 w-full'>
     <div className='w-2/4 mb-10 bg-slate-200 rounded-lg p-4 items-center flex flex-col gap-4'>
     <h2 className="text-2xl font-bold text-teal-700 mb-2">Add New Category</h2>
            <AddCategory />
        </div>
        <div className='w-3/4'>
            <Categories categories={categories}/>
        </div>
       
    </div>
</div>
  )
}

export default page