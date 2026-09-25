import BlurText from '@/components/BlurText'
import AnimatedText from '@/lib/Herotitle'
import { Badge, BookOpen, CheckCircle, Clock, Users } from 'lucide-react'
import React from 'react'

export default function Services() {
  return (
    <div className='w-full h-max lg:p-20 md:p-10 p-5'>
         <div className="my-4">
     <p className="text-cyan-500 font-semibold text-center">Services.</p>
      <BlurText
           text="Learn the Quran with modern, flexible, and authentic guidance"
           delay={200}
           animateBy="words"
           direction="top"
           className="lg:text-4xl text-3xl font-semibold lg:font-medium justify-center mt-5"
         />
    </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          <AnimatedText animate='topToBottom'>

           <div className=' w-full h-[150px] bg-neutral-100  p-5 rounded-2xl   flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-cyan-500'>01</span>
   <div className='w-[3rem] h-[3rem]'>
         <Users  className='text-cyan-500'/>
   </div>
     
         <div className='flex flex-col'>
         <p className='text-xl font-semibold text-neutral-900'>
            Personalised Classes
         </p>
         <p className='text-xs'>One-on-one Quran lessons tailored to each student's pace and learning style for better understanding.</p>
         </div>
    </div>
          </AnimatedText>
               <AnimatedText animate='topToBottom' delay={.5} duration={.5}>

           <div className=' w-full h-[150px] bg-neutral-100  p-5 rounded-2xl   flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-cyan-500'>02</span>
   <div className='w-[3rem] h-[3rem]'>
         <Badge  className='text-cyan-500'/>
   </div>
     
         <div className='flex flex-col'>
         <p className='text-xl font-semibold text-neutral-900'>
           Qualified Teachers

         </p>
         <p className='text-xs'>
           Certified Quran tutors with years of teaching experience ensuring quality education and spiritual growth.
            </p>
         </div>
    </div>
          </AnimatedText>
               <AnimatedText animate='topToBottom' delay={.6} duration={.6}>

           <div className=' w-full h-[150px] bg-neutral-100  p-5 rounded-2xl flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-cyan-500'>03</span>
   <div className='w-[3rem] h-[3rem]'>
         <Clock  className='text-cyan-500'/>
   </div>
     
         <div className='flex flex-col'>
         <p className='text-xl font-semibold text-neutral-900'>
        Flexible Timing 24/7

         </p>
         <p className='text-xs'>
Attend your Quran classes anytime, day or night, with our round-the-clock flexible scheduling options.
            </p>
         </div>
    </div>
          </AnimatedText>
               <AnimatedText animate='topToBottom' delay={.7} duration={.7}>

           <div className=' w-full h-[150px] bg-neutral-100  p-5 rounded-2xl  flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-cyan-500'>04</span>
   <div className='w-[3rem] h-[3rem]'>
         <Users  className='text-cyan-500'/>
   </div>
     
         <div className='flex flex-col'>
         <p className='text-xl font-semibold text-neutral-900'>
         Choice of Tutor

         </p>
         <p className='text-xs'>
            Choose a tutor of your preference—male or female—for a comfortable and respectful learning experience.
            </p>
         </div>
    </div>
          </AnimatedText>
               <AnimatedText animate='topToBottom' delay={.8} duration={.8}>

           <div className=' w-full h-[150px] bg-neutral-100  p-5 rounded-2xl flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-cyan-500'>05</span>
   <div className='w-[3rem] h-[3rem]'>
         <BookOpen  className='text-cyan-500'/>
   </div>
     
         <div className='flex flex-col'>
         <p className='text-xl font-semibold text-neutral-900'>
           Teachers Training
         </p>
         <p className='text-xs'>
          We offer professional development programs for tutors to enhance their teaching skills and methodology
            </p>
         </div>
    </div>
          </AnimatedText>
               <AnimatedText animate='topToBottom' delay={.9} duration={.9}>

           <div className=' w-full h-[150px] bg-neutral-100  p-5 rounded-2xl  flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-cyan-500'>06</span>
   <div className='w-[3rem] h-[3rem]'>
         <CheckCircle  className='text-cyan-500'/>
   </div>
     
         <div className='flex flex-col'>
         <p className='text-xl font-semibold text-neutral-900'>
         3 Days Free Trial
         </p>
         <p className='text-xs'>
 Experience our teaching style and platform with a no-obligation 3-day free trial before enrolling.
            </p>
         </div>
    </div>
          </AnimatedText>
    </div>
    </div>
  )
}
