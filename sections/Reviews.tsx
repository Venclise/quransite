

import { REVIEWS_DATA } from "@/lib/constants";
import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Reviews() {
  return (
    <div id="reviews" className="w-full lg:h-screen overflow-hidden flex flex-col gap-4 mt-24 h-max lg:p-5 ">
    
     <p className="text-cyan-500 my-4 text-center">Testimonials</p>
        


      <Marquee speed={60} pauseOnHover gradient={false}>
        {REVIEWS_DATA.map(({ id, name, review,country }) => (
          <div
            key={id}
            className="
              mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[170px]
             
              bg-neutral-100
              border border-neutral-200
              p-5 rounded-3xl
              flex flex-col justify-between
            "
          >
            <p className="text-sm text-neutral-800 font-semibold leading-relaxed">
              "{review}"
            </p>

            <p className=" text-xs text-right mt-4 text-neutral-800">
              — {name},<span className="">

              {country}
              </span>
            </p>
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

            <p className=" text-xs text-right mt-4 text-neutral-900">
              — {name},
              <span className="">

              {country}
              </span>
            </p>
          </div>
        ))}
      </Marquee> 
    </div>
  );
}
