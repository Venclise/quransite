import CountUp from '@/components/CountUp'
import { Brain, Globe, Users } from 'lucide-react'
import React from 'react'

export default function Stats() {
  return (
    <div className='lg:p-10 p-5 w-full h-max flex items-center justify-around   flex-wrap gap-y-6'>
        <div className='flex flex-col'>

        <h3 className='flex items-center gap-0'>

      <CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-4xl lg:text-6xl  font-bold "
  delay={0}
/>
<span className='text-4xl lg:text-6xl font-semibold'>
+
</span>
  </h3>
  <p className='flex items-center gap-2 mt-2 text-xs lg:text-sm'>   
  <Users size={20}/>
  Students teached
  </p>
  </div>
      <div className='flex flex-col'>

        <h3 className='flex items-center gap-0'>

      <CountUp
  from={0}
  to={12}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-4xl lg:text-6xl font-bold "
  delay={0}
/>
<span className='text-4xl lg:text-6xl font-semibold'>
+
</span>
  </h3>
  <p className='flex items-center gap-2 mt-2 text-xs lg:text-sm'>   
  <Brain size={20}/>
  Years of Experience
  </p>
  </div>

      <div className='flex flex-col'>

        <h3 className='flex items-center gap-0'>

      <CountUp
  from={0}
  to={3}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-4xl lg:text-6xl font-bold "
  delay={0}
/>
<span className='text-4xl lg:text-6xl font-semibold'>
+
</span>
  </h3>
  <p className='flex items-center gap-2 mt-2 text-xs lg:text-sm'>   
  <Globe size={20}/>
Countries Served
  </p>
  </div>
    </div>
  )
}
