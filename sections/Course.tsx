"use client";

import { useEffect, useState } from "react";
import BlurText from "@/components/BlurText";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "@/components/Card";

interface CourseType {
  _id: string
  title: string
  price: number
  time: number
  description: string
  image: string[]
  
}

export default function Course() {
  const [data, setData] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(`${baseUrl}/api/course`);
        const result = await res.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, [baseUrl]);

  if (loading) return <div className="p-10 text-center">Loading courses...</div>;

  return (
    <div className="h-max w-full lg:p-10 p-5">
      <p className="text-cyan-500 text-lg text-center font-semibold">Courses</p>
      <BlurText
        text="Master the Quran and Arabic with Expert-Led Programs"
        delay={200}
        animateBy="words"
        direction="top"
        className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center mt-5"
      />

      <Swiper
        spaceBetween={10}
        slidesPerView={1.3} 
        breakpoints={{
          425: { slidesPerView: 1.3 },
          576: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5},
        }}
        className="mt-12 w-full"
      >
         {data?.map((data:CourseType) => (
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
}