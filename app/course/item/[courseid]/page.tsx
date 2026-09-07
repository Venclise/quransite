import SingleCourse from '@/components/course/SingleCourse'
import React from 'react'

export default async function page(
    {
    params, 
}: {
  params: Promise<{ courseid: string }>}
) {
    const {courseid} = await params
     const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    const res = await fetch(`${baseUrl}/api/course/${courseid}`)
    if(!res.ok) {
      throw new Error("Failed to fetch the Product")
    }
    const data = await res.json()

  return (
    <div>
      <SingleCourse product={data} />
    </div>
  )
}
