import { getServerSession } from "next-auth";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
    const session = await getServerSession();
    if (!session) throw new Error("Unauthorized");
    return { userId:session.id };
};

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        // .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
};