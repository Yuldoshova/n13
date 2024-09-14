const { Router } = require("express");
const userController = require("../controllers/user.controller.js");

const userRoutes = Router()

userRoutes
    .get('/', userController.getAllUsers)
    .post('/add', userController.createUser)
    .put('/update/:userId', userController.updateUser)
    .delete('/delete/:userId', userController.deleteUser)

module.exports = userRoutes;