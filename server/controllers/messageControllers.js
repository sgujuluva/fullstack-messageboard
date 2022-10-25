import Message from "../models/Message.js";

export const fetchAllPost = async(req,res) => {
const getPosts = await Message.find();
return res.status(200).json({message:"All posts here",getPosts})
}

export const messagePost = async (req, res) => {
  const postMessage = await Message.create({
    user_id: req.body.user_id,
    content: req.body.content,
    category: "post",
    deleted: req.body.deleted,
  });
  return res.status(200).json({ message: "message posted", postMessage });
};

/* export const editMessage = async (req, res) => {
  const { id, content } = req.body;

  const checkMessage = Message.findOne({id});

  console.log("THE MESSAGE IS", checkMessage);

  if (!checkMessage) {
    return res.status(400).send("there is nop msg");
  }

  if (!req.body.user_id == checkMessage.user_id) {
    return res.status(404).json({ message: "error - User is not valid" });
  } else {
    const editingThePostedMessage = await Message.findByIdAndUpdate(
      id,
      { content: content },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "message edited", editingThePostedMessage });
  }
}; */

/* export const editMessage = async (req, res) => {
  const { user_id, message_id, content } = req.body;

  let checkUserId = await Message.findOne({ user_id });
  let checkMessageExist = await Message.findOne({ message_id });

  console.log("userid is:",checkUserId )

   if (!checkUserId.toString() || !checkMessageExist.toString()) {
    return res.status(404).send("Wrong User or No Message Exist");
  } else {
    const updateMessage = await Message.findByIdAndUpdate(
      message_id,
      { content: content },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "message edited sucessfully", updateMessage });
  } 
};
 */
export const editMessage = async (req, res) => {
    const { user_id,_id,content } = req.body;

    const checkUserId = await Message.findById(user_id)
    console.log(checkUserId)

      /* const editingThePostedMessage = await Message.findByIdAndUpdate(
        message_id,
        content,
        { new: true }
      ); */
  
   return res.json({ message: "message edited", checkUserId});
    }
 