const Group = require("../group/group.model")
const Student = require("./student.model")

class StudentController {
    #_model
    #_modelGroup

    constructor() {
        this.#_model = Student
        this.#_modelGroup = Group
    }

    getAllStudents = async (req, res, next) => {
        try {
            const allStudents = await this.#_model.findAll({
                include: [this.#_modelGroup]
            })

            res.status(200).send({
                message: "Success",
                data: allStudents
            })
        } catch (error) {
            next(error)
        }
    }

    getStudentById = async (req, res, next) => {
        try {
            const { studentId } = req.params
            const foundedStudent = await this.#_model.findByPk(studentId)
            if (!foundedStudent) {
                return res.status(404).send({
                    message: "Not found student!"
                })
            }

            res.status(200).send({
                message: "Success",
                data: foundedStudent
            })
        } catch (error) {
            next(error)
        }
    }

    createStudent = async (req, res, next) => {
        try {
            const { first_name, last_name, username, age, birthday } = req.body
            const image_url = req.file.filename

            const student = await this.#_model.findOne({ where: { username } })
            if (student?.username == username) {
                return res.status(409).send({
                    message: "Username must be unique!"
                })
            }

            const newStudent = await this.#_model.create({
                first_name, last_name, username, age, birthday, image_url
            })
            const foundedGroup = await this.#_model.findByPk(groupId)
            await newStudent.addGroup(foundedGroup)

            res.status(201).send({
                message: "Successfully created!",
                data: newStudent
            })
        } catch (error) {
            next(error)
        }
    }

    updateStudent = async (req, res, next) => {
        try {
            const { first_name, last_name, username, age, birtday } = req.body
            const image_url = req.file.filename
            const { studentId } = req.params

            const foundedStudent = await this.#_model.findByPk(studentId)
            if (!foundedStudent) {
                return res.status(404).send({
                    message: "Not found student!"
                })
            }

            await this.#_model.update({ first_name, last_name, username, age, birtday, image_url }, {
                where: {
                    id: studentId
                }
            })

            res.status(200).send({
                message: "Successfully updated!"
            })

        } catch (error) {
            next(error)
        }

    }

    deleteStudent = async (req, res, next) => {
        try {
            const { studentId } = req.params
            const foundedStudent = await this.#_model.findByPk(studentId)

            if (!foundedStudent) {
                return res.status(404).send({
                    message: "Not found student!"
                })
            }

            await foundedStudent.destroy()

            res.status(200).send({
                message: "Successfully deleted!"
            })

        } catch (error) {
            next(error)
        }
    }

}

module.exports = new StudentController()