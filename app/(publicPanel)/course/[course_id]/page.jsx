import Course from "@/app/models/Course";
import Category from "@/app/models/Category";
import User from "@/app/models/User";
import ConnectDb from "@/app/utils/ConnectDb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ViewCoursePage from "../../ui/ViewCoursePage";
import CategoriesBadges from "../../ui/CategoriesBadges";

const Page = async ({ params }) => {
  await ConnectDb();

  const courseId = (await params).course_id;

  const session = await getServerSession(authOptions);
  
  const user = session?.user
    ? await User.findById(session.user.id).lean()
    : null;

  const course = await Course.findById(courseId).populate("category").lean();
  const categories = await Category.find({}).lean();

  return (
    <div className="md:px-[5%]">
      <CategoriesBadges items={JSON.parse(JSON.stringify(categories))} />
      <ViewCoursePage
        course={JSON.parse(JSON.stringify(course))}
        user={JSON.parse(JSON.stringify(user))}
      />
    </div>
  );
};

export default Page;
