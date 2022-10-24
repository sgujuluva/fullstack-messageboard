import { Router } from "express";
import { messagePost, editMessage } from "../controllers/messageControllers.js";
const router = Router();

//message route
router.post("/post", messagePost);

//edit the message
router.patch("/edit", editMessage);

export default router;
