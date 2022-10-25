import mongoose from "mongoose";
import Message from "../models/Message.js";

export const fetchAllPost = async (req, res) => {
  const getPosts = await Message.find();
  return res.status(200).json({ message: "All posts here", getPosts });
};

export const messagePost = async (req, res) => {
  const postMessage = await Message.create({
    user_id: req.body.user_id,
    content: req.body.content,
    category: "post",
    deleted: req.body.deleted,
  });
  return res.status(200).json({ message: "message posted", postMessage });
};

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
    { content: req.body.content },
    { new: true }
  );

  return res.json(checkUserId);
};

//delete message

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
