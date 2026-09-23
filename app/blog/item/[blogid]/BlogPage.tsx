import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Free from "@/sections/Free";

type Blog = {
  _id: any;
  title: string;
  description: string;
  image: string[];
  createdAt?: string;
};

export default function BlogPage({ blog }: { blog: Blog }) {
  const cleanDescription = DOMPurify.sanitize(blog.description);

  return (
    <div className="w-full h-full  lg:flex items-center gap-2 lg:flex-row flex-col">
    
    <article className="w-full  ">
      <div className="p-2">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {blog.title}
        </h1>
      </div>

      <div className="relative w-full h-[260px] sm:h-[450px] bg-emerald-700/10 rounded-2xl overflow-hidden border border-emerald-900/10 shadow-sm">
        {blog.image && blog.image[0] ? (
          <Image
            src={blog.image[0]}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        ) : null}
      </div>

      <div
        className="prose text-md max-w-none text-gray-700 whitespace-pre-line leading-relaxed font-semibold p-2"
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      />
    </article>
      
    </div>
  );
}