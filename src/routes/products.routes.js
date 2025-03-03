import {Router} from "express";
import { getAllProducts } from "../controllers/getallproducts.controller.js";
import {getProductById} from "../controllers/getProductById.controller.js";
import {productReview} from "../controllers/productReview.controller.js";
import {deleteProduct} from "../controllers/productDelete.controller.js"

const router = Router();

// router.get("/getallproducts",)
router.route("/getallproducts").get(getAllProducts)
// route for getting single product by id
router.route("/getproductbyid").post(getProductById)
// route for product reviews
router.route("/addreview").post(productReview)
// route for deleting a product in admin ide
router.route("/deleteproduct").post(deleteProduct)

export default router;