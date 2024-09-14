import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        video_url: {
            type: String
        },
        preparationTime: {
            type: String
        },
        cookingTime: {
            type: String
        },
        serving: {
            type: String
        },
        images: [
            {
                type: [mongoose.SchemaTypes.ObjectId],
                ref: "Image",
            }
        ],
        comments: [
            {
                type: [mongoose.SchemaTypes.ObjectId],
                ref: "Comment",
            }
        ],
        retings: [
            {
                type: [mongoose.SchemaTypes.ObjectId],
                ref: "Rating",
            }
        ]

    },
    {
        collection: 'recipes',
        timestamps: true
    }
)

export const Recipe = mongoose.model('Recipe', recipeSchema)
