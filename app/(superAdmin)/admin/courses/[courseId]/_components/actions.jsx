"use client"

import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";
import toast from "react-hot-toast";

export const Action = ({disabled , courseId, isPublish}) =>{
    
    const router = useRouter();
    const [isLoading,  setIsLoading]= useState();
    

    const onClick = async()=>{
        try{
            setIsLoading(true);
            if(isPublish){
                await axios.patch(`/api/courses/${courseId}/publish`)
                toast.success("Course Unpublished")
            }
            else{
                await axios.patch(`/api/courses/${courseId}/unPublish`)
                toast.success("Course Published")
            }
            router.refresh();
        }
        catch(error){
            toast.error("Something Went Wrong")
        }
        finally{
            setIsLoading(false)
        }
        
    }
    const onDelete = async()=>{
        try{
            setIsLoading(true);
            await axios.delete(`/api/courses/${courseId}`)
            toast.success("Course Deleted")
            router.push(`/admin/courses`)
            router.refresh();
        }
        catch(error){
            toast.error("Something went Wrong")
        }
        finally{
            setIsLoading(false);
        }

    }

    return(
        <div className="flex items-center  gap-x-2">
            <Button onClick={onClick} disabled={isLoading || disabled} variant="outline" size="sm">
                {isPublish === "Published" ? "UnPublish" : "Publish"}
            </Button>
            <ConfirmModal onConfirm={onDelete}>
                <Button size="sm" disabled={isLoading}>
                    <Trash className="w-4 h-4"/>
                </Button>
                  </ConfirmModal>
        </div>
    )
}