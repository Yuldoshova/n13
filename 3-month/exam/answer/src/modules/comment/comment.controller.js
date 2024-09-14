import { isValidObjectId } from "mongoose";
import ApiFeature from "../../utils/api-feature.utils.js";
import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { Comment } from "./comment.model.js";
import { User } from "../user/user.model.js";
import { Recipe } from "../recipe/recipe.model.js";

class CommentController {
  #_model;
  #_modelUser;
  #_modelRecipe;

  constructor() {
    this.#_model = Comment,
      this.#_modelUser = User,
      this.#_modelRecipe = Recipe
  }

  createComment = async (req, res, next) => {
    try {
      const { text, userId, recipeId } = req.body;

      this.#_checkObjectId(userId)
      this.#_checkObjectId(recipeId)

      await this.#_checkUser(userId)
      await this.#_checkRecipe(recipeId)

      const newComment = await this.#_model.create({
        text, userId, recipeId
      });

      res.status(201).send({
        message: "Successfully created",
        data: newComment
      });
    } catch (error) {
      next(error);
    }
  };

  getAllComments = async (req, res, next) => {
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
        .sort("text")
        .limitFields()
        .getQuery()
        .countDocuments();

      const allFilteredComments = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("text")
        .paginate()
        .getQuery()
        .select("-__v");

      res.send({
        message: "success",
        page: req.query?.page || 0,
        limit: req.query?.limit || 10,
        results: allResultsCount,
        data: allFilteredComments,
      });
    } catch (error) {
      next(error);
    }
  };

  updateComment = async (req, res, next) => {
    try {
      const { name, userId, recipeId } = req.body;
      const { commentId } = req.params;

      this.#_checkObjectId(commentId);
      this.#_checkObjectId(userId)
      this.#_checkObjectId(recipeId)

      await this.#_checkComment(commentId)
      await this.#_checkUser(userId)
      await this.#_checkRecipe(recipeId)

      await this.#_model.findByIdAndUpdate(commentId, {
        name, userId, recipeId
      });

      res.send({
        message: "success",
      });

    } catch (error) {
      next(error);
    }
  };

  deleteComment = async (req, res, next) => {
    try {
      const { commentId } = req.params;

      this.#_checkObjectId(commentId);

      await this.#_model.findByIdAndDelete(commentId);

      res.send({
        message: "successfully deleted",
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

  async #_checkComment(id) {
    const founded = await this.#_model.findById(id);

    if (!founded) {
      throw new NotFoundException("Comment not found");
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

export default new CommentController();
