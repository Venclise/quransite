"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Trash } from "lucide-react";

export default function Add() {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [courseInfo, setCourseInfo] = useState<{
    title: string;
    price: string;
    description: string;
    time: string,
  }>({
    title: "",
    price: "",
    description: "",
    time: "",
  });



  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseInfo.title || !courseInfo.price || !courseInfo.description || !courseInfo.time) {
      toast.error("Please fill in the properties");
      return;
    }

    setLoading(true);
    const formData = new FormData();

    formData.append("title", courseInfo.title);
    formData.append("description", courseInfo.description);
    formData.append("price", courseInfo.price);
    formData.append("time", courseInfo.time);

    

    images.forEach((img) => {
      formData.append("images", img);
    });

    try {
      const res = await fetch(`${baseUrl}/api/course`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        toast.error("Something went wrong");
        setLoading(false);
        return;
      }

      setCourseInfo({ title: "", description: "", price: "",time: "" });
      setImages([]);
      setPreviews([]);

      const fileInput = document.getElementById("img") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      toast.success("Product has been added successfully!");
    } catch (e) {
      toast.error("Failed to submit the product");
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));

    setActiveIndex((prev) => {
      if (prev > index) return prev - 1;
      if (prev === index) return Math.max(0, prev - 1);
      return prev;
    });

    setTimeout(() => {
      swiperRef.current?.slideTo(Math.max(0, index - 1));
  }, 0);
  };

  return (
    <div className="mt-24 w-full h-screen p-5 lg:p-10">
      <h1 className="font-semibold text-3xl lg:text-5xl">Add a course</h1>
      <div className="w-full h-full mt-12 flex lg:flex-row flex-col-reverse gap-8">
   
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:w-[50%] w-full">
          <div className="flex items-center gap-2">
            <label htmlFor="title" className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-neutral-800 font-semibold">Title</span>
              <Input
                placeholder="Add a title"
                id="title"
                value={courseInfo.title}
                onChange={(e) => setCourseInfo({ ...courseInfo, title: e.target.value })}
              />
            </label>
            <label htmlFor="price" className="flex flex-col gap-2">
              <span className="text-sm text-neutral-800 font-semibold">Price</span>
              <Input
                placeholder="Add Price"
                id="price"
                type="number"
                value={courseInfo.price}
                onChange={(e) => setCourseInfo({ ...courseInfo, price: e.target.value })}
              />
            </label>
              <label htmlFor="time" className="flex flex-col gap-2">
              <span className="text-sm text-neutral-800 font-semibold">Time</span>
              <Input
                placeholder="Add time"
                id="time"
                type="number"
                value={courseInfo.time}
                onChange={(e) => setCourseInfo({ ...courseInfo, time: e.target.value })}
              />
            </label>
          </div>
          <label htmlFor="description" className="flex flex-col gap-2">
            <span className="text-sm text-neutral-800 font-semibold">Description</span>
            <Textarea
              placeholder="Add Description"
              id="description"
              value={courseInfo.description}
              onChange={(e) => setCourseInfo({ ...courseInfo, description: e.target.value })}
            />
          </label>

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>

        <div className="w-full lg:w-[50%] flex flex-col gap-4">
          <h1 className="font-semibold text-2xl text-neutral-800">Add image</h1>

          <input
            type="file"
            className="hidden"
            id="img"
            multiple
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setImages((prev) => [...prev, ...files]);
              setPreviews((prev) => [
                ...prev,
                ...files.map((file) => URL.createObjectURL(file)),
              ]);
            }}
          />

         
          <div
            className={`w-full h-[20rem] relative p-5 bg-gray-50 rounded-2xl ${
              previews.length ? "block" : "hidden"
            }`}
          >
            <Swiper
              className="w-full h-full"
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            >
              {previews.map((src, i) => (
                <SwiperSlide
                  className="w-full h-full flex items-center justify-center"
                  key={i}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Image ${i}`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails list */}
          <div className="flex flex-wrap items-center gap-4">
            {previews.map((src, i) => (
              <div
                className="h-[5rem] w-[5rem] relative cursor-pointer"
                onClick={() => swiperRef.current?.slideTo(i)}
                key={i}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer transition-all hover:bg-red-200 absolute -top-2 -right-2 text-red-500 hover:text-red-500 bg-white shadow-sm rounded-full z-10 w-6 h-6 p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(i);
                  }}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
                <Image
                  src={src}
                  alt={`Thumbnail ${i}`}
                  height={80}
                  width={80}
                  className={`${
                    activeIndex === i ? "border-2 border-blue-500 opacity-100" : "border opacity-70"
                  } h-full w-full object-cover rounded-md`}
                />
              </div>
            ))}

            <label
              htmlFor="img"
              className={`${
                previews.length ? "w-[5rem]" : "w-full"
              } bg-gray-50 border-2 border-dashed border-neutral-300 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors h-[5rem]`}
            >
              <span className="font-bold text-3xl text-neutral-500">+</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}