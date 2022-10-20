import User from "../models/User.js";
import bcrypt from "bcrypt"

export const registerUser = async(req,res) => {

    const hashedPassword = await bcrypt.hash(req.body.password)
}