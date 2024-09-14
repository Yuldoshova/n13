import { isValidObjectId } from "mongoose";
import ApiFeature from "../../utils/api-feature.utils.js";
import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { Rating } from "./rating.model.js";
import { User } from "../user/user.model.js";
import { Recipe } from "../recipe/recipe.model.js";

class RatingController {
  #_model;
  #_modelUser;
  #_modelRecipe;

  constructor() {
    this.#_model = Rating,
      this.#_modelUser = User,
      this.#_modelRecipe = Recipe
  }

  createRating = async (req, res, next) => {
    try {
      const { rating, userId, recipeId } = req.body;

      this.#_checkObjectId(userId)
      this.#_checkObjectId(recipeId)

      await this.#_checkUser(userId)
      await this.#_checkRecipe(recipeId)

      const newRating = await this.#_model.create({
        rating, userId, recipeId
      });

      res.status(201).send({
        message: "Successfully created!",
        data: newRating
      });
      
    } catch (error) {
      next(error);
    }
  };

  getAllRatings = async (req, res, next) => {
    try {
      const query = { ...req.query };

      if (!Object.keys(query).length) {
        return res.send({
          message: "success",
          data: await this.#_model.find(),
        });
      }

      const allResultsCount = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("rating")
        .limitFields()
        .getQuery()
        .countDocuments();

      const allFilteredRatings = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("rating")
        .paginate()
        .getQuery()
        .select("-__v");

      res.send({
        message: "success",
        page: req.query?.page || 0,
        limit: req.query?.limit || 10,
        results: allResultsCount,
        data: allFilteredRatings,
      });

    } catch (error) {
      next(error);
    }
  };

  updateRating = async (req, res, next) => {
    try {
      const { rating, userId, recipeId } = req.body;
      const { ratingId } = req.params;

      this.#_checkObjectId(ratingId);
      this.#_checkObjectId(userId)
      this.#_checkObjectId(recipeId)

      await this.#_checkRating(ratingId)
      await this.#_checkUser(userId)
      await this.#_checkRecipe(recipeId)

      await this.#_model.findByIdAndUpdate(ratingId, {
        rating, userId, recipeId
      });

      res.send({
        message: "Successfully updated!",
      });

    } catch (error) {
      next(error);
    }
  };

  deleteRating = async (req, res, next) => {
    try {
      const { ratingId } = req.params;

      this.#_checkObjectId(ratingId);

      await this.#_model.findByIdAndDelete(ratingId);

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

  async #_checkRating(id) {
    const founded = await this.#_model.findById(id);

    if (!founded) {
      throw new NotFoundException("Rating not found");
    }
  }

  async #_checkUser(id) {
    const founded = await this.#_modelUser.findById(id);

    if (!founded) {
      throw new NotFoundException("User not found");
    }
  }

  async #_checkRecipe(id) {
    const founded = await this.#_modelRecipe.findById(id);

    if (!founded) {
      throw new NotFoundException("Recipe not found");
    }
  }
}

export default new RatingController();
