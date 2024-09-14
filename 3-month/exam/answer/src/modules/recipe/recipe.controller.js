import { isValidObjectId } from "mongoose";
import ApiFeature from "../../utils/api-feature.utils.js";
import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { Category } from "../category/category.model.js";
import { User } from "../user/user.model.js";
import { Recipe } from "./recipe.model.js";
import { Image } from "./image.model.js";

class RecipeController {
  #_model;
  #_modelUser;
  #_modelCategory;
  #_modelImage;

  constructor() {
    this.#_model = Recipe
    this.#_modelUser = User
    this.#_modelCategory = Category
    this.#_modelImage = Image
  }

  createRecipe = async (req, res, next) => {
    try {
      const { name, description, owner_id, category_id, preparation_time, cooking_time, servings } = req.body;
      const images = req.files ? req.files.map(file => file.filename) : []
      const video_url = req.file.filename;

      if (!video_url) {
        throw BadRequestException("Video is required");
      }

      this.#_checkObjectId(owner_id);
      this.#_checkObjectId(category_id);

      await this.#_checkUser(owner_id);
      await this.#_checkCategory(category_id);

      const newRecipe = await this.#_model.create({
        name,
        description,
        ownerId: owner_id,
        categoryId: category_id,
        videoUrl: video_url,
        ingredients,
        preparationTime: preparation_time,
        cookingTime: cooking_time,
        servings
      });

      images.map((img) => {
        this.#_modelImage.create({
          imageUrl: img,
          recipeId: newRecipe._id,
          isMain: false
        })
      })

      res.status(201).send({
        message: "Successfully created",
        data: newRecipe
      });
    } catch (error) {
      next(error);
    }
  };

  getAllRecipes = async (req, res, next) => {
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

      const allFilteredRecipes = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("name")
        .limitCategories()
        .paginate()
        .getQuery()
        .populate('images')
        .populate('comments')
        .populate('ratings')
        .select("-__v");

      res.send({
        message: "success",
        page: req.query?.page || 0,
        limit: req.query?.limit || 10,
        results: allResultsCount,
        data: allFilteredRecipes,
      });
    } catch (error) {
      next(error);
    }
  };

  updateRecipe = async (req, res, next) => {
    try {
      const { name, description, owner_id, category_id, preparation_time, cooking_time, servings } = req.body;
      const { recipeId } = req.params;

      this.#_checkObjectId(recipeId);
      this.#_checkObjectId(owner_id);
      this.#_checkObjectId(category_id);

      await this.#_checkUser(owner_id);
      await this.#_checkCategory(category_id);

      await this.#_model.findByIdAndUpdate(recipeId, {
        name,
        description,
        ownerId: owner_id,
        categoryId: category_id,
        videoUrl: video_url,
        ingredients,
        preparationTime: preparation_time,
        cookingTime: cooking_time,
        servings
      });

      res.send({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  };

  deleteRecipe = async (req, res, next) => {
    try {
      const { recipeId } = req.params;

      this.#_checkObjectId(recipeId);

      await this.#_model.findByIdAndDelete(recipeId);

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

  async #_checkUser(user_id) {
    const founded = await this.#_modelUser.findById(user_id);

    if (!founded) {
      throw new NotFoundException("User not found");
    }
  }

  async #_checkCategory(categoryId) {
    const founded = await this.#_modelCategory.findById(categoryId);

    if (!founded) {
      throw new NotFoundException("Category not found");
    }
  }
}

export default new RecipeController();
