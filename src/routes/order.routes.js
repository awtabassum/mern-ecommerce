import {Router} from 'express';
import { payments, userOrders, ordersByOrderId } from '../controllers/order.controller.js';

const router = Router();

router.route("/placeorder").post(payments)

router.route("/getordersbyuserid").post(userOrders)

router.route("/getorderbyorderid").get(ordersByOrderId)

export default router;

