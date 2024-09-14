import Joi from "joi";

export const createCommentDto = Joi.object({
  text: Joi.string().required(),
  userId: Joi.string().required(),
  recipeId: Joi.string().required(),
});
