import {Router} from "express";
import { getAllProducts } from "../controllers/getallproducts.controller.js";
import {getProductById} from "../controllers/getProductById.controller.js";
const router = Router();

// router.get("/getallproducts",)
router.route("/getallproducts").get(getAllProducts)
// route for getting single product by id
router.route("/getproductbyid").post(getProductById)


export default router;