import { Router } from "express";
import { CheckRolesGuard } from "../../guards/check-role.guard.js";
import { CheckAuthGuard } from "../../guards/check-auth.guard.js";
import ValidationMiddleware from "../../middleware/validation.middleware.js";
import ratingController from "./rating.controller.js";
import { createCommentDto } from "../comment/dtos/comment-create.dto.js";
import { updateCommentDto } from "../comment/dtos/comment-update.dto.js";

const ratingRoutes = Router();

ratingRoutes
  .get(
    "/",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    ratingController.getAllRatings
  )
  .post(
    "/add",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    ValidationMiddleware(createCommentDto),
    ratingController.createRating
  )
  .put(
    "/update/:ratingId",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    ValidationMiddleware(updateCommentDto),
    ratingController.updateRating
  )
  .delete(
    "/delete/:ratingId",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    ratingController.deleteRating
  );

export default ratingRoutes;
