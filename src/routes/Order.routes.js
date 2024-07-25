import { Router } from "express";
import { deleteOrder, getOrder, orderPlaced } from "../controllers/Order.controller.js";


const router = Router()

router.route("/checkout").post(orderPlaced)
router.route("/getOrder").get(getOrder)
router.route("/deleteOrder/:id").delete(deleteOrder)
export default router;