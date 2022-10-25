import { Router } from "express";
import {fetchAllPost, messagePost, editMessage,deleteMessage } from "../controllers/messageControllers.js";
const router = Router();

//getting all msg
router.get("/get",fetchAllPost)

//message route
router.post("/post", messagePost);

//edit the message
router.patch("/edit", editMessage);

//delete the message
router.delete("/delete",deleteMessage)

export default router;
