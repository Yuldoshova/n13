import Joi from "joi";

export const createRatingDto = Joi.object({
  rating: Joi.number().required(),
  userId: Joi.string().required(),
  recipeId: Joi.string().required(),
});
