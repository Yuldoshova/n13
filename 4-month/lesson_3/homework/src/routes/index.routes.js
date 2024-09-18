const { Router } = require("express");
const studentRoutes = require("../modules/student/student.routes");
const groupRoutes = require("../modules/group/group.routes");

const routes = Router()

routes.use('/students', studentRoutes)
routes.use('/groups', groupRoutes)

module.exports = routes