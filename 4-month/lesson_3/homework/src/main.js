const express = require('express')
const appConfig = require('./config/app.config')
const routes = require('./routes/index.routes')
const bodyParser = require('body-parser')
const sequelize = require('./config/db.config')
const Student_Group=require('./modules/index.model')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

sequelize
    .sync({ forse: true })
    .then(() => console.log('Database connected!!!'))
    .catch((err) => console.log('Database connected error:', err))

app.use('/api/v1', routes)

app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Server starting on port ${appConfig.port}`)
})