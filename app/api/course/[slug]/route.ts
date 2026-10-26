import { connectDB } from "@/lib/db";
import { Course } from "@/models/course";
import { NextResponse } from "next/server";

export async function GET(
  req: Request, 
  { params }: { params: Promise<{ slug: string }> }
) {
   try {
        await connectDB();
        const { slug } = await params;
        
        
        const course = await Course.findOne({ slug });
        
        if (!course) {
          return NextResponse.json(
            { message: "Product not found" },
            { status: 404 }
          );
        }

        return NextResponse.json(course, { status: 200 });

   } catch(e) {
    return NextResponse.json({ message: "Failed to get the product" }, { status: 500 });
   }
}

export async function DELETE(
  req: Request, 
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;


    const course = await Course.findOneAndDelete({ slug });
    
    if (!course) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );

  } catch(e) {
    return NextResponse.json({ message: "Failed to delete the product" }, { status: 500 });
  }
}