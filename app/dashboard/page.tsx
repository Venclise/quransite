import React from 'react'
import ActiveOrders from '../bookings/ActiveOrders'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function page() {
  return (
    <div className='lg:p-10 p-5'>
        <h1 className='font-semibold text-4xl'>Dashboard</h1>
        <div className='flex items-center justify-between w-full'>
        <ActiveOrders />
        <Link href="/" className='flex items-center text-sm text-blue-500 underline'>
        Bookings history <ChevronRight size="15"/>
        </Link>
        </div>

        <div className='flex items-center justify-center gap-2  mt-8 h-[30vh]'>
             <Link href="/dashboard/courses" className='flex-1 flex underline items-center justify-center bg-green-800 rounded-4xl h-full text-white p-2'>
             Courses <ChevronRight />
             </Link>
             <Link href="/dashboard/blogs" className='flex-1 flex items-center justify-center bg-amber-950 underline rounded-4xl h-full text-white p-2'>
            Blogs <ChevronRight />
             </Link>
        </div>
    </div>
  )
}
