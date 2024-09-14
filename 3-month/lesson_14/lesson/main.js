const path = require('path')
const express = require('express')
const { create } = require('express-handlebars')

const app = express()

const hbs = create({
    extname: ".hbs",
    defaultLayout: "main",
    // partialsDir: path.join(process.cwd(), "src", "views", "partials-custom")
})

app.engine(".hbs", hbs.engine)
app.set('view engine', '.hbs')

app.use("/public", express.static(path.join(process.cwd(), "views", "public")))

const categories = [
    {
        id: 1,
        name: 'Books',
        image_url: "image.png"
    },
    {
        id: 2,
        name: 'Clothes',
        image_url: "image.png"
    }
]

app.get('/', (req, res) => {

    const query = req.query
    if (query.tabName == 'categories') {
        return res.render('category', { categories, layout: 'error' })
    }

    res.render("home", { title: "Home page" })
})

app.listen(5000, "localhost", () => {
    console.log("listening 5000")
})