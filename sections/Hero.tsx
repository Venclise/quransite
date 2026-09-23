"use client"
import BlurText from "@/components/BlurText";
import Card from "@/components/Card";
import Courses from "@/components/Card";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/constants";
import { Clock, GraduationCap, Phone, Timer } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface CourseType {
  _id: string
  title: string
  price: number
  time: number
  description: string
  image: string[]
  
}

export default function Hero() {

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

  return (
    <div className="w-full lg:mt-0 mt-30 lg:min-h-screen lg:flex-row flex-col lg:p-10  flex items-center justify-center lg:justify-start">
     
      <div className="flex flex-col items-center lg:items-start w-full max-w-5xl lg:w-[50%] ">
        <BlurText
          text="Learn Quran Online with expert"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl secondary lg:text-7xl font-semibold lg:font-medium justify-center lg:justify-start"
        />

        <BlurText
          text="Quran Tutors."
          delay={200}
          animateBy="words"
          direction="top"
          className="text-cyan-500 text-5xl lg:text-7xl font-semibold lg:font-medium mt-2 justify-center lg:justify-start"
        />

        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">

          <Button className="py-6 px-8 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center gap-2">
            <Link href="/course" className="w-full flex items-center gap-2">
            <GraduationCap size={20} />
            Explore courses
          </Link>
          </Button>

          <Button className="py-6 px-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white ">
            <Link href="/course" className="w-full flex items-center gap-2">
            <Clock size={20} />
            Book free trial
            </Link>
          </Button>
        </div>

      </div>
      <div className="w-full h-screen  lg:w-[50%] ">
        <Marquee className="w-full h-full flex gap-4">
              {data?.map((data:CourseType) => (
     
            <Card data={data} />
     
        ))} 
        
        </Marquee>

      </div>
    </div>
  );
}