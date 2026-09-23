import Card from "@/components/Card";
import { div } from "motion/react-client";





export default async function page() {

  
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/course`)
  const data = await res.json()

  console.log(data)
  return (
    <div className="w-full h-screen lg:p-10 p-5 bg-[#e4f0f9]">
      <div className="p-10 w-full flex items-center justify-between">
        <h1 className=" font-semibold text-6xl">Courses.</h1>
        <p className="text-2xl font-normal max-w-xs">
          Online Quran Courses for Kids & Adults
        </p>
          </div>
      

<div className=" w-full grid grid-cols-2 p-5 overflow-y-auto gap-4">
        {data.map((data) => (
           <Card data={data} />
        ))}
     
          
  </div>
    </div>
  )
}
