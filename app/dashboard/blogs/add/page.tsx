import React from 'react'
import AddBlog from "@/components/dashboard/blogs/AddBlog"
export default function Add() {
  return (
    <div className='h-max w-full lg:p-10 p-5'>
      <h1 className='font-semibold lg:text-5xl text-2xl'>
          Add Blogs
      </h1>
      <div className='w-full h-full'>
        <AddBlog />
      </div>
    </div>
  )
}
