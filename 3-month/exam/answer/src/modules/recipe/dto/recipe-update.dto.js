import Joi from 'joi'

export const updateRecipeDto = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    owner_id: Joi.string(),
    category_id: Joi.string(),
    video_url: Joi.string(),
    preparation_time: Joi.string().optional(),
    cooking_time: Joi.string().optional(),
    servings: Joi.string().optional()
})