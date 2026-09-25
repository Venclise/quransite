"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock } from "lucide-react";
import ProductActions from "./dashboard/ProductActions";
import { formatDate } from "@/lib/utils";

type ProductData = {
  _id: string;
  title: string;
  price?: number;
  time?: number;
  description: string;
  image: string[];
  createdAt?: string;
  type?: "course" | "blog";
};

export default function Card({ data }: { data: ProductData }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");


  const isBlog = data.type === "blog" || (!data.price && !data.time);

  const targetHref = isDashboard
    ? "#"
    : isBlog
    ? `/blog/item/${data._id}`
    : `/course/item/${data._id}`;

  return (
    <div className="h-[20rem] rounded-3xl shadow-md  border ">
      <Link href={targetHref} className="h-full w-full block group relative">
        <div className="w-full h-[60%] relative overflow-hidden bg-gray-100 rounded-t-2xl">
          <Image
            src={data.image[0]}
            alt={data.title}
            fill
            blurDataURL={data.image[0]}
            placeholder="blur"
            className={`object-cover transition-opacity duration-300 ${
              !isDashboard && data.image.length > 1
                ? "group-hover:opacity-0"
                : ""
            }`}
            loading="lazy"
          />

          {!isDashboard && data.image.length > 1 && (
            <Image
              src={data.image[1]}
              alt={data.title}
              fill
              loading="lazy"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>

        <div className="flex flex-col gap-2 p-2">
          {isDashboard && <ProductActions id={data._id} isBlog={isBlog} />}

          <h2 className="text-sm md:text-xl lg:text-2xl font-semibold line-clamp-2">
            {data.title}
          </h2>

          {!isBlog ? (
            <div className="flex items-center w-full justify-between flex-row-reverse mt-2">
              <div className="flex items-center gap-1 text-xl font-semibold">
                <span className="text-sm ">
                ${data.price}{" "}
                </span>
                <sup className="text-xs font-normal">2 days/week</sup>
              </div>
              <div className="flex items-center gap-1 text-xs  font-semibold">
                <Clock size={10} strokeWidth={1} />
                {data.time}min/session
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full h-max mt-2">
              <p className="text-xs line-clamp-1 text-gray-600">
                {data.description}
              </p>
              <p className="text-xs text-gray-700 font-medium mt-1">
                {data.createdAt
                  ? formatDate(data.createdAt)
                  : "Date unavailable"}
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}