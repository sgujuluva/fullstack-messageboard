import mongoose from "mongoose";
import { generateRobohashAvatar } from "../helpers/avatar.js";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: String,
  ip: String,
  hash: String,
  avatar: { type: String, default: generateRobohashAvatar() },
  dates: {
    registered: { type: Date, default: Date.now() },
    last_active: Date,
  },
  messages: Number,
});

const User = mongoose.model("user", UserSchema);

export default User;
