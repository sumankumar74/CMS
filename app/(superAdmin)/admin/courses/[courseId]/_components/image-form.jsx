"use client"
import { FileUpload } from "@/components/file-upload"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { ImageIcon, Pencil, PlusCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const ImageForm = ({ initialData, courseId }) => {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => setIsEditing((current) => !current)

    const onSubmit = async (values) => {
        try {
            const response = await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("course updated successfully")
            router.refresh();
            toggleEditing();
        }
        catch (error) {
            toast.error("something went wrong" + error.message)
        }
    }
    return (
        <div className="mt-6 bg-slate-100 rounded-md dark:bg-gary-800 p-4">
            <div className="flex items-center justify-between font-medium">
                Course Image
                <Button onClick={toggleEditing} variant="ghost">
                    {isEditing && (
                        <div>Cancel</div>
                    )}
                    {!isEditing && !initialData.image && (
                        <>
                            <PlusCircle className="w-4 h-4 mr-3" />
                            Add an Image
                        </>
                    )}
                    {!isEditing && initialData.image && (
                        <>
                            <Pencil className="w-4 h-4 mr-3" />
                            Edit Image
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                (!initialData.image) ? (
                    <div className="flex mt-2 h-48 items-center justify-center bg-slate-200 rounded-md ">
                        <ImageIcon className="w-10 h-10 text-slate-500" />
                    </div>
                ) : (
                    <div className="relative aspect-video mt-2">
                        <Image alt="uplaod" fill className="object-cover overflow-hidden rounded-md" src={initialData.image} />
                    </div>
                )
            )
            }
            {isEditing && (
                <div>
                    <FileUpload endpoint="courseImage" onChange={(url) => {
                        if (url) {
                            onSubmit({ image: url })
                        }
                    }} />
                    <div className="flex items-center gap-x-2">
                        <p>16:9 aspect ratio recommend</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ImageForm
