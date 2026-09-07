import SingleCourse from '@/components/course/SingleCourse'
import React from 'react'
import BlogPage from './BlogPage'

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

  return (
    <div>
      <BlogPage blog={data} />
    </div>
  )
}
