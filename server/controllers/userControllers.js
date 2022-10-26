import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const checkUserNameExist = await User.findOne({
      email: req.body.email,
    });
    if (checkUserNameExist) {
      return res.status(409).json({ message: "User already registered" });
    } else {
      const createUser = await User.create({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword,
        ip: req.ip,
      });
      return res.status(200).json({ message: "User Created", createUser });
    }
  } catch(error) {
    return res.send(error)
     
      ;
  }
};

/* http://localhost:3001/user/login */
export const loginUser = async (req, res) => {
  const {password} = req.body;

  try{
    if(!password){
      return res.status(400).send("No password given, Kindly enter Password")
    }
    const user = User.findOne({username:username})
    if(!user){
      return res.status(400).send("no user found")
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(checkPassword){
      console.log("You are authenticated")
    }
    //generate a token for the user
    
  }catch(error){
    return res.json(error.message)
  }
}

//get allusers
/* http://localhost:3001/user/getAllUsers */
 export const getUsersList = async(req,res) => {
const getUsers = await User.find().select("username")
return res.status(200).json({message:"Getting the list of all users",getUsers})
}