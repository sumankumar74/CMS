"use client"
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useDebounce } from '@/hooks/use-debounce'
import { usePathname, useRouter } from 'next/navigation'
import qs from "query-string"

const SearchInput = () => {
  const [value,setValue] =useState("")
  const debounceValue =useDebounce(value,500)

  const searchParams =new URLSearchParams();
  const router =useRouter();
  const pathname = usePathname(); 

  const currentCategoryId = searchParams.get("categoryId");
  
  useEffect(()=>{
    const url = qs.stringifyUrl({
      url:pathname,
      query:{
        title:debounceValue,
        categoryId:currentCategoryId
      }
    },{skipNull:true, skipEmptyString:true})
    router.push(url)
  },[debounceValue, currentCategoryId, router, pathname])

  return (
    <div className='relative flex items-center'>
        <Search className='h-4 w-4 absolute left-3 text-slate-500'/>
        <Input onChange={(e)=>setValue(e.target.value)}
        value={value}
        className="w-full md:w-[300px] pl-9 rounded-full text-black bg-slate-100 dark:bg-slate-800 focus-visible:ring-slate-200"
        placeholders="Search for Courses"/>
    </div>
  )
}

export default SearchInput