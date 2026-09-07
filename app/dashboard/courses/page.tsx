import Card from '@/components/Card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function  page() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/course`)
  const data =await res.json()
  return (
    <div className='h-screen lg:p-10 p-2 w-full gap-2  grid grid-cols-2 lg:grid-cols-3'>
      <div className='h-[25rem]'>
            <Link href="/dashboard/courses/add" className='flex-1 text-lg flex underline items-center justify-center bg-green-800 rounded-4xl h-full text-white p-2'>
             Add a course <ChevronRight />
             </Link>
      </div>
        {data?.map((data:any) => (
          <Card data={data}/>
        ))}
    </div>
  )
}
