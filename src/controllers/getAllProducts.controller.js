import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // No callback, returns a promise
  if (products) {
    return res.json({ data: products });
  } else {
    return res.status(400).json({ message: "Something went wrong while getting All Products" });
  }
});

export { getAllProducts };


// import {asyncHandler} from "../utils/asyncHandler.js"
// import { Product } from "../models/product.model.js"

// const getAllProducts = asyncHandler(async(req,res)=>{
// Product.find({},(err,docs)=>{
//     if (!err) {
//         return res.json({data:docs})
//     } else {
//         return res.status(400).json({message:"Something went wrong while getting All Products"})
//     }
// })
// })

// export {getAllProducts}