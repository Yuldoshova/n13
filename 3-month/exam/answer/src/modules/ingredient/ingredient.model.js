import mongoose from "mongoose";

const ingredientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        collection: 'ingredients'
    }
)

export const Ingredient = mongoose.model('Ingredient', ingredientSchema)
