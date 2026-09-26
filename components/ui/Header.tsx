"use client"
import { nav } from '@/lib/constants'
import Link from 'next/link'
import {  usePathname } from 'next/navigation'
import { Button } from './button'
import {  ArrowRight, Menu, Phone, User } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'


export default function Header() {
    const pathname = usePathname()


  
  
  return (
    <div className={`${pathname === "/dashboard " || "/dashboard/blog" || "/dashboard/blog/add" || "/dashboard/products" || "/dashboard/products/add"  ?  "flex" : "flex" } py-10 bg-white  z-10    px-15 w-full h-[3rem]  items-center justify-between`}>
       <div>
           <Link href="/" className='font-semibold text-2xl flex justify-center items-center '>
           <Image src="/logo.png" width={50} height={50} alt="logo"/>
           <span className='text-sm lg:text-md text-cyan-600 mt-4'>
           Saroosh Islamic Institue
           </span>
           </Link>
       </div>

       <div className='lg:flex items-center justify-center gap-5 hidden'>
        {
            nav.map(({id,title,link}) => (
                <Link href={link} key={id} className={`text-sm  hover:underline py-2 px-2 rounded-full hover:text-black capitalize  tranition-all  ${link === pathname  ? "text-cyan-500 " : "text-gray-700"}`}>
                    {title}
                </Link>
            ))
        }
        <Button className="px-6 py-5 rounded-full bg-cyan-500 hover:bg-cyan-600">
              <Link href="/contact" className="w-full flex items-center gap-2">

            Contact 
          </Link>
               
        </Button>

       </div>
<div className='flex lg:hidden'>

       <Sheet >
  <SheetTrigger  >
    <Button size="lg" className="bg-gray-200 hover:bg-gray-300 " >
        <Menu className='text-black'/>
    </Button>
  </SheetTrigger>
  <SheetContent  className="z-100">
    <SheetHeader>
      <SheetTitle>
          <Link href="/" className='font-semibold text-2xl flex justify-center items-center '>
           <Image src="/logo.png" width={50} height={50} alt="logo"/>
           <span className='text-sm lg:text-md text-cyan-600 mt-4'>
           Saroosh Islamic Institue
           </span>
           </Link>
      </SheetTitle>
      <SheetDescription className="flex flex-col gap-2 h-screen my-20 ">
        {
            nav.map(({id,title,link}) => (
                <SheetClose>
                <Link href={link} key={id} className={`group text-lg flex items-center justify-between hover:bg-gray-200 py-2 px-2 rounded-sm hover:text-black capitalize  tranition-all  ${link === pathname  ? "text-neutral-800 bg-gray-200" : "text-gray-700"}`}>
                    {title}
                </Link>
                </SheetClose>
            ))
        }
          <Button className="bg-cyan-500  w-full md:w-1/2 rounded-full hover:bg-cyan-400 cursor-pointer  py-6 px-5 text-white ">
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2">
                  <Phone />
Contact 
                  </Link>
      </Button>

       

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
    </div>
  )
}
