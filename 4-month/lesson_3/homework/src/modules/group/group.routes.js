const { Router } = require("express")
const groupController = require("./group.controller")

const groupRoutes = Router()

groupRoutes
    .get('/', groupController.getAllGroups)
    .get('/:groupId', groupController.getGroupById)
    .post('/add', groupController.createGroup)
    .put('/update/:groupId', groupController.updateGroup)
    .delete('/delete/:groupId', groupController.deleteGroup)

module.exports = groupRoutes