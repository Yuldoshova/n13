import { Router } from "express";
import { CheckRolesGuard } from "../../guards/check-role.guard.js";
import { CheckAuthGuard } from "../../guards/check-auth.guard.js";
import categoryController from "./category.controller.js";
import ValidationMiddleware from "../../middleware/validation.middleware.js";
import { createCategoryDto } from "./dtos/category-create.dto.js";
import { updateCategoryDto } from "./dtos/category-update.dto.js";
import { upload } from "../../utils/multer.utils.js";

const categoryRoutes = Router();

categoryRoutes
  .get(
    "/",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    categoryController.getAllCategories
  )
  .post(
    "/add",
    CheckAuthGuard(true),
    CheckRolesGuard("super-admin", "admin"),
    upload.single('image'),
    ValidationMiddleware(createCategoryDto),
    categoryController.createCategory
  )
  .put(
    "/update/:categoryId",
    CheckAuthGuard(true),
    CheckRolesGuard("super-admin", "admin"),
    ValidationMiddleware(updateCategoryDto),
    categoryController.updateCategory
  )
  .delete(
    "/delete/:categoryId",
    CheckAuthGuard(true),
    CheckRolesGuard("super-admin"),
    categoryController.deleteCategory
  );

export default categoryRoutes;
