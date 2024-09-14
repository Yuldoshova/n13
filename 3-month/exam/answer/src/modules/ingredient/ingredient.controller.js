import { isValidObjectId } from "mongoose";
import ApiFeature from "../../utils/api-feature.utils.js";
import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { Ingredient } from "./ingredient.model.js";

class IngredientController {
  #_model;

  constructor() {
    this.#_model = Ingredient
  }

  createIngredient = async (req, res, next) => {
    try {
      const { name } = req.body;

      const newIngredient = await this.#_model.create({
        name,
      });

      res.status(201).send({
        message: "Successfully created",
        data: newIngredient
      });
    } catch (error) {
      next(error);
    }
  };

  getAllIngredients = async (req, res, next) => {
    try {
      const query = { ...req.query };

      if(!Object.keys(query).length){
        return  res.send({
            message: "success",
            data: await this.#_model.find(),
          });
        }

      const allResultsCount = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("name")
        .limitFields()
        .getQuery()
        .countDocuments();

      const allFilteredIngredients = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("name")
        .limitCategories()
        .paginate()
        .getQuery()
        .select("-__v");

      res.send({
        message: "success",
        page: req.query?.page || 0,
        limit: req.query?.limit || 10,
        results: allResultsCount,
        data: allFilteredIngredients,
      });
    } catch (error) {
      next(error);
    }
  };

  updateIngredient = async (req, res, next) => {
    try {
      const { name } = req.body;
      const { ingredientId } = req.params;

      this.#_checkObjectId(ingredientId);
      await this.#_checkIngredient(ingredientId)

      await this.#_model.findByIdAndUpdate(ingredientId, {
        name,
      });

      res.send({
        message: "Successfully updated!",
      });

    } catch (error) {
      next(error);
    }
  };

  deleteIngredient = async (req, res, next) => {
    try {
      const { ingredientId } = req.params;

      this.#_checkObjectId(ingredientId);
      await this.#_checkIngredient(ingredientId)

      await this.#_model.findByIdAndDelete(ingredientId);

      res.send({
        message: "Successfully deleted!",
      });

    } catch (error) {
      next(error);
    }
  };

  #_checkObjectId(id) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Given ${id} is not a valid ObjectID`);
    }
  }

  async #_checkIngredient(id) {
    const founded = await this.#_model.findById(id);

    if (!founded) {
      throw new NotFoundException("Ingredient not found!");
    }
  }

}

export default new IngredientController();
