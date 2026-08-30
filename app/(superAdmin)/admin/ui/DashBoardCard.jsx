import {
Card,
CardContent,
CardDescription,
CardTitle,
} from "@/components/ui/card";

const DashBoardCard = ({ text, count, color }) => {
const colorClasses = {
blue: "bg-blue-500",
teal: "bg-teal-500",
purple: "bg-purple-500",
green: "bg-green-500",
red: "bg-red-500",
slate: "bg-slate-500",
};

return (
<Card
className={`flex-1 border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        colorClasses[color] || "bg-slate-500"
      } text-white`}
> <CardContent className="p-6 text-center"> <CardTitle className="text-4xl font-bold mb-2">
{count} </CardTitle>
    <CardDescription className="text-base font-medium text-white/90">
      {text}
    </CardDescription>
  </CardContent>
</Card>

);
};

export default DashBoardCard;
