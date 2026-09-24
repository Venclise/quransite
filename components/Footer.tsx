"use client"
import { COURSE_LINKS, nav } from '@/lib/constants'
import { ExternalLink, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
    let date = new Date()
    const pathname = usePathname()
  return (
    <div className='flex flex-col w-full '>

    <div className={`${pathname === "/dashboard " || "/dashboard/blog" || "/dashboard/blog/add" || "/dashboard/products" || "/dashboard/products/add"  ?  "flex" : "flex" } w-full bg-gray-50 h-max lg:p-20 p-10  justify-between'` }  >
      <div className='flex flex-col gap-5'>
         <Link href="/" className='font-semibold text-xl md:text-2xl'>
           SII
           </Link>
           <p className='text-xs text-gray-700 max-w-sm'>
            Learn Quran online from home with certified male and female tutors.

           </p>
    <p className='text-xs  font-light'>©{date.getFullYear()} Sarosh Islamic Institute All Rights reserved </p>

      </div>
      <div className='flex items-center flex-wrap justify-center gap-4'>
            <div className='flex flex-col gap-3'>
        <h6 className='text-sm font-semibold'>Courses</h6>
        {
            COURSE_LINKS.map(({id,title,link}) => (
                <Link key={id} href={link} className='capitalize text-xs text-gray-800 hover:underline hover:text-black'>
                    {title}
                </Link>
            ))
        }
      </div>

      <div className='flex flex-col gap-2'>
        <h6 className='text-sm font-semibold'>Quick links</h6>
        {
            nav.map(({id,title,link}) => (
                <Link key={id} href={link} className='capitalize text-xs text-gray-800 hover:underline hover:text-black'>
                    {title}
                </Link>
            ))
        }
      </div>
      <div className='flex flex-col gap-2'>
               <h6 className='text-sm font-semibold'>Contact</h6>
              <a href="tel:+923199239435" className='flex  gap-1 items-center text-xs text-gray-800 hover:underline hover:text-black' >
                    <Phone size="10"/> +92 319 9239435

              </a>
              <a href="mailto:saroshislamicinstitute@gmail.com" className='flex gap-1 items-center text-xs text-gray-800 hover:underline hover:text-black' >
                <Mail size="10"/>
saroshislamicinstitute@gmail.com
              </a>
                <div className='flex items-center gap-2'>

              <Link target="_blank" href="https://www.instagram.com/sarooshislamicinstitute?stkn=eGE3NTN0cXRpZHJw">
              <Image src="/insta.svg" alt="Instagram" height="15" width="15"  />
              </Link>
                 <Link target='_blank' href="https://www.facebook.com/share/1CDT2FCKS7/">
              <Image src="/fb.svg" alt="Instagram" height="15" width="15"  />
              </Link>

                    <Link
  href="https://wa.me/923199239435?text="
  target="_blank"
  rel="noopener noreferrer"
>
<Image src="whatsapp-black.svg" alt="Whatsapp" height="15" width="15"  />
</Link>
                </div>
      </div>

        </div>
    </div>
    <p className='text-md text-center font-semibold p-2'>Website made by <Link className='text-blue-500 underline' href="https://weblify-nu.vercel.app/" target="_blank">Weblify </Link></p>
    <div >
    </div>
    </div>
  )
}
