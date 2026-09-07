
import mongoose, { models, Schema } from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
},{timestamps:true});

export const Blog = models.Blog || mongoose.model("Blog", BlogSchema);
