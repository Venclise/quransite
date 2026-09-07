import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import { Course } from "@/models/course";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
 try {
  await connectDB()
  const formData = await req.formData()
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const price = Number(formData.get("price")) 
  const time = Number(formData.get("time")) 


  const files = formData.getAll("images").filter((f):f is File => f instanceof File)

  if(!title || !description || !price || !files || !time) {
         return NextResponse.json({ error: "Missing Fields" }, { status: 400 });
  }

  const imagesUrls:string[] = []
  for(const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer())
    const result: any = await new Promise((resolve,reject) => {
        cloudinary.uploader.upload_stream({folder:"products"},(err,res) => {
            if(err) return reject(err)
                resolve(res)
        })
        .end(buffer)
    });
    imagesUrls.push(result.secure_url)
  }

  const course = await Course.create({
    title,
    description,
    price,
    image: imagesUrls,
    time,
  })

   return NextResponse.json(course, { status: 201 });

 } catch (e) {
    console.error("POST /api/products error:", e);
    return NextResponse.json(
      { error: "Failed to make a Post request" },
      { status: 500 },
    );
  }
}





export async function GET(req:Request) {
  try {
      await connectDB()

      const course = await Course.find()
      if(!course) {
        return NextResponse.json({
          error: "Failed to get the data"
        },{status:500})
      }
return NextResponse.json(course,{status:200})
  }catch(e) {
 console.error("POST /api/products error:", e);
    return NextResponse.json(
      { error: "Failed to make a Get request" },
      { status: 500 },
    )
  }
}

