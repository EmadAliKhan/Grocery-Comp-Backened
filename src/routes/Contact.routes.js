import { Router } from "express";
import { ContactMessage, deleteContact, getContactMessage } from "../controllers/ContactController.js";

const router = Router()

router.route("/contact").post(ContactMessage)
router.route("/getContact").get(getContactMessage)
router.route("/deleteContact/:id").delete(deleteContact)

export default router