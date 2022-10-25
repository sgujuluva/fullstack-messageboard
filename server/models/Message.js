import mongoose from "mongoose";
import User from "../models/User.js";

const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dates: {
    created: { type: Date, default: Date.now },

    last_edited: { type: Date },
  },
  category: {
    type: String,
    enum: ["save", "delete", "post"],
  },
  deleted: Boolean,
});

const Message = model("Message", MessageSchema);

export default Message;
