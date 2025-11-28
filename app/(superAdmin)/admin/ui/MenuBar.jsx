"use client"
import { cn } from "@/lib/utils";
import { Filter, GraduationCap, IndianRupeeIcon, LayoutDashboard, List, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


const SideBarItems = ({ name, url, icon:Icon  }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =(pathname ==="/" && url ==="/" || pathname === url || pathname?.startsWith(`$(url)/`))

  const onClick = ()=>{
    router.push(url)
  }
  return(
  <button onClick={onClick}
    className={cn("flex items-center w-full gap-x-2 text-slate-700 text-sm font-[500] pl-6 transition-all hover:slate:600 hover:bg-slate-300/20",
      isActive && 'text-sky-700 bg-sky-300/20 hover:bg-sky-200/20 hover:text-sky-800 border-r-2 border-sky-700')}>
        <div className="flex items-center gap-x-2 py-4">
          <Icon size={22} className={cn("text-slate-500 " , isActive && "text-sky-700")}/>
          {name}
        </div>
      </button>
  
)}

let SideBarRoutes = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    url: "/admin/dashboard"
  },
  {
    icon: GraduationCap,
    name: "Courses",
    url: "/admin/courses"
  },
  {
    icon:Filter,
    name:"Categories",
    url:"/admin/categories",
  },
  {
    icon: User,
    name: "Students",
    url: "/admin/students"
  },
  {
    icon:List,
    name:"Admissions",
    url: "/admin/admission"

  },{
    icon: IndianRupeeIcon,
    name: "Payments",
    url: "/admin/payments"
  }
]

const MenuBar = () => {
  return (
    <header>
      <nav className="flex space-y-2 flex-col w-full ">
        {SideBarRoutes.map((side,index) => <SideBarItems key={index} {...side} />)}
      </nav>
    </header>
  );
};

export default MenuBar;
