const { Router } = require("express");
const studentController = require("./student.controller");
const upload = require("../../utils/multer");

const studentRoutes = Router()

studentRoutes
    .get('/', studentController.getAllStudents)
    .get('/:studentId', studentController.getStudentById)
    .post('/add', upload.single('image'), studentController.createStudent)
    .put('/update/:studentId', upload.single('image'), studentController.updateStudent)
    .delete('/delete/:studentId', studentController.deleteStudent)

module.exports = studentRoutes