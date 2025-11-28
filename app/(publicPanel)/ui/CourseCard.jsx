import IconBadges from "@/components/IconBadges";
import { formatDuration, formatPrice } from "@/lib/format";
import { Clock, ListChecks, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const CourseCard = ({ id, title, image, fee, seat, category, duration, prerequisites,userId }) => {
    return (
       <Link href={`/course/${id}?userId=${User?._id}`}>
            <div className="group hover:shadow-sm transition border overflow-hidden rounded-lg p-3 h-full">
                <div className="relative w-full aspect-video md:overflow-hidden" >
                <Image fill className="object-cover"  alt={title} src={image}/>
            </div>
                <div className="flex flex-col pt-2">
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-600 transition dark:group-hover:text-sky-500 line-clamp-2 capitalize">
                        {title}
                    </div>
                    <p className="text-xs text-muted-foreground">{category}</p>
                    <div className="flex items-center text-sm gap-x-5 mt-3 md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <IconBadges size="sm" icon={User} />
                            <span>
                                {seat} Seats Only
                            </span>
                        </div>
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <IconBadges size="sm" icon={Clock} />
                            <span>
                                {formatDuration(duration)}
                            </span>
                        </div>

                    </div>
                    <div className="flex items-center justify-between text-sm gap-x-2 my-2 md:text-xs">
                       
                    <div className="flex items-center gap-x-1 text-slate-500">
                            <IconBadges size="sm" icon={ListChecks} />
                            <span>
                                {prerequisites}
                            </span>
                        </div>

                    </div>
                    {/* display fees */}
                    <p className="text-md md:text-sm font-medium text-slate-700">
                        {formatPrice(fee)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;