"use client"
import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormMessage,Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

const formSchema = z.object({
    description: z.string('title').min(1, {
        message: "description is required"
    })
})

const DescriptionForm = ({ initialData, courseId }) => {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => setIsEditing((current) => !current)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: initialData.description || ""
        }
    })
    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values) => {
        try {
            const response = await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("course updated successfully")
            router.refresh();
            toggleEditing();
        }
        catch (error) {
            toast.error("error updating course")
        }
    }
    return (
        <div className="mt-6 bg-slate-100 rounded-md dark:bg-gary-800 p-4">
            <div className="flex items-center justify-between font-medium">
                Course Description
                <Button onClick={toggleEditing} variant="ghost">
                    {isEditing ? (
                        <div>Cancel</div>
                    ):(
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Description
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                    <p className={cn("text-sm mt-2 dark:text-gray-300", !initialData?.description && "italic text-gray-600")}>
                        {initialData?.description || "No Description Available "}
                    </p>
                )
            }
            {isEditing&& (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
                        <FormField
                        control={form.control}
                        name="description"
                        render={({field})=>(
                            <FormItem>
                                <FormControl>
                                    <Textarea disabled={isSubmitting} className="bg-white" placeholder="Write about your course"{...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                         />
                         <div className="flex items-center gap-x-2">
                            <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button>
                         </div>
                    </form>
                </Form>
            )}

        </div>
    )
}

export default DescriptionForm