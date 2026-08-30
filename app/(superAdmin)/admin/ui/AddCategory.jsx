import { handleCategorySubmit } from "@/app/actions";
import { Button } from "@/components/ui/button";

const AddCategory = () => {
return ( <form
   action={handleCategorySubmit}
   method="POST"
   className="w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-5"
 > <div> <h2 className="text-2xl font-bold text-slate-800">
Add New Category </h2>

    <p className="text-sm text-slate-500 mt-1">
      Create a category for organizing your courses.
    </p>
  </div>

  <div className="space-y-2">
    <label
      htmlFor="name"
      className="block text-sm font-semibold text-slate-700"
    >
      Category Name
    </label>

    <input
      id="name"
      type="text"
      name="name"
      placeholder="e.g. Web Development"
      required
      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
    />
  </div>

  <div className="space-y-2">
    <label
      htmlFor="description"
      className="block text-sm font-semibold text-slate-700"
    >
      Description
    </label>

    <textarea
      id="description"
      name="description"
      rows="5"
      placeholder="Enter category description..."
      required
      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none resize-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
    />
  </div>

  <Button
    type="submit"
    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg"
  >
    Add Category
  </Button>
</form>

);
};

export default AddCategory;
