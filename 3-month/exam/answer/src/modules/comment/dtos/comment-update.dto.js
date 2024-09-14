import Joi from "joi";

export const updateCommentDto = Joi.object({
  text: Joi.string().required(),
  userId: Joi.string().optional(),
  recipeId: Joi.string().optional(),
});
