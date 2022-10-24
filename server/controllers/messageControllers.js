import Message from "../models/Message.js";

export const messagePost = async (req, res) => {
  const postMessage = await Message.create({
    user_id: req.body.user_id,
    content: req.body.content,
    category: "post",
    deleted: req.body.deleted,
  });
  return res.status(200).json({ message: "message posted", postMessage });
};

