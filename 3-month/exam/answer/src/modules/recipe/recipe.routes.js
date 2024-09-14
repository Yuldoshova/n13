import { Router } from "express";
import { CheckAuthGuard } from "../../guards/check-auth.guard.js";
import { CheckRolesGuard } from "../../guards/check-role.guard.js";
import { createRecipeDto } from "./dto/recipe-create.dto.js";
import { updateRecipeDto } from "./dto/recipe-update.dto.js";
import recipeController from "./recipe.controller.js";
import { upload } from "../../utils/multer.utils.js";
import ValidationMiddleware from "../../middleware/validation.middleware.js";

const recipesRoutes = Router();

recipesRoutes
  .post(
    "/add",
    CheckAuthGuard(true),
    CheckRolesGuard("super-admin", "admin"),
    upload.array('images', 20),
    upload.single('video'),
    ValidationMiddleware(createRecipeDto),
    recipeController.createRecipe
  )
  .get(
    "/",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    recipeController.getAllRecipes
  )
  .patch(
    "/update/:recipeId",
    CheckAuthGuard(true),
    CheckRolesGuard("super-admin", "admin"),
    ValidationMiddleware(updateRecipeDto),
    recipeController.updateRecipe
  )
  .delete(
    "/delete/:recipeId",
    CheckAuthGuard(true),
    CheckRolesGuard("super-admin", "admin"),
    recipeController.deleteRecipe
  );

export default recipesRoutes;
