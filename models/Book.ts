import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    country: { type: String, required: true },
    course: { type: String, required: true },
    type: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Book =
  mongoose.models.Book || mongoose.model("Book", BookSchema);