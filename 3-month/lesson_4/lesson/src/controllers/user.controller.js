const { isValidObjectId } = require("mongoose");
const User = require("../models/user.model");

class UserController {
    #_userModel;

    constructor() {
        this.#_userModel = User
    }

    getAllUsers = async (_, res) => {
        try {
            const allUsers = await this.#_userModel.find()

            res.status(200).send({
                message: "Success",
                data: allUsers
            })
        } catch (error) {
            res.status(500).send({
                message: `INTERNAL SERVER ERROR!!! ${error}`
            })
        }
    }

    createUser = async (req, res) => {
        try {
            const { first_name, last_name, phone, interests } = req.body

            const newUser = await this.#_userModel.create({
                first_name, last_name, phone, interests
            });

            res.status(201).send({
                message: "Successfully created!",
                data: newUser
            })
        } catch (error) {
            res.status(500).send({
                message: `INTERNAL SERVER ERROR!!! ${error}`
            })
        }
    }

    updateUser = async (req, res) => {
        try {
            const userId = req.params.userId
            const { first_name, last_name, phone, interests } = req.body

            this.#_checkObjectId(userId)

            const foundedUser = await this.#_userModel.findByIdAndUpdate(userId)

            if (!foundedUser) {
                return res.status(404).send({
                    message: `${userId} user not found!`
                })
            }

            await User.findByIdAndUpdate({ _id: userId }, {
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
        } catch (error) {
            res.status(500).send({
                message: `INTERNAL SERVER ERROR!!! ${error}`
            })
        }
    }

    deleteUser = async (req, res) => {
        const userId = req.params.userId;

        this.#_checkObjectId(userId)

        const foundedUser = await this.#_userModel.findById(userId)
        if (!foundedUser) {
            return res.status(404).send({
                message: `${userId} user not found!`
            })
        }

        await User.findByIdAndDelete({ _id: userId })

        res.status(200).send({
            message: "Successfully deleted!"
        })
    }

    #_checkObjectId = (id) => {
        if (!isValidObjectId(id)) {
            throw new Error(`${id} type must be object id! `)
        }
    }
}

module.exports = new UserController()