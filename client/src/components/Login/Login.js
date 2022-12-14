import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { MessageContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { signIn, setSignIn, userData } = useContext(MessageContext);

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    userData(signIn);
  };
  const handleChangeSignIn = (e) => {
    setSignIn((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("the signin is:", signIn);
  return (
    <>
      <Typography variant="h3" textAlign="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          width={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="2px 2px 3px black"
          padding={3}
          margin="auto"
          borderRadius={5}
          gap="1rem"
          sx={{ background: "#f6f6f6" }}
        >
          <TextField
            type="email"
            placeholder="email"
            autoComplete="email"
            name="email"
            value={signIn.email}
            onChange={handleChangeSignIn}
            required
          />

          <TextField
            type="password"
            placeholder="password"
            autoComplete="current-password"
            name="password"
            value={signIn.password}
            onChange={handleChangeSignIn}
            required
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </>
  );
}
