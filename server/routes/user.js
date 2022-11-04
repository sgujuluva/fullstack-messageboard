import express from "express";
const router = express.Router();
import {registerUser,loginUser,getUsersList} from "../controllers/userControllers.js"

//user routes
/* http://localhost:3001/user/createuser */
router.post("/createuser", registerUser)

//login user
/* http://localhost:3001/user/login */
router.post("/login",loginUser)

//get all user list
/* http://localhost:3001/user/getAllUsers */
router.get("/getAllUsers",getUsersList)





export default router;
