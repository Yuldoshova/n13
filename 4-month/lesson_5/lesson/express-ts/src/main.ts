import bodyParser from "body-parser"
import express, { Application, Request, Response } from "express"

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

interface CustomRequest<T> extends Request {
    body: T
}

app.post('/add', (req: CustomRequest<{
    name: string,
    description: string,
    year: number
}>, res: Response): void => {
    const { name, description, year } = req.body
})

app.get('/', (req: Request, res: Response): void => {
    console.log("okk")
    res.send("server is running")
})

app.listen(3000, 'localhost', () => console.log('Server starting on port 3000'))