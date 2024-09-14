import Joi from 'joi'

export const createRecipeDto = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    owner_id: Joi.string().required(),
    category_id: Joi.string().required(),
    video_url: Joi.string(),
    preparation_time: Joi.string().optional(),
    cooking_time: Joi.string().optional(),
    servings: Joi.string().optional()
})