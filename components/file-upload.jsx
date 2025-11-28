"use client"
import {UploadDropzone} from "@/lib/uploadthing"
import toast from "react-hot-toast";

export const FileUpload = ({onChange, endpoint}) => {
    return (
        <UploadDropzone endpoint={endpoint} onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            onChange(res?.[0]?.url);
          }} onUploadError={(error) => {
            // Do something with the error.
            toast.error(`ERROR! ${error.message}`);
          }}>

        </UploadDropzone>
    )
}