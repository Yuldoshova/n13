import Joi from "joi";

export const updateRatingDto = Joi.object({
  rating: Joi.number().required(),
  userId: Joi.string().optional(),
  recipeId: Joi.string().optional(),
});
