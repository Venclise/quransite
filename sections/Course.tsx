"use client";

import { useEffect, useState } from "react";
import BlurText from "@/components/BlurText";

import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

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
    <div className="h-max w-full lg:p-20 p-5">
      <p className="text-cyan-500 text-lg text-center font-semibold">Courses</p>
    <div className="f ">

      <BlurText
           text="Master the"
           delay={200}
           animateBy="words"
           direction="top"
           className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center mt-5"
         />
           <BlurText
           text="Quran and Arabic"
           delay={200}
           animateBy="words"
           direction="top"
           className="lg:text-5xl text-4xl font-semibold lg:font-medium text-cyan-500 justify-center mt-5 text"
         />
              <BlurText
           text="with Expert-Led Programs"
           delay={200}
           animateBy="words"
           direction="top"
           className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center mt-5"
         />

</div>
      <div
     
      
        className="mt-12 w-full h-max grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
      >
          {data?.slice(0,6).map((data:CourseType) => (
         
            <Card data={data} />
         
         ))}  
      </div>  
         <Button className="py-6 px-8 mx-auto  md:w-max w-full  justify-center rounded-full bg-cyan-500 text-white hover:bg-cyan-600 flex items-center gap-2">
            <Link href="/course" className="w-full justify-center flex items-center gap-2">
            <GraduationCap size={20} />
            Explore all courses
          </Link>
          </Button>
    </div>
  );
}