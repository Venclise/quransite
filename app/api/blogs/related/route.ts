import { connectDB } from "@/lib/db";
import { Blog } from "@/models/Blogs";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try {
        await connectDB()
        const {searchParams} = new URL(req.url)
        const blogid = searchParams.get("blogid")

        if(!blogid) {
               return NextResponse.json(
        { error: "Missing params: blogId" },
        { status: 400 }
      );
    }
    const blog = await Blog.find({
_id:{ $ne:blogid}
}
).limit(6)

return NextResponse.json(blog,{status:200})

    }catch(e){
             console.log(e)
            return NextResponse.json(
      { error: "Failed to fetch related blogs" },
      { status: 500 })
    }
}