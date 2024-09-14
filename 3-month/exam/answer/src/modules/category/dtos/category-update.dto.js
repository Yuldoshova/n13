import Joi from "joi";

export const updateCategoryDto = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional()
});
