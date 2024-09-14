import mongoose from "mongoose";

const imageSchema = mongoose.Schema(
    {
        recipeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true
        },
        isMain: {
            type: Boolean,
            required: true
        }
    },
    {
        collection: 'images'
    }
)

export const Image = mongoose.model('Image', imageSchema)
