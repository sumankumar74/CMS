
"use client";

import { cn } from "@/lib/utils";
import {
  FcMultipleDevices,
  FcMusic,
  FcSportsMode,
  FcSalesPerformance,
  FcEngineering,
  FcSelfServiceKiosk,
} from "react-icons/fc";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const CategoryItem = ({ label, icon: Icon, value }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelect = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelect ? null : value,
        },
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );

    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "group flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3",
        "bg-white text-sm font-medium text-slate-600",
        "shadow-sm transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 hover:shadow-md",
        isSelect &&
          "border-rose-500 bg-rose-50 text-rose-600 shadow-md ring-1 ring-rose-200"
      )}
    >
      {Icon && (
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 transition-all",
            isSelect && "bg-white",
            "group-hover:bg-white"
          )}
        >
          <Icon size={22} />
        </span>
      )}

      <span className="whitespace-nowrap">{label}</span>

      {isSelect && (
        <span className="ml-1 h-2 w-2 rounded-full bg-rose-500" />
      )}
    </button>
  );
};

const IconMap = {
  "Web Development": FcMultipleDevices,
  "Computer Science": FcSelfServiceKiosk,
  Accounting: FcSalesPerformance,
  Sports: FcSportsMode,
  Engineering: FcEngineering,
  Fitness: FcSportsMode,
  Music: FcMusic,
};

const CategoriesBadges = ({ items }) => {
  const fixedItems = items.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <section className="w-full border-b bg-slate-50/70 py-6">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Heading */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-800">
            Explore Categories
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Find the right course for your learning journey
          </p>
        </div>

        {/* Categories */}
        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
          {fixedItems.map((item) => (
            <CategoryItem
              key={item._id}
              label={item.name}
              icon={IconMap[item.name]}
              value={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesBadges;
