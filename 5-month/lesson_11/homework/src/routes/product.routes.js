import { Router } from "express"
import {
   createProduct,
   deleteProduct,
   getAllProducts,
   getProductById,
   updateProduct
} from "../controller/product.controller.js";
export const productRoutes = Router();

productRoutes
   .get('/all', getAllProducts)
   .get('/:productId', getProductById)
   .post('/add', createProduct)
   .put('/update/:productId', updateProduct)
   .delete('/remove/:productId', deleteProduct)
