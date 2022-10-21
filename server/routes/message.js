import { Router } from "express";
import {messagePost} from "../controllers/messageControllers.js"
const router = Router();

//message route
router.post("/post",messagePost)

export default router;
