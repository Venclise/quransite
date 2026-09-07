'use client'
import BlurText from "@/components/BlurText"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FAQS } from "@/lib/constants"
import { useState } from "react"


export default function FAQ({onCourse}:{onCourse:boolean}) {
    const [limit,setLimit] = useState(6)
    const handleLimit = () => {
         setLimit(() => limit+10)
         limit > 6 && setLimit(() => limit-10)
    }
  return (
    <div className="h-max w-full lg:p-10 p-5">
          <p className={`${onCourse && "hidden"} text-cyan-500 text-lg text-center font-semibold`}>FAQ's</p>
      <BlurText
        text="Frequently asked questions."
        delay={200}
        animateBy="words"
        direction="top"
        className={`${onCourse ? "text-4xl" : "lg:text-5xl text-4xl  justify-center"} font-semibold lg:font-medium mt-5`}
      />

   <div className={`${onCourse ? "" : "flex items-center justify-center" } w-full  mt-12 flex-col`}>

<Accordion  defaultValue={["item-1"]} className={`${onCourse && "w-full"} flex flex-col gap-4 w-full md:w-[50%]`}>
      {
          FAQS.slice(0,limit).map(({id,question,answer}) => {
              return (
                  <AccordionItem key={id} value={`item-${id}`} className="bg-neutral-100 rounded-2xl border">
    <AccordionTrigger className=" p-5 border-0 ">{question}</AccordionTrigger>
    <AccordionContent className=" p-5 border-0 text-sm text-neutral-800">
   {answer}
    </AccordionContent> 
  </AccordionItem>
            )
        })
    }
    </Accordion>

    <Button className="text-cyan-500 mt-8 hover:text-cyan-500" variant="ghost" onClick={handleLimit}> 
        {
            limit > 6 ?  
            "Show less -" : "Show more +"
        } 

    </Button>
      
    </div>
    </div>
  )
}
