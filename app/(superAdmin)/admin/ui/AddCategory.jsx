import { handleCategorySubmit } from "@/app/actions";
import { Button } from "@/components/ui/button";

const AddCategory = () => {
    
    return (
      
         <form className="max-w-md mx-auto bg-slate-300 py-3 px-8 rounded-md" action={handleCategorySubmit} method="POST">
        <label className="block mb-2">Name:</label>
        <input className="w-full border rounded-md px-3 py-2 mb-3" type="text" name="name"/>
        <label className="block mb-2">Description:</label>
        <textarea className="w-full border rounded-md px-3 py-2 mb-3" name="description" />
        <Button type="submit" className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Add Category</Button>
    </form>
    
    );
};

export default AddCategory;