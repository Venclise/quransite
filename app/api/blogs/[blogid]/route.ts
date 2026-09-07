import { connectDB } from "@/lib/db";
import { Blog } from "@/models/Blogs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ blogid: string }> },
) {
  try {
    connectDB();
    const { blogid } = await params;

    const blog = await Blog.findByIdAndDelete(blogid);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: "Failed to delete the blog" },
      { status: 404 },
    );
  }
}


 export async function GET(
    req: Request,
  { params }: { params: Promise<{ blogid: string }> },
 ) {
  try {
  await connectDB()

  const {blogid} = await params 
  const blog = await Blog.findById(blogid)
   if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 201 });


  }catch(e) {
       return NextResponse.json(
      { message: "Failed to delete the blog" },
      { status: 404 },
    );
  }
  
 }