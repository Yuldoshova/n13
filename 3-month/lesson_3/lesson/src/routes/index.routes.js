const { Router } = require("express");
const userRoutes = require("./user.routes.js");
const productRoutes = require("./product.routes.js");

const router = Router()

router
    .use('/users', userRoutes)
    .use('/products', productRoutes)

module.exports = router