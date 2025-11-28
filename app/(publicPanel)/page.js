import Hero from "./ui/Hero";
import CourseSection from "./ui/CourseSection";
import CategoriesBadges from "./ui/CategoriesBadges";
import Category from "../models/Category";
import ConnectDb from "../utils/ConnectDb";
import Course from "../models/Course";

export const dynamic = "force-dynamic";

function toPlain(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default async function Home({ searchParams }) {
 await ConnectDb();
  const params = await searchParams;
  const page = params.page || 1;

  const courses = toPlain(await Course.find());
  const categories = toPlain(await Category.find());

  return (
    <>
      <Hero />
      <CategoriesBadges items={categories} />
      <CourseSection courses={courses} />
    </>
  );
}
