import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
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
        collection: 'comments'
    }
)

export const Comment = mongoose.model('Comment', commentSchema)
