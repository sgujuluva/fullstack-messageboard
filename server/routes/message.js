import { Router } from "express";
import {fetchAllPost, messagePost, editMessage } from "../controllers/messageControllers.js";
const router = Router();

//getting all msg
router.get("/get",fetchAllPost)

//message route
router.post("/post", messagePost);

//edit the message
router.patch("/edit", editMessage);

export default router;
