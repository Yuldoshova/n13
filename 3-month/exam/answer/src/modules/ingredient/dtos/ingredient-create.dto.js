import Joi from "joi";

export const createIngredientDto = Joi.object({
  name: Joi.string().required()
});
