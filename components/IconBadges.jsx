import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const backgroundVariant = cva(
  "rounded-full flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-sky-100",
      success: "bg-teal-100"
    },
    size: {
      default: "p-2",
      sm: "p-1"
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}
)

const IconVariant = cva( "",{
  variants:{
    variant:{
      default: "text-sky-700",
      success: "text-teal-700"
    },
    size: {
      default:"h-8 w-8",
      sm:"w-4 h-4"
    },
  },
  defaultVariants:{
    variant:"default",
    size: "default"
  }
}
 
)
const IconBadges = ({ icon:Icon, variant, size }) => {
  return (
    <div className={cn(backgroundVariant({variant, size}))}>
      <Icon className={cn(IconVariant({variant, size}))} />
    </div>
  )
}

export default IconBadges