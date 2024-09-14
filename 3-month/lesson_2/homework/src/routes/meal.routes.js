const { Router } = require("express");
const mealController = require("../controllers/meal.controller");

const mealRoutes = Router()

mealRoutes
    .post('/add', mealController.createMeal)
    .get('/', mealController.getAllMeals)
    .get('/single/:mealId', mealController.getMealById)
    .put('/update/:mealId', mealController.updateMealPut)
    .delete('/delete/:mealId', mealController.deleteMeal)

module.exports = mealRoutes