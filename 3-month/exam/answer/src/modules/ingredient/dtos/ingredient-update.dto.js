import Joi from "joi";

export const updateIngredientDto = Joi.object({
  name: Joi.string().optional()
});
