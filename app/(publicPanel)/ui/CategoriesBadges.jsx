"use client"
import { cn } from "@/lib/utils"
import { FcMultipleDevices, FcMusic, FcSportsMode, FcSalesPerformance, FcEngineering, FcSelfServiceKiosk } from "react-icons/fc"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"

const CategoryItem = ({ label, icon: Icon, value }) => {

    const pathname =usePathname()
    const router= useRouter();
    const searchParams = useSearchParams();

    const currentCategoryId= searchParams.get("categoryId") 
    const currentTitle = searchParams.get("title");

    const isSelect = currentCategoryId === value;

    const onClick=()=>{
        const url = qs.stringifyUrl({
            url:pathname,
            query:{
                title:currentTitle, 
                categoryId: isSelect ? null : value 
            }
        },{skipNull:true, skipEmptyString:true})
        router.push(url)
    }

    return (
        <button onClick={onClick} className={cn("py-2 px-3 text-sm  border border-slate-200 rounded-full flex gap-x-1 hover:border-sky-600 transition",
            isSelect && "border-sky-600 text-sky-600 bg-sky-200/20 dark:text-sky-100")} type="button">
            {
                Icon && <Icon size={20} />
            }
            <div className="truncate">{label}</div>

        </button>
    )
}

const IconMap = {
    "Web Development": FcMultipleDevices,
    "Computer Science": FcSelfServiceKiosk,
    "Accounting": FcSalesPerformance,
    "Sports": FcSportsMode,
    "Engineering": FcEngineering,
    "Fitness": FcSportsMode,
    "Music": FcMusic,
}

// const CategoriesBadges = ({ items }) => {
//     return (
//         <div className='flex items-center gap-x-2 overflow-auto pb-2 my-5 px-5 '>
//             {items.map(item => (
//                 <CategoryItem key={item._id} label={item.name} icon={IconMap[item.name]} value={item._id} />
//             ))}
//         </div>
//     )
// }

const CategoriesBadges = ({ items }) => {
    const fixedItems = items.map(item => ({
        ...item,
        _id: item._id.toString(),   // ⭐ FIX HERE
    }));

    return (
        <div className='flex items-center gap-x-2 overflow-auto pb-2 my-5 px-5 '>
            {fixedItems.map(item => (
                <CategoryItem 
                    key={item._id} 
                    label={item.name} 
                    icon={IconMap[item.name]} 
                    value={item._id} 
                />
            ))}
        </div>
    )
}

export default CategoriesBadges