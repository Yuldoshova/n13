import express from 'express'
import { join } from "path"

const app = express()

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), "client", "index.html"))
})

app.listen(3000, 'localhost', () => {
    console.log("Server starting on port 3000")
})