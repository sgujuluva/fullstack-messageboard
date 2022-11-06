import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../helpers/authenticationhelpers.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const checkUserNameExist = await User.findOne({
      email: req.body.email,
    });
    if (checkUserNameExist) {
      return res.status(409).json({ message: "User already registered" });
    } else {
      const createUser = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        ip: req.ip,
      });
      return res.status(200).json({ message: "User Created", createUser });
      /*  return res.send(createUser) */
    }
  } catch (error) {
    return res.send(error);
  }
};

/* http://localhost:3001/user/login */

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  // Check if email and password is provided
  if (!email || !password) {
    return res.status(400).json({
      message: "email or Password not present",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      // comparing given password with hashed password
      const result = bcrypt.compare(password, user.password);
      if (result) {
        const token = await generateToken(user);
        return res
          .status(200)
          .cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            sameSite: false,
          })
          .json({ user });
      } else {
        res.status(400).json({ message: "Login not succesful" });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

//get allusers
/* http://localhost:3001/user/getAllUsers */
export const getUsersList = async (req, res) => {
  const getUsers = await User.find().select("email");
  return res
    .status(200)
    .json({ message: "Getting the list of all users", getUsers });
};
