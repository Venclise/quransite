import { connectDB } from "@/lib/db";
import { Book } from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const bookings = await Book.find({}).sort({ createdAt: -1 });
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, email, phone, country, type, courseName } = body;

    // Safety check to log exact body if any field is missing
    if (!name || !email || !phone || !country) {
      return NextResponse.json(
        { message: "Missing required fields", bodyReceived: body },
        { status: 400 }
      );
    }

    const booking = await Book.create({
      name,
      email,
      number: phone,
      country,
      type,
      course: courseName,
      status: "pending",
    });

    return NextResponse.json(
      { message: "Created successfully", booking },
      { status: 201 }
    );
  } catch (e) {
    console.error("Error creating booking:", e);
    return NextResponse.json(
      { message: "An error occurred" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Booking id is required" },
        { status: 400 }
      );
    }

    const booking = await Book.findById(id);

    if (!booking) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    booking.status = "delivered";
    await booking.save();

    return NextResponse.json(booking, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update booking" },
      { status: 500 }
    );
  }
}