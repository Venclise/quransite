import mongoose, { models, Schema } from "mongoose";
import slugify from "slugify";

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    slug: { type: String, unique: true, index: true },
    price: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    }
}, { timestamps: true });

// Automatically generate a unique slug from the title before saving
CourseSchema.pre('save', async function () {
    // Only generate if the title has changed or if it's a brand new document
    if (!this.isModified('title') && this.slug) {
        return;
    }

    let baseSlug = slugify(this.title, {
        lower: true,      // Convert to lowercase
        strict: true,     // Strip special characters
        remove: /[*+~.()'"!:@]/g,
    });

    let uniqueSlug = baseSlug;
    let counter = 1;

    // Handle duplicate slugs (if two courses have the exact same title)
    while (await mongoose.models.Course.findOne({ slug: uniqueSlug, _id: { $ne: this._id } })) {
        uniqueSlug = `${baseSlug}-${counter}`;
        counter++;
    }

    this.slug = uniqueSlug;
});

export const Course = models.Course || mongoose.model("Course", CourseSchema);