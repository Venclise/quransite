"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRef, useState } from 'react'

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { toast } from 'sonner'
import { input } from 'motion/react-client'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import { Spinner } from '@/components/ui/spinner'


export default function AddBlog() {

  const [previews,setPreviews] = useState<string[]>([])
  const [loading,setLoading] = useState(false)
  const [images,setImages] = useState<File[]>([])


  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex,setActiveIndex] = useState(0)

  const [blog,setBlog] = useState<{
  title: string,
  description: string,
  }>({
    title: "",
    description: "",
  })

  
  
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));

    setActiveIndex((prev) => {
      if (prev > index) prev - 1;
      if (prev === index) return Math.max(0, prev - 1);
      return prev;
    });

    setTimeout(() => {
      swiperRef.current?.slideTo(Math.max(0, index - 1));
    }, 0);
  };

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const handleSubmit = async(e:React.FormEvent) => {
  e.preventDefault()
  if(!blog.title || !blog.description ) {
    return toast.error("Please fill in the feilds")
  }
setLoading(true)

  const formdata = new FormData()
formdata.append("title",blog.title)
  formdata.append("description",blog.description)
 
  images.forEach((img) => {
    formdata.append("images",img)
  })
  
  try {
    const res = await fetch(`${baseUrl}/api/blogs`,{
      method: "POST",
      body:formdata,
    })

  if(!res.ok) {
      toast.error("Something went wrong");
        setLoading(false);
        return;
  }


      setBlog({ title: "", description: ""});
      setImages([])
      setPreviews([])
      const fileInput = document.getElementById("img") as HTMLInputElement
      if(fileInput) fileInput.value = ""
      toast.success("Blog has been uploaded successfully")

  }catch(e) {
       toast.error("Failed to upload the blog")

  }finally {
    setLoading(false)
  }


} 
  return (
    <div className='w-full   h-full mt-12 flex gap-4  lg:flex-row flex-col-reverse '>
      
      <form className='flex-1  flex gap-4 flex-col ' onSubmit={handleSubmit}> 
   <label htmlFor="title" className='flex flex-col gap-2'>
    <span className='ml-2 text-sm font-semibold'>
    Title
    </span>
    <Input id="title" placeholder='Enter title' onChange={(e) => setBlog({...blog,title:e.target.value}) }/>
   </label>
     <label htmlFor="description" className='flex flex-col gap-2'>
    <span className='ml-2 text-sm font-semibold'>
    Description
    </span>
    <Textarea id="description" placeholder='Enter description' onChange={(e) => setBlog({...blog,description:e.target.value})}/>
   </label>
   <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
      </form>
      <div className="w-full h-full   lg:w-[50%] flex flex-col gap-4">
          <input
            type="file"
            className="hidden"
            id="img"
            multiple
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setImages((prev) => [...prev, ...files]);
              setPreviews((prev) => [
                ...prev,
                ...files.map((file) => URL.createObjectURL(file)),
              ]);
            }}
          />

         
          <div
            className={`w-full h-full relative p-5 bg-gray-50 rounded-2xl ${
              previews.length ? "block" : "hidden"
            }`}
          >
            <Swiper
              className="w-full h-full"
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            >
              {previews.map((src, i) => (
                <SwiperSlide
                  className="w-full h-full flex items-center justify-center"
                  key={i}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Image ${i}`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

       
          <div className="flex  flex-wrap items-center gap-4">
            {previews.map((src, i) => (
              <div
                className="h-[5rem] w-[5rem] relative cursor-pointer"
                onClick={() => swiperRef.current?.slideTo(i)}
                key={i}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer transition-all hover:bg-red-200 absolute -top-2 -right-2 text-red-500 hover:text-red-500 bg-white shadow-sm rounded-full z-10 w-6 h-6 p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(i);
                  }}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
                <Image
                  src={src}
                  alt={`Thumbnail ${i}`}
                  height={80}
                  width={80}
                  className={`${
                    activeIndex === i ? "border-2 border-blue-500 opacity-100" : "border opacity-70"
                  } h-full w-full object-cover rounded-md`}
                />
              </div>
            ))}

            <label
              htmlFor="img"
              className={`${
                previews.length ? "w-[5rem]" : "w-full"
              } bg-gray-50 border-2 border-dashed border-neutral-300 h-full rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors h-[5rem]`}
            >
              <span className="font-bold text-3xl text-neutral-500">+</span>
            </label>
          </div>
          </div>
        </div>
      


            )
                }

