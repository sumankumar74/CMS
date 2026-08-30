import { handleDelete } from "@/app/actions";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";

const Categories = ({ categories }) => {
return ( <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

```
        {/* Header */}
        <div className="px-6 py-4 border-b bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-800">
                Categories
            </h2>
            <p className="text-sm text-slate-500 mt-1">
                Manage and view all available course categories
            </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b bg-slate-50">
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Name
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Description
                        </th>

                        <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                    {categories.map((category) => (
                        <tr
                            key={category._id}
                            className="hover:bg-slate-50 transition-colors"
                        >
                            {/* Category Name */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link
                                    href={`/admin/courses?category=${category._id}`}
                                    className="group inline-flex items-center gap-2 font-medium text-sky-600 hover:text-sky-800 transition"
                                >
                                    {category.name}

                                    <ArrowRight
                                        size={15}
                                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                                    />
                                </Link>
                            </td>

                            {/* Description */}
                            <td className="px-6 py-4 text-sm text-slate-600 max-w-md">
                                {category.description || "No description available"}
                            </td>

                            {/* Delete */}
                            <td className="px-6 py-4 text-center">
                                <form action={handleDelete}>
                                    <input
                                        type="hidden"
                                        value={JSON.stringify(category._id)}
                                        name="_id"
                                    />

                                    <button
                                        type="submit"
                                        title="Delete category"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
                                    >
                                        <Trash2 size={17} />
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
            <div className="py-12 text-center">
                <p className="text-slate-500 text-sm">
                    No categories found.
                </p>
            </div>
        )}
    </div>
);

};

export default Categories;
