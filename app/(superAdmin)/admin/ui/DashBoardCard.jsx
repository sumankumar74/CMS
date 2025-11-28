import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

const DashBoardCard = ({text,count,color}) => {
  return (
    <Card  className={`flex-1 mt-5 text-center bg-${color}-500 text-white`}>
        <CardContent className="space-y-3 p-5 rounded-lg">
        <CardTitle className="text-3xl font-medium ">{count}</CardTitle>
        <CardDescription className="text-xl">{text}</CardDescription>
        </CardContent>
    </Card>
  )
}

export default DashBoardCard