import mongoose from "mongoose";

const ratingSchema = mongoose.Schema(
    {
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
        },
        recipeId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Recipe",
        }
    },
    {
        timestamps: true,
        collection: 'ratings'
    }
)

export const Rating = mongoose.model('Rating', ratingSchema)
