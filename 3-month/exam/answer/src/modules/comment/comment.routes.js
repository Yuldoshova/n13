import { Router } from "express";
import { CheckRolesGuard } from "../../guards/check-role.guard.js";
import { CheckAuthGuard } from "../../guards/check-auth.guard.js";
import ValidationMiddleware from "../../middleware/validation.middleware.js";
import { createCommentDto } from "./dtos/comment-create.dto.js";
import { updateCommentDto } from "./dtos/comment-update.dto.js";
import commentController from "./comment.controller.js";

const commentRoutes = Router();

commentRoutes
  .get(
    "/",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    commentController.getAllComments
  )
  .post(
    "/add",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    ValidationMiddleware(createCommentDto),
    commentController.createComment
  )
  .put(
    "/update/:commentId",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    ValidationMiddleware(updateCommentDto),
    commentController.updateComment
  )
  .delete(
    "/delete/:commentId",
    CheckAuthGuard(false),
    CheckRolesGuard(),
    commentController.deleteComment
  );

export default commentRoutes;
