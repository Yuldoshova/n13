import { Router } from "express"
import {
   createOrder,
   deleteOrder,
   getAllOrders,
   getOrderById,
   updateOrder
} from "../controller/order.controller.js";

export const orderRoutes = Router();

orderRoutes
   .get('/all', getAllOrders)
   .get('/:orderId', getOrderById)
   .post('/add', createOrder)
   .put('/update/:orderId', updateOrder)
   .delete('/remove/:orderId', deleteOrder)
