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

export const editMessage = async(req,res) => {
    const editingMessage = await Message.create({
        user_id: req.body.user_id,
        message_id: req.body.message_id,
        content:req.body.content
    })
    return res.status(200).json({message:"message edited",editMessage})
}