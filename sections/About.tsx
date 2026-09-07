import BlurText from '@/components/BlurText'
import { Button } from '@/components/ui/button'
import { GraduationCap } from 'lucide-react'
import Image from 'next/image'


export default function () {
  return (
    <div className='lg:p-10 p-5 w-full gap-5 h-screen flex items-center justify-between lg:flex-row flex-col'>
        <div className='h-full lg:w-[40%] w-full relative transition-all hover:scale-105 cursor-pointer'>
             <Image
              src="/quran.jpg"
              fill 
              className="object-cover rounded-2xl z-[-1]  hidden"
              alt="Quran"
               />
               
        </div>
 <div className="flex flex-col items-center gap-4 lg:items-start w-full max-w-5xl lg:w-[50%] ">
             <BlurText
          text="Our Mission, Your Journey One Sacred Commitment"
          delay={200}
          animateBy="words"
          direction="top"
          className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center lg:justify-start"
        />

              <BlurText
          text="At Sarosh Islamic Institute, we bridge the gap between busy modern lifestyles and authentic Quranic education. Since 2012, we have provided flexible, personalized online Quran classes for children and adults worldwide, including the UK, USA, Canada, and Australia.
Through structured one to one sessions, we guide you step by step toward your goals, whether you are learning the Quran Foundation, improving Tajweed, memorizing the Quran, or deepening your Islamic understanding."
          delay={10}
          animateBy="words"
          direction="top"
          className="text-xs lg:text-sm   justify-center lg:justify-start"
      />

          <Button className="py-6 px-8 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 w-full lg:w-1/2 cursor-pointer">
            <GraduationCap size={20} />
            Explore courses
          </Button>

          </div>
    </div>
  )
}
