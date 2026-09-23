import { formatDate } from '@/lib/utils'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecommendBlog({ data }: { data: any[] }) {
    console.log(data)
  return (
    <div className='bg-gray-100 p-5 rounded-xl'>
        <h1 className='font-semibold text-2xl px-2 py-5'>
        Recent Articles
        </h1>
      {data.map((item: any, index: number) => (
        <Link href={`/blog/item/${item._id}`} key={index} className='flex items-center gap-4 '>
            <div>
            <Image src={item.image[0]} alt={item.title} width={100} height={100} className='object-cover rounded-xl'/>
            </div>
            <div className='flex flex-col gap-2'>
            <h2 className='font-semibold'>  
          {item.title}
            </h2>
            <h3 className='text-xs font-normal flex items-center gap-1'><Calendar size={15} />{formatDate(item.createdAt)}</h3>
            </div>
        </Link>
      ))}
    </div>
  )
}