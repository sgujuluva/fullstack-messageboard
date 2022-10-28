import axios from "axios";
import { useState, useContext } from "react";
import{ MessageContext} from "../context"
import { useNavigate } from "react-router-dom";
//styles
import { Button, Box, Typography, TextField } from "@mui/material";

export default function Register() {
  const {signUp,setSignUp} = useContext(MessageContext)
  const navigate = useNavigate();

  //for signup newuser
  /* const [signUp, setSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }); */
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios
        .post("http://localhost:3001/user/createuser", signUp)
        .then(() => alert("Sign up is successfully done"));
      setSignUp({
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* {error ? <p>{error}</p> : null} */}
      <Typography variant="h4" textAlign="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
        maxWidth={300}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        boxShadow="3px 3px 2px black"
        padding={2}
        margin="auto"
        borderRadius={5}
        gap="1rem"
        sx={{ background: "#f6f6f6", height: "" }}>

        <TextField
          onChange={handleChangeSignUp}
          placeholder="Enter your First Name..."
          type="text"
          autoComplete="firstname"
          name="firstname"
          value={signUp.firstname}
          required
        />

        <TextField
          type="text"
          placeholder="Enter your Last Name..."
          autoComplete="lastname"
          name="lastname"
          value={signUp.lastname}
          onChange={handleChangeSignUp}
          required
        />

        <TextField
          type="email"
          placeholder="Enter your email..."
          autoComplete="email"
          name="email"
          value={signUp.email}
          onChange={handleChangeSignUp}
          required
        />

        <TextField
          type="password"
          placeholder="Enter a password..."
          autoComplete="new-password"
          name="password"
          value={signUp.password}
          onChange={handleChangeSignUp}
          required
        />

        <Button variant="contained" type="suBmit">
          Register
        </Button>
        </Box>
      </form>
    </>
  );
}
