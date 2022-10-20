import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try { 
  const checkUserNameExist = await User.findOne({
    username: req.body.username,
  });
  if (checkUserNameExist) {
    return res.status(409).json({ message: "User already registered" });
  } else {
    const createUser = await User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hashedPassword,
      ip: req.ip,
    });
    return res.status(200).json({ message: "User Created", createUser });
  }
  } catch {
    return res.status(500).json({ message: "something went wrong during creation" });
  } 
};
