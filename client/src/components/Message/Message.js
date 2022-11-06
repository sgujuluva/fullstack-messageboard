import React, { useEffect,useState,useRef,useContext } from 'react';
import axios from "axios";
import FileBase64 from "react-file-base64";
import { Link } from "react-router-dom";
import { MessageContext } from "../context.js";
//style
import style from "../Message/Message.css";
import { Box } from "@mui/system";
import { Alert, Button, IconButton, Tab, Tabs } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function Message() {
  const [image,setImage] = useState({image:""});
  const [data, setData] = useState("");
  const [userData, setUserData] = useState("");
  const [error, setError] = useState("");
  const [edit, setEdit] = useState("");
  const [input, setInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [val, setVal] = useState(0);

  const {user, signIn} = useContext(MessageContext);
 const valueRef = useRef("");

const handleMessage = async(e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);

  try {
    if (!edit) {
      if (formData.get("message") == "") {
        setError("You should insert a message");
        return;
      } else if (formData.get("title") == "") {
        setError("You should insert a Title");
        return;
      }

      await axios.post(
        "http://localhost:3001/message/create",
        {
          message: formData.get("message").trim(),
          title: formData.get("title").trim(),
          image: image,
        },
        {
          withCredentials: true,
        }
      );
      setError("");
      getMessages();
      setInput("");
      setTitleInput("");
      getUserMessages();
      setImage("");
      return;
    } else if (edit) {
      if (!input) return;
      await axios.patch(
        "http://localhost:3001/message/update",
        {
          id: edit,
          content: input.trim(),
          title: titleInput.trim(),
        },
        {
          withCredentials: true,
        }
      );
      setError("");
      setInput("");
      setTitleInput("");
      setEdit("");
      getMessages();
      getUserMessages();
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

const getUserMessages = async () => {
  const response = await axios.get(
    "http://localhost:3001/message/usermessages",
    {
      withCredentials: true,
    }
  );

  if (response.data) setUserData(response.data);
};

const getMessages = async () => {
  const response = await axios.get(
    "http://localhost:3001/message/allmessages",
    {
      withCredentials: true,
    }
  );

  if (response.data) setData(response.data);
};

const handleUpdate = (id, content, title) => {
  setEdit(id);
  setInput(content);
  setTitleInput(title);
  valueRef.current.focus();
};
const handleDelete = async (id) => {
  try {
    await axios.patch(
      "http://localhost:3001/message/delete",
      { id: id },
      { withCredentials: true }
    );
    getMessages();
    getUserMessages();
  } catch (error) {
    console.log("error deleting", error);
  }
};

useEffect(() => {
  getMessages();
  getUserMessages();
}, []);

  return (
    <div className={style.formContainer}>
<form className={style.form} onSubmit={handleMessage}>
<input
              className={style.titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              placeholder="Title"
              type="text"
              name="title"
              autoFocus
              value={titleInput}
              ref={valueRef}
            />
            <textarea
              rows="14"
              cols="10"
              wrap="soft"
              className={style.input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's on your mind?"
              type="text"
              name="message"
              ref={valueRef}
              value={input}
            />
            <IconButton size="large">
              <label className={style.fileBaseIcon}>
                <PhotoCameraIcon htmlFor="file" />
                <FileBase64
                  type="file"
                  multilple={false}
                  onDone={({ base64 }) => setImage({ image: base64 })}
                />
              </label>
            </IconButton>

            <Button
              endIcon={<SendIcon className={style.button} />}
              type="submit"
              sx={{
                width: "100%",
                border: "1px #1976d2 solid",
                borderRadius: "0.4rem",
                padding: "1rem 2rem",
              }}
            >
              send
            </Button>
</form>
    </div>
  )
}

export default Message