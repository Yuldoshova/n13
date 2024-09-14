import { Router } from "express"
import {
   createOrderItem,
   deleteOrderItem,
   getAllOrderItems,
   getOrderItemById,
   updateOrderItem
} from "../controller/order-item.controller.js";

export const orderItemRoutes = Router();

orderItemRoutes
   .get('/all', getAllOrderItems)
   .get('/:orderItemId', getOrderItemById)
   .post('/add', createOrderItem)
   .put('/update/:orderItemId', updateOrderItem)
   .delete('/remove/:orderItemId', deleteOrderItem)
