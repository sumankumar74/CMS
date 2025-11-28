"use client"
import { Button } from "@/components/ui/button"
import { FormControl, FormDescription, FormField, FormItem, FormMessage,Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formatDuration } from "@/lib/format"
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
    duration: z.string('duration').min(1, {
        message: "duration is required"
    })
})

const DurationForm = ({ initialData, courseId }) => {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => setIsEditing((current) => !current)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            duration: initialData.duration 
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
                Course Duration
                <Button onClick={toggleEditing} variant="ghost">
                    {isEditing ? (
                        <div>Cancel</div>
                    ):(
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Duration
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                    <p className={cn("text-sm mt-2 dark:text-gray-300", !initialData?.duration && "italic text-gray-600")}>
                        {formatDuration(initialData?.duration) || "Duration is not specified"}
                    </p>
                )
            }
            {isEditing&& (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
                        <FormField
                        control={form.control}
                        name="duration"
                        render={({field})=>(
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isSubmitting} className="bg-white" placeholder="e.g. 4 weeks "{...field}/>
                                </FormControl>
                                <FormDescription>Put only duration no of weeks</FormDescription>
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

export default DurationForm