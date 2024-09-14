const { Router } = require("express");
const productController = require("../controllers/product.controller");

const routes = Router()

routes.use('/products', productController.getAllProducts)

module.exports = routes