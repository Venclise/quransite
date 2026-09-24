import Card from "@/components/Card";
export const dynamic = "force-dynamic";



type data = {
  _id: any;
  title: string;
  description: string;
  price: number;
   image: string[];
}


export default async function page() {

  
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/course`)
  const data = await res.json()

  console.log(data)
  return (
    <div className="w-full h-max lg:p-10 p-5 ">
      <div className="lg:p-10 md:p-5 p-2 w-full flex lg:items-center lg:flex-row flex-col justify-between">
        <h1 className=" font-semibold lg:text-6xl text-3xl">Courses.</h1>
        <p className="text-sm lg:text-2xl font-normal max-w-xs">
          Online Quran Courses for Kids & Adults
        </p>
          </div>
      

<div className=" w-full grid  md:grid-cols-2 mt-5 md:gap-4">
        {data.map((data:data) => (
           <Card data={data} />
        ))}
     
          
  </div>
    </div>
  )
}
