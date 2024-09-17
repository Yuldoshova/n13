const Product = require("../models/product.model.js")

class ProductController {
    #_modelProduct

    constructor() {
        this.#_modelProduct = Product
    }

    getAllProducts = async (req, res) => {

        let dbQuery = this.#_modelProduct.find()

        const limit = req.query.limit
        const offset = req.query.page * limit

        const products = await dbQuery.limit(10).skip(9)

        return res.status(200).send({
            message: "Success",
            data: products
        })
    }
}

module.exports = new ProductController()