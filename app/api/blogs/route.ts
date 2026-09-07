import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import { Blog } from "@/models/Blogs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const files = formData
      .getAll("images")
      .filter((f): f is File => f instanceof File);

    if (!title || !description || !files) {
      return NextResponse.json({ error: "Missing Fields" }, { status: 400 });
    }

    const imagesUrls: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const result: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "products" }, (err, res) => {
            if (err) return reject(err);
            resolve(res);
          })
          .end(buffer);
      });
      imagesUrls.push(result.secure_url);
    }

    const blog = Blog.create({
      title,
      description,
      image: imagesUrls,
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (e) {
    console.error("POST /api/blogs error:", e);
    return NextResponse.json(
      { error: "Failed to make a Post request" },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const blogs = await Blog.find();
    if (!blogs) {
      return NextResponse.json(
        { error: "Failed to get the data" },
        { status: 500 },
      );
    }
    return NextResponse.json(blogs, { status: 200 });
  } catch (e) {
    console.error("POST /api/products error:", e);
    return NextResponse.json(
      { error: "Failed to make a Get request" },
      { status: 500 },
    );
  }
}
