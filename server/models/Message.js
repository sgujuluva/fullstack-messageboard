import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dates: {
    created: Date,
    default: Date.now(),
    last_edited: Date,
  },
  category: {
    type: String,
    enum: ["save", "delete","post"],
  },
  deleted: boolean,
});

const Message = mongoose.model("message", MessageSchema);

export default Message;
