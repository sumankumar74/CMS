import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const Footer = () => {
  return (
    <Card className="bg-gray-900 text-white">
      <CardContent className="flex flex-col  items-center justify-between">
        <CardHeader className="text-4xl font-semibold">Coaching Management System</CardHeader>
        <CardTitle className=" text-lg font-medium ">Empowering coaches and learners</CardTitle>
        <CardFooter className="mt-5 " >
          <Link href="/" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> Home </Link>
          <Link href="/about" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> About </Link>
          <Link href="/" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> Services </Link>
          <Link href="/" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> Contact </Link>
          <Link href="/admin/dashboard" className="flex  font-medium text-sm px-4 text-gray-700 hover:text-gray-400 transition duration-300 ease-in-out"> @admin </Link>
        </CardFooter>
      </CardContent>
    </Card>

  )
}

export default Footer