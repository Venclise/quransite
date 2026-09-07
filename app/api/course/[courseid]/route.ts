import { connectDB } from "@/lib/db";
import { Course } from "@/models/course";
import { NextResponse } from "next/server";


export async function GET(req: Request,  { params }: { params: Promise<{ courseid: string }> }) {
   try {
       await connectDB()
       const {courseid} = await params
       const course = await Course.findById(courseid)
       if(!course) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
}

  return NextResponse.json(
           course,
        { status: 201 }
      );

   }catch(e) {

    return NextResponse.json({message:"Failed to get the product"},{status: 404})


   }
}


export async function DELETE(req: Request,  { params }: { params: Promise<{ courseid: string }> }) {
  try {
await connectDB()

const {courseid } = await params
const course = await Course.findByIdAndDelete(courseid)
if(!course) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
}


     return NextResponse.json(
           { message: "Product deleted successfully" },
        { status: 201 }
      );

  }catch(e) {
    return NextResponse.json({message:"Failed to delete the product"},{status: 404})
  }
}