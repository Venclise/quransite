"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  Star, 
  BookOpen,   
  Clock,
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { convertPrice } from "@/lib/utils";
import { CurrencyPairs } from "@/lib/constants";
import FAQ from "@/sections/FAQ";
import BookingForm from "./BookingForm";



type Product = {
  _id: any;
  title: string;
  description: string;
  price: number;
  cutprice?: number;
  image: string[];
  time?: string;
  instructor?: string;
  rating?: number;
  reviewsCount?: number;
  lessonsCount?: number;
  assignmentCount?: number;
  category?: string;
  learningPoints?: string[];
  requirements?: string[];
};

export default function SingleCourse({ product }: { product: Product }) {
  const router = useRouter();
  
  const [days, setDays] = useState<number>(2);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const rating = product.rating || 5.0;
  const lessonsCount = product.lessonsCount || 16;
  const courseTime = product.time;

  const basePrice = product.price || 126.0;


  const extraDays = Math.max(0, days - 2);
  const finalPrice = basePrice + extraDays * 10;

  return (
    <div className="min-h-screen bg-gray-50/60 pb-16 mt-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">

        <div className="lg:col-span-8 flex flex-col gap-8">
     
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 border-y border-gray-200/80 py-3">
              <div className="flex items-center gap-1.5 font-bold text-gray-900">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{rating.toFixed(1)}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span>Lessons {lessonsCount}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{courseTime}min/per session</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[260px] sm:h-[400px] bg-emerald-700/10 rounded-2xl overflow-hidden flex items-center justify-center border border-emerald-900/10 shadow-sm group">
            {product.image && product.image[0] ? (
              <Image
                src={product.image[0]}
                alt={product.title}
                fill
                className="object-cover"
              />
            ) : null}
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="lg:text-2xl text-xl font-semibold text-gray-900">About this course</h2>
            <p className="text-gray-600 text-sm">
              {product.description}
            </p>
          </div>

          <FAQ onCourse={true} />
        </div>

      
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm  flex flex-col gap-6">
            
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-blue-600">
                
                  {convertPrice(finalPrice, selectedCurrency)}
                </span>
              </div>

              <Select 
                value={selectedCurrency} 
                onValueChange={(val) => setSelectedCurrency(val)}
              >
                <SelectTrigger className="w-auto h-8 text-xs border-gray-200 bg-gray-50 focus:ring-0">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    {CurrencyPairs.map((item) => (
                      <SelectItem key={item.id} value={item.title}>
                        {item.symbol} {item.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3 flex-wrap">
             
              <ToggleGroup 
                type="single"
                value={days.toString()} 
                onValueChange={(val) => {
                  if (val) setDays(Number(val)); 
                }}
                className="w-full flex flex-wrap"
                variant="outline"
              >
                <ToggleGroupItem value="2" aria-label="2 days">
                  2 days/week
                </ToggleGroupItem>
                <ToggleGroupItem value="3" aria-label="3 days">
                  3 days/week
                </ToggleGroupItem>
                <ToggleGroupItem value="4" aria-label="4 days">
                  4 days/week
                </ToggleGroupItem>
                <ToggleGroupItem value="5" aria-label="5 days">
                  5 days/week
                </ToggleGroupItem>
              </ToggleGroup>

<BookingForm title={product.title} price={convertPrice(finalPrice, selectedCurrency)} days={days} time={product.time}/>

            
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}