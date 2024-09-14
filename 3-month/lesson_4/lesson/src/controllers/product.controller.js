const Product = require("../models/product.model.js")

class ProductController {
    #_modelProduct

    constructor() {
        this.#_modelProduct = Product
    }

    getAllProducts = async (req, res) => {

    let dbQuery= this.#_modelProduct.find()

    const products =await dbQuery

        return res.status(200).send({
            message: "Success",
            data: products
        })
    }
}

module.exports = new ProductController()