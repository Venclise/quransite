import About from '@/sections/About'
import Blogs from '@/sections/Blogs'
import Course from '@/sections/Course'
import FAQ from '@/sections/FAQ'
import Free from '@/sections/Free'
import Hero from '@/sections/Hero'
import How from '@/sections/How'
import Reviews from '@/sections/Reviews'
import Services from '@/sections/Services'
import Stats from '@/sections/Stats'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Course />
      <How />
      <Blogs />
      <Free />
      <Reviews />
      <FAQ onCourse={false}/>
    </div>
  )
}
