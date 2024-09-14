const express = require('express');
const morgan = require('morgan')
const appConfig = require('./config/app.config');
const mongoDb = require('./config/mongo.config');
const routes = require('./routes/index.routes');

const app = express();

app.use(morgan('dev'))

mongoDb()
    .then(() => console.log('MongoDb connected!'))
    .catch((err) => console.log(err.message))

app.use('/api', routes)

app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Server started on port ${appConfig.port}`)
})