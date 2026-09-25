

import BlurText from "@/components/BlurText";
import { REVIEWS_DATA } from "@/lib/constants";
import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Reviews() {
  return (
    <div id="reviews" className="w-full lg:h-max overflow-hidden flex flex-col gap-4 mt-24 h-max lg:p-5 ">
    <div className="my-4">

     <p className="text-cyan-500 font-semibold text-center">Testimonials.</p>
        
      <BlurText
           text="See what our Students say about us "
           delay={200}
           animateBy="words"
           direction="top"
           className="lg:text-5xl text-4xl font-semibold lg:font-medium justify-center mt-5"
         />
    </div>

      <Marquee speed={60} pauseOnHover gradient={false}>
        {REVIEWS_DATA.map(({ id, name, review,country }) => (
          <div
            key={id}
            className="
              mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[200px]
             
              bg-neutral-100
              border border-neutral-200
              p-5 rounded-3xl
              flex flex-col justify-between
            "
          >
       
            <p className="text-sm text-neutral-800 font-semibold leading-relaxed">
              "{review}"
            </p>
<div className="flex items-center justify-between w-full">
       <div className="flex items-center ">
              <Star size={15} className="fill-cyan-500 text-cyan-500" />
              <Star size={15} className="fill-cyan-500 text-cyan-500" />

              <Star size={15} className="fill-cyan-500 text-cyan-500" />
              <Star size={15} className="fill-cyan-500 text-cyan-500" />
              <Star size={15} className="fill-cyan-500 text-cyan-500" />

            </div>

            <p className=" text-xs text-right   text-neutral-800">
              — {name},<span className="">

              {country}
              </span>
            </p>
</div>
          </div>
        ))}
      </Marquee>

      
      <Marquee speed={60} direction="right" pauseOnHover gradient={false}>
        {REVIEWS_DATA.map(({ id, name, review,country }) => (
          <div
            key={`reverse-${id}`}
            className="
            mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[170px]
             
              bg-neutral-100
              border border-neutral-200
              p-5 rounded-3xl
              flex flex-col justify-around
            "
          >
            <p className="text-sm text-neutral-800 font-semibold leading-relaxed">
              “{review}”
            </p>

          <div className="flex items-center justify-between w-full">
       <div className="flex items-center ">
              <Star size={15} className="fill-cyan-500 text-cyan-500" />
              <Star size={15} className="fill-cyan-500 text-cyan-500" />

              <Star size={15} className="fill-cyan-500 text-cyan-500" />
              <Star size={15} className="fill-cyan-500 text-cyan-500" />
              <Star size={15} className="fill-cyan-500 text-cyan-500" />

            </div>

            <p className=" text-xs text-right  text-neutral-800">
              — {name},<span className="">

              {country}
              </span>
            </p>
</div>
          </div>
        ))}
      </Marquee> 
    </div>
  );
}
