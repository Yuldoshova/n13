const Product = require("../models/product.model")

class ProductController {
    #_model

    constructor() {
        this.#_model = Product
    }

    getAllProducts = async (req, res) => {
        let query = { ...req.query }

        const includedfields = ['limit', 'page']
        includedfields.map(fld => delete query[fld])

        query = JSON.parse(
            JSON.stringify(query).replace(
                /\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`))

        const databaseQuery = this.#_model.find(query);
        const limit = req.query?.limit || 10
        const offset = req.query?.page ? (req.query.page - 1) * limit : 0
        
        const allProducts = await databaseQuery.limit(limit).skip(offset)

        res.status(200).send({
            message: "Success",
            page: req.query.page || 0,
            limit,
            results: allProducts.length,
            data: allProducts
        })
    }

}

module.exports = new ProductController()