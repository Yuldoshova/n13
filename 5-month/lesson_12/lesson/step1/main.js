import express from "express"
import { join } from "path"
import { config } from "dotenv"
config()

const app = express()

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), "client", "index.html"))
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT)
})
