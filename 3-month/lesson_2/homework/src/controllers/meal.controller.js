const Meal = require("../models/meal.model.js")
const { isValidObjectId } = require('mongoose')

class MealController {
    constructor() { }

    async createMeal(req, res) {
        const { name, description, owner_id } = req.body
        if (!isValidObjectId(owner_id)) {
            return res.status(400).send({
                message: "owner id type must be objectId"
            })
        }
        await Meal.create({
            name,
            description,
            ownerId: owner_id
        })

        res.status(201).send({
            message: "Successfully created!"
        })
    }

    async getAllMeals(_, res) {
        const allMeals = await Meal.find()
        res.status(200).send({
            message: "Success",
            data: allMeals
        })
    }

    async getMealById(req, res) {
        const { mealId } = req.params
        if (!isValidObjectId(mealId)) {
            return res.status(400).send({
                message: "meal id type must be objectId"
            })
        }

        const foundedMeal = await Meal.findById(mealId)
        if (!foundedMeal) {
            return res.status(404).send({
                message: `${mealId} meal not found!`
            })
        }

        res.status(200).send({
            message: "Success",
            data: foundedMeal
        })
    }

    async updateMealPut(req, res) {
        const { name, description, owner_id } = req.body
        const { mealId } = req.params
        if (!isValidObjectId(mealId)) {
            return res.status(400).send({
                message: "meal id type must be objectId"
            })
        }

        const foundedMeal = await Meal.findById(mealId)
        if (!foundedMeal) {
            return res.status(404).send({
                message: `${mealId} meal not found!`
            })
        }

        await Meal.updateOne({ _id: mealId }, {
            $set: {
                name,
                description,
                ownerId: owner_id
            }
        })

        res.status(200).send({
            message: "Successfully updated!",
        })

    }

    async deleteMeal(req, res) {
        const {mealId} = req.params
        if (!isValidObjectId(mealId)) {
            return res.status(400).send({
                message: "meal id type must be objectId"
            })
        }

        const foundedMeal = await Meal.findById(mealId)
        if (!foundedMeal) {
            return res.status(404).send({
                message: `${mealId} meal not found!`
            })
        }

        await Meal.deleteOne({ _id: mealId })

        res.status(200).send({
            message: "Successfully deleted!"
        })
    }
}

module.exports = new MealController()