import SingleCourse from '@/components/course/SingleCourse'
import React from 'react'
import BlogPage from './BlogPage'
 import RecommendBlog from './RecommendBlog'
import Free from '@/sections/Free'
export const dynamic = "force-dynamic";
export default async function page(
    {
    params, 
}: {
  params: Promise<{ blogid: string }>}
) {
    const {blogid} = await params
     const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    const res = await fetch(`${baseUrl}/api/blogs/${blogid}`)
    if(!res.ok) {
      throw new Error("Failed to fetch the Product")
    }
    const data = await res.json()

    const recommendres = await fetch(`${baseUrl}/api/blogs/related?blogid=${blogid}`)
    const recommendData = await recommendres.json()
    
    console.log(recommendData)

  return (
    <div className='h-full w-full lg:p-10 p-5 '>
      <div className='flex gap-4 lg:flex-row flex-col'>

<div className='lg:w-[70%] w-full'>
      <BlogPage blog={data} />
</div>
<div className='lg:w-[30%] w-full'>
      <RecommendBlog data={recommendData}/> 
</div>
      </div>
   <Free />

    </div>
  )
}
