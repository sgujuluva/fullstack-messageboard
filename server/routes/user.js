import express from "express";
const router = express.Router();
import {registerUser} from "../controllers/userControllers.js"

//user routes
router.post("/createuser", registerUser)







export default router;
