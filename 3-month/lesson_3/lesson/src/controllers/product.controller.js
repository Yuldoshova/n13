const Product = require("../models/product.model.js")

class ProductController {
    #_modelProduct

    constructor() {
        this.#_modelProduct = Product
    }

    getAllProducts = async (req, res) => {
        let query = { ...req.query }

        const excludedQueries = ['limit', 'page', 'sort']
        excludedQueries.map(efl => delete query[efl])

        // query = {
        //     ...query,
        //     price: {
        //         $gt: parseInt(query.price.split('~')[0]),
        //         $lt: parseInt(query.price.split('~')[1])
        //     },
        //     rating: {
        //         $gte: parseFloat(query.rating.split('~')[0]),
        //         $lte: parseFloat(query.rating.split('~')[1])
        //     }
        // }

        query = JSON.parse(
            JSON.stringify(query).replace(
                /\b(lt|gt|lte|gte)\b/g,
                (match) => `$${match}`
            )
        );

        const databaseQuery = this.#_modelProduct.find(query)
        console.log(databaseQuery)
        const limit = req.query?.limit || 10
        const offset = req.query?.page ? (req.query.page - 1) * limit : 0


        const allProducts = await databaseQuery.limit(limit).skip(offset).sort('-price')

        res.status(200).send({
            message: "Success",
            page: req.query?.page || 0,
            limit,
            results: allProducts.length,
            data: allProducts
        })
    }
}

module.exports = new ProductController()