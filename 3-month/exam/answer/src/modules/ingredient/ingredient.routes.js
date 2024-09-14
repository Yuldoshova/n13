import { Router } from "express";
import { CheckRolesGuard } from "../../guards/check-role.guard.js";
import { CheckAuthGuard } from "../../guards/check-auth.guard.js";
import ValidationMiddleware from "../../middleware/validation.middleware.js";
import ingredientController from "./ingredient.controller.js";
import { updateIngredientDto } from "./dtos/ingredient-update.dto.js";
import { createIngredientDto } from "./dtos/ingredient-create.dto.js";

const ingredientRoutes = Router();

ingredientRoutes
  .get(
    "/",
    // CheckAuthGuard(false),
    // CheckRolesGuard(),
    ingredientController.getAllIngredients
  )
  .post(
    "/add",
    // CheckAuthGuard(true),
    // CheckRolesGuard("super-admin", "admin"),
    ValidationMiddleware(createIngredientDto),
    ingredientController.createIngredient
  )
  .put(
    "/update/:ingredientId",
    // CheckAuthGuard(true),
    // CheckRolesGuard("super-admin", "admin"),
    ValidationMiddleware(updateIngredientDto),
    ingredientController.updateIngredient
  )
  .delete(
    "/delete/:ingredientId",
    // CheckAuthGuard(true),
    // CheckRolesGuard("super-admin", "admin"),
    ingredientController.deleteIngredient
  );

export default ingredientRoutes;
