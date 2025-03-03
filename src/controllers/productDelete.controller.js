import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const {productId} = req.body
        if (!productId) {
            return res.status(400).json({message : "Product Id is required for deleting the product"})
        }
        const product = await Product.findByIdAndDelete(productId)
    } catch (error) {
        res.status(500).json({message : "Server side error while deleting a product", error})
    }
})

export {deleteProduct}