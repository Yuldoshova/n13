const { Router } = require("express");
const mealRoutes = require("./meal.routes.js");

const router = Router()

router.use('/meals', mealRoutes)

module.exports = router