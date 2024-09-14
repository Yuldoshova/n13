const express = require('express')
const morgan = require("morgan")
const bodyParser = require('body-parser')
const appConfig = require('./config/app.config.js')
const mongoDB = require('./config/mongo.config.js')
const router = require('./routes/index.routes.js')

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoDB()
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err.message))

app.use('/api', router)

app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Server started on port ${appConfig.port}`)
})
