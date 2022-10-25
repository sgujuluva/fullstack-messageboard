import express from "express";
const router = express.Router();
import {registerUser,loginUser,getUsersList} from "../controllers/userControllers.js"

//user routes
router.post("/createuser", registerUser)

//login user
router.post("/login",loginUser)

//get all user list
router.get("/getAllUsers",getUsersList)





export default router;
