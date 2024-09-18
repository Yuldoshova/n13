const Group = require("./group.model")

class GroupController {
    #_model

    constructor() {
        this.#_model = Group
    }

    getAllGroups = async (_, res, next) => {
        try {
            const allGroups = await this.#_model.findAll()

            res.status(200).send({
                message: "Success",
                data: allGroups
            })
        } catch (error) {
            next(error)
        }
    }

    getGroupById = async (req, res, next) => {
        try {
            const { groupId } = req.params
            const foundedGroup = await this.#_model.findByPk(groupId)
            if (!foundedGroup) {
                return res.status(404).send({
                    message: "Not found group!"
                })
            }

            res.status(200).send({
                message: "Success",
                data: foundedGroup
            })
        } catch (error) {
            next(error)
        }
    }

    createGroup = async (req, res, next) => {
        try {
            const { name, description } = req.body

            const group = await this.#_model.findOne({ where: { name } })
            if (group?.name == name) {
                return res.status(409).send({
                    message: "Name must be unique!"
                })
            }

            const newGroup = await this.#_model.create({
                name, description
            })

            res.status(201).send({
                message: "Successfully created!",
                data: newGroup
            })
        } catch (error) {
            next(error)
        }
    }

    updateGroup = async (req, res, next) => {
        try {
            const { name, description } = req.body
            const { groupId } = req.params

            const foundedGroup = await this.#_model.findByPk(groupId)
            if (!foundedGroup) {
                return res.status(404).send({
                    message: "Not found group!"
                })
            }

            await this.#_model.update({ name, description }, {
                where: {
                    id: groupId
                }
            })

            res.status(200).send({
                message: "Successfully updated!"
            })

        } catch (error) {
            next(error)
        }

    }

    deleteGroup = async (req, res, next) => {
        try {
            const { groupId } = req.params
            const foundedGroup = await this.#_model.findByPk(groupId)

            if (!foundedGroup) {
                return res.status(404).send({
                    message: "Not found group!"
                })
            }

            await foundedGroup.destroy()

            res.status(200).send({
                message: "Successfully deleted!"
            })

        } catch (error) {
            next(error)
        }
    }

}

module.exports = new GroupController()