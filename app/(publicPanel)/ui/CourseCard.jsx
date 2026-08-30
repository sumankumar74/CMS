import IconBadges from "@/components/IconBadges";
import { formatDuration, formatPrice } from "@/lib/format";
import { Clock, ListChecks, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
id,
title,
image,
fee,
seat,
category,
duration,
prerequisites,
userId,
}) => {
const courseImage =
image && image.trim() !== ""
? image
: "/course-placeholder.jpg";

return (
<Link href={`/course/${id}${userId ? `?userId=${userId}` : ""}`}> <div className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg">


    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-100">

      <Image
        fill
        src={courseImage}
        alt={title || "Course image"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
        {category || "Course"}
      </div>

    </div>

    <div className="flex flex-col pt-4">

      <h3 className="line-clamp-2 text-lg font-semibold capitalize text-slate-800 transition-colors duration-300 group-hover:text-sky-600">
        {title || "Untitled Course"}
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-3">

        <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-xs text-slate-600">
          <IconBadges size="sm" icon={User} />
          <span>{seat || 0} Seats</span>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-xs text-slate-600">
          <IconBadges size="sm" icon={Clock} />
          <span>{formatDuration(duration)}</span>
        </div>

      </div>

      <div className="mt-3 flex items-start gap-2 rounded-lg bg-slate-50 p-2 text-xs text-slate-600">
        <IconBadges size="sm" icon={ListChecks} />

        <span className="line-clamp-2">
          {prerequisites || "No prerequisites"}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

        <span className="text-xl font-bold text-sky-600">
          {formatPrice(fee)}
        </span>

        <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-sky-600">
          View Course →
        </span>

      </div>

    </div>
  </div>
</Link>

);
};

export default CourseCard;
