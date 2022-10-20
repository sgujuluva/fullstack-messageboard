import { Router } from "express";
const router = Router();
import {registerUser} from "../controllers/userControllers.js"

//user routes
router.get("/user", registerUser)







export default router;
