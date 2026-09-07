import mongoose, { models, Schema } from "mongoose";

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    time:{
 type:Number,
 required: true,
    },
    image:{
        type:[String],
        required: true,
    }
},{timestamps: true})


export const Course = models.Course || mongoose.model("Course",CourseSchema)