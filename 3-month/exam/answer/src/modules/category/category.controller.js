import { isValidObjectId } from "mongoose";
import ApiFeature from "../../utils/api-feature.utils.js";
import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { Category } from "./category.model.js";

class CategoryController {
  #_model;

  constructor() {
    this.#_model = Category
  }

  createCategory = async (req, res, next) => {
    try {
      const { name, description } = req.body;

      const newCategory = await this.#_model.create({
        name,
        image_url: req.file.filename ,
        description
      });

      res.status(201).send({
        message: "Successfully created",
        data: newCategory
      });
    } catch (error) {
      next(error);
    }
  };

  getAllCategories = async (req, res, next) => {
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

      const allFilteredCategories = await new ApiFeature(this.#_model.find(), query)
        .filter()
        .sort("name")
        .limitCategories()
        .paginate()
        .getQuery()
        .select("-__v");


console.log(allResultsCount)
console.log(allFilteredCategories)

      res.send({
        message: "success",
        page: req.query?.page || 0,
        limit: req.query?.limit || 10,
        results: allResultsCount,
        data: allFilteredCategories,
      });
    } catch (error) {
      next(error);
    }
  };

  updateCategory = async (req, res, next) => {
    try {
      const { name } = req.body;
      const { categoryId } = req.params;

      this.#_checkObjectId(categoryId);

      await this.#_model.findByIdAndUpdate(categoryId, {
        name,
      });

      res.send({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  };

  deleteCategory = async (req, res, next) => {
    try {
      const { categoryId } = req.params;

      this.#_checkObjectId(categoryId);

      await this.#_model.findByIdAndDelete(categoryId);

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

  async #_checkCategory(categoryId) {
    const founded = await this.#_model.findById(categoryId);

    if (!founded) {
      throw new NotFoundException("Category not found");
    }
  }
}

export default new CategoryController();
