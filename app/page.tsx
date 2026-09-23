import About from '@/sections/About'
import Blogs from '@/sections/Blogs'
import Course from '@/sections/Course'
import FAQ from '@/sections/FAQ'
import Free from '@/sections/Free'
import Hero from '@/sections/Hero'
import How from '@/sections/How'
import Stats from '@/sections/Stats'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <Stats />
      <Course />
      <How />
      <Blogs />
      <Free />
      <FAQ onCourse={false}/>
    </div>
  )
}
