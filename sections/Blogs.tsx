"use client"
import BlurText from '@/components/BlurText'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from '@/components/Card';

interface BlogType {
  _id: string
  title: string
  description: string
  image: string[]
}

export default function Blog() {

    const [data,setData] = useState([])
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    useEffect(() => {
         async function fetchBlogs() {
            try {

                const res = await fetch(`${baseUrl}/api/blogs`)
                const data = await res.json()
                setData(data)
            }catch(e) {
                console.log(e)
            }
         }
         fetchBlogs()
    },[baseUrl])

  return (
       <div className="h-max w-full lg:p-10 p-5">
      <p className="text-cyan-500 text-lg text-center font-semibold">Blogs.</p>
      <BlurText 
        text="
        Latest Quran Learning Articles & Guides
"
        delay={200}
        animateBy="words"
        direction="top"
        className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center mt-5"
      />

    <Swiper
        spaceBetween={10}
        breakpoints={{
          425: { slidesPerView: 1.1},
          576: { slidesPerView: 2 },
          1024: { slidesPerView: 3},
        }}
        className="mt-12"
      >
        {data?.map((data:BlogType) => (
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
        ))} 
      </Swiper>

    </div>
  )
}
