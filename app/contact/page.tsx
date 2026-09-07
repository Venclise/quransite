"use client"
import BlurText from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { div } from "motion/react-client";
import { useState } from "react";


export default function page() {
    const [loading,setLoading] = useState(false)
  return (
    <div className="w-full h-max lg:p-10 p-5 flex items-center justify-around lg:flex-row flex-col">
        <div className="lg:w-max w-full  flex flex-col  items-center justify-center ">

          <BlurText
          text="Contact us!"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl secondary lg:text-7xl font-semibold lg:justify-start justify-center"
          />
            <BlurText
          text="Please fill in the form we will reply you shortly thanks!"
          delay={50}
          animateBy="words"
          direction="top"
          className="text-sm mx-2 lg:justify-center justify-center"
          />
          </div>

      <form
    //   ref={form}
    //   onSubmit={sendEmail}
      className="lg:w-1/3 md:w-1/2  p-7 lg:p-5 h-max lg:h-screen  flex flex-col  justify-center gap-8 mt-12 bg-white border border-neutral-100 shadow-sm rounded-2xl"
      >
         <div className="flex gap-4">
          <label className="flex flex-col gap-1 text-sm w-full">
            <span className="text-neutral-800">Name</span>
            <Input
              name="first_name"
              placeholder="Enter name"
              type="text"
              required
              className="border border-neutral-200"
              />
          </label>

          <label className="flex flex-col gap-1 text-sm w-full">
            <span className="text-neutral-800">Last name</span>
            <Input
              name="last_name"
              placeholder="Enter last name"
              type="text"
              className="border border-neutral-200"
              
              />
          </label>
        </div>

        <label className="flex flex-col gap-1 text-sm">
          <span className="text-neutral-800">Email</span>
          <Input
            name="email"
            placeholder="Enter email"
            type="email"
            required
            className="border border-neutral-200"
            />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="text-neutral-800">Message</span>
          <textarea
            name="message"
            className="w-full h-40 p-3 text-sm rounded-md  bg-neutral-100 text-black outline-none "
            placeholder="Enter message..."
            required
            />
        </label>
{
  loading ? 
  <Button  disabled className="rounded-full py-5  bg-cyan-600">
    <Spinner />
    Submitting
      </Button> : 
  <Button   className="rounded-full py-6 cursor-pointer bg-cyan-500 hover:bg-cyan-600">
        Submit
      </Button>
      }
        
  
      </form>
    </div>

      
    )
}

