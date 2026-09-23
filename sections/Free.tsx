import BlurText from '@/components/BlurText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Free() {
  return (
    <div className='w-full h-screen md:h-[70vh] p-5 '>
        <div className='w-full h-full bg-cyan-500 border  rounded-4xl flex  flex-col gap-4 justify-center items-center p-5 lg:p-10'>

    <BlurText
        text="Book a free class now!"
        delay={200}
        animateBy="words"
        direction="top"
  className="lg:text-7xl text-5xl text-white font-semibold  justify-center mt-5"
      />
   <BlurText
        text="Start with a 3 day free trial and experience professional Quran learning online with qualified tutors.
"
        delay={10}
        animateBy="words"
        direction="top"
    className="lg:text-md text-sm text-white  font-medium justify-center mt-5"
      />
      <div className='flex w-full justify-center  items-center gap-4 md:flex-row flex-col'>

      <Button className="bg-white  w-full md:w-1/2 rounded-full hover:bg-gray-100 cursor-pointer  py-6 px-5 text-neutral-800">
                  <Link href="/courses" className="w-full flex items-center justify-center gap-2">
Book a free class now
                  </Link>
      </Button>
         
      </div>
        </div>
      
      
    </div>
  )
}
