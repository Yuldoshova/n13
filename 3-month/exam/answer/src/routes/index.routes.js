import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import userRoutes from "../modules/user/user.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";
import ingredientRoutes from "../modules/ingredient/ingredient.routes.js";
import commentRoutes from "../modules/comment/comment.routes.js";
import ratingRoutes from "../modules/rating/rating.routes.js";
import recipesRoutes from "../modules/recipe/recipe.routes.js";


export const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/users', userRoutes)
routes.use('/categories', categoryRoutes)
routes.use('/ingredients', ingredientRoutes)
routes.use('/comments', commentRoutes)
routes.use('/ratings', ratingRoutes)
routes.use('/recipes', recipesRoutes)

export default routes