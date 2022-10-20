import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password);

  try {
    const createUser = await User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    });
    return res.status(200).json({ message: "User Created" }, createUser);
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
};
