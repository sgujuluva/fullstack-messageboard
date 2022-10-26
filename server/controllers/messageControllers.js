import mongoose from "mongoose";
import Message from "../models/Message.js";

/* http://localhost:3001/message/get */
export const fetchAllPost = async (req, res) => {
  const getPosts = await Message.find();
  return res.status(200).json({ message: "All posts here", getPosts });
};

/* http://localhost:3001/message/post */
export const messagePost = async (req, res) => {
  const postMessage = await Message.create({
    user_id: req.body.user_id,
    content: req.body.content,
    category: "post",
    deleted: req.body.deleted,
  });
  return res.status(200).json({ message: "message posted", postMessage });
};

/* http://localhost:3001/message/edit */
export const editMessage = async (req, res) => {
  const { user_id, message_id } = req.body;

  // to check whether message already there or not
  if (!mongoose.Types.ObjectId.isValid(message_id))
    return res.status(404).send(`No post with id: ${message_id}`);

  //to check whether user already there or not
  if (!mongoose.Types.ObjectId.isValid(user_id))
    return res.status(404).send(`No user with id: ${user_id}`);

  const checkUserId = await Message.findByIdAndUpdate(
    message_id,
    
    { content: req.body.content,
     $set:{ dates:{last_edited :Date.now()} }},

    { new: true }
  );

  return res.json(checkUserId);
};

//delete message
/* http://localhost:3001/message/delete */
export const deleteMessage = async (req, res) => {
  const { user_id, message_id } = req.body;

  // to check whether message already there or not
  if (!mongoose.Types.ObjectId.isValid(message_id))
    return res.status(404).send(`No post with id: ${message_id}`);

  //to check whether user already there or not
  if (!mongoose.Types.ObjectId.isValid(user_id))
    return res.status(404).send(`No user with id: ${user_id}`);

  const deleteTheMessage = await Message.deleteOne({
    user_id: req.body.user_id,
    message_id: req.body.message_id,
    content: req.body.content,
  });
  return res
    .status(200)
    .json({ message: "Message is deleted", deleteTheMessage });
};

//view all by category
/* http://localhost:3001/message/getAllMessages */

export const viewAllByCategory = async(req,res) => {

const {user_id} = req.body;

const messageCollection = await Message.find({deleted:false, category:"post"}).populate("user_id","content")

return res.status(200).json({message: "The List of all messafe from the user is:",messageCollection})
}