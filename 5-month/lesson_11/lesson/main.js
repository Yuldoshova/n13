import express from "express"
import { join } from "path"

const app = express()

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), "client", "index.html"))
})

app.listen(4000, () => {
    console.log("Server running on port", 4000)
})
