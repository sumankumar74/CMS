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
    <div className='flex gap-5'>
        <div className='w-3/4'>
            <Categories categories={categories}/>
        </div>
        <div className='w-1/4'>
            <AddCategory />
        </div>
    </div>
</div>
  )
}

export default page