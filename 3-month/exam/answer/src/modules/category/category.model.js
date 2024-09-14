import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
        image_url: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    {
        collection: 'categories'
    }
)

export const Category = mongoose.model('Category', categorySchema)
