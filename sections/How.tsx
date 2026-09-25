import BlurText from '@/components/BlurText'
import { Button } from '@/components/ui/button'
import { CalendarCheck, GraduationCap, UserCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function How() {
  return (
    
       <div className="h-max w-full lg:p-10 p-5 bg-gray-50">
      <p className="text-cyan-500 text-lg text-center font-semibold">How it works.</p>
      <BlurText 
        text="Learn Quran Online in 3 Easy Steps"
        delay={200}
        animateBy="words"
        direction="top"
        className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center mt-5"
      />
<div className='w-full flex items-center lg:flex-row flex-col justify-around gap-6 mt-12'>

      <div className='flex flex-col items-center gap-4 max-w-xs text-center'>
        <div className='bg-gray-100 w-[5rem] h-[5rem] rounded-full flex items-center justify-center'>
<CalendarCheck  size={30} className='text-cyan-500'/>
        </div>
        <h5 className='font-semibold text-2xl'>
            Book a free trial
        </h5>
        <p className='text-sm text-gray-800'>Fill out a short form and book your free trial class with just a few clicks.</p>
      </div>
          <div className='flex flex-col items-center gap-4 max-w-xs text-center'>
        <div className='bg-gray-100 w-[5rem] h-[5rem] rounded-full flex items-center justify-center'>
<UserCheck  size={30} className='text-cyan-500'/>
        </div>
        <h5 className='font-semibold text-2xl'>
Meet Your Tutor
        </h5>
        <p className='text-sm text-gray-800'>
            Join a free, interactive video evaluation and get matched with the right certified tutor.

        </p>
      </div>
             <div className='flex flex-col items-center gap-4 max-w-xs text-center'>
        <div className='bg-gray-100 w-[5rem] h-[5rem] rounded-full flex items-center justify-center'>
<GraduationCap  size={30} className='text-cyan-500'/>
        </div>
        <h5 className='font-semibold text-2xl'>
Get Registered & Start Learning
        </h5>
        <p className='text-sm text-gray-800'>
Choose a course, set your class time, and start learning Quran online.


        </p>
      </div>
</div>


                    <Link href="/course" className="w-full flex items-center gap-2 justify-center">
 <Button className="py-6 px-8  mx-auto my-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white  md:w-max w-full cursor-pointer">
            <GraduationCap size={20} /> 
            Explore courses
          </Button>
                    </Link>


    </div>
  )
}
