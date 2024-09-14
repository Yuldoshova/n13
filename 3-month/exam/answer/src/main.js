import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import appConfig  from './config/app.config.js'
import { routes } from './routes/index.routes.js'
import { ErrorHandlerMiddleware } from "./middleware/error-handler.middleware.js";
import mongoDb from './config/mongo.config.js'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(process.cwd(), "uploads")));


mongoDb()
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(`MongoDB connecting error ${err.message}`))


app.use("/api/v1", routes)

app.all("*", (req, res) => {
    res.status(404).send({
        message: `Berilgan ${req.url} endpoint mavjud emas`,
    });
});

app.use(ErrorHandlerMiddleware);

app.listen(5000, appConfig.host, () => {
    console.log(`Server started on port ${appConfig.port}`)
})
