import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";

const productReview = asyncHandler(async(req,res)=>{
const {review, productId, currentUser} = req.body;
console.log({ review, productId, currentUser });

// const product = await Product.findById({_id:productId})
// const product = await Product.findById(productId)
const product = await Product.findById(productId).exec();

if (!product) {
    return res.status(404).json({ message: "Product not found while submitting review" });
  }
const reviewModel = {
    name:currentUser.name,
    userId:currentUser._id,
    rating:review.rating,
    comment:review.comment,
}

let rating = product.reviews.reduce((acc,x)=> acc+x.rating,0) / product.reviews.length

product.reviews.push(reviewModel)
product.rating = rating
try {
    await product.save();
    res.send('Review submitted successfully');
} catch (error) {
    res.status(400).json({ message: "Something went wrong while adding review", error });
}

})

export {productReview}