import { Router } from "express";
import { categoryRoutes } from "./category.routes.js";
import { productRoutes } from "./product.routes.js";
import { customerRoutes } from "./customer.routes.js";
import { contractTypeRoutes } from "./contract-type.routes.js";
import { orderRoutes } from "./order.routes.js";
import { orderItemRoutes } from "./order-items.routes.js";
export const routes = Router();

routes
  .use("/categories", categoryRoutes)
  .use("/products", productRoutes)
  .use("/customers", customerRoutes)
  .use("/orders", orderRoutes)
  .use("/order-items", orderItemRoutes)
  .use("/contract-types", contractTypeRoutes)
  .use("/contracts")
  .use("/payments")
