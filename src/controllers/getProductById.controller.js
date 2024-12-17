import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";

const getProductById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.body.productid)
        if (product) {
            res.json(product); // Send the product data
        } else {
            res.status(404).json({message:"Single Product Not Found"});
        }
        
    } catch (error) {
        res.status(400).json({message:"Error fetching product by ID", error:error.message})
    }
});

export {getProductById};

/*
Product.find({_id:req.body.productid}, (err,docs)=>{
        if (!error) {
            res.send(docs[0])
        }
        else {
            return res.status(400).json({message : "Something when wrong while getting product by Id"})
        }
    })
*/