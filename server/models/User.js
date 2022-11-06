import mongoose from "mongoose";
import { generateRobohashAvatar } from "../helpers/avatar.js";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique:true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  ip: String,
  password: String,
  avatar: { type: String, default: generateRobohashAvatar() },
  dates: {
    registered: { type: Date, default: Date.now() },
    last_active: Date,
  },

});

const User = mongoose.model("User", UserSchema);

export default User; 
/* import mongoose from "mongoose";
import { generateRobohashAvatar } from "../helpers/avatar.js";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "the user must have an Email"],
    unique: true,
  },
  firstname: {
    type: String,
    required: [true, "the user must have a firstName"],
  },
  lastname: String,
  ip: String,
  password: {
    type: String,
    required: [true, "the user must have a password"],
    select: false,
  },
  avatar: { type: String, default: generateRobohashAvatar() },
  dates: { registered: { type: Date, default: Date.now }, last_active: Date },
  messages: Number,
});
const User = model("User", UserSchema);
export default User;
 */