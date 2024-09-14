const { isValidObjectId } = require("mongoose");
const User = require("../models/user.model");
const userRoutes = require("../routes/user.routes");

class UserController {
    constructor() { }

    async getAllUsers(req, res) {
        const allUsers = await User.find()

        res.status(200).send({
            message: "Success",
            data: allUsers
        })
    }

    async createUser(req, res) {
        const { first_name, last_name, phone, interests } = req.body

        const newUser = await User.create({
            first_name, last_name, phone, interests
        });

        await newUser.save()

        res.status(201).send({
            message: "Successfully created!",
            data: newUser
        })
    }

    async updateUser(req, res) {
        const userId = req.params.userId
        const { first_name, last_name, phone, interests } = req.body

        if (!isValidObjectId(userId)) {
            return res.status(400).send({
                message: "user id type must be objectId "
            })
        }

        const foundedUser = await User.findById(userId)

        if (!foundedUser) {
            return res.status(404).send({
                message: `${userId} user not found!`
            })
        }

        await User.updateOne({ _id: userId }, {
            $set: {
                first_name,
                last_name,
                phone,
                interests
            }
        });

        res.status(200).send({
            message: "Successfully updated",
        })
    }

    async deleteUser(req, res) {
        const userId = req.params.userId;

        if (!isValidObjectId(userId)) {
            return res.status(400).send({
                message: "user id type must be objectId "
            })
        }

        const foundedUser = await User.findById(userId)
        if (!foundedUser) {
            return res.status(404).send({
                message: `${userId} user not found!`
            })
        }

        await User.deleteOne({ _id: userId })

        res.status(200).send({
            message: "Successfully deleted!"
        })
    }
}

module.exports = new UserController()