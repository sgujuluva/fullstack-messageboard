import axios from "axios";
import { useContext } from "react";
import{ MessageContext} from "../context"
import { useNavigate, Link } from "react-router-dom";
//styles
import { Button, Box, Typography, TextField } from "@mui/material";
import styles from "../Register/Register.css";

export default function Register() {
  const {signUp,setSignUp} = useContext(MessageContext)
  const navigate = useNavigate();

 
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
     await axios
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
    
      <Typography variant="h4" textAlign="center">
        Register
      </Typography>
      <div className = {styles.formContainer}>
      <form onSubmit={handleSubmit} className = {styles.form}>
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
        className= {styles.input}
          onChange={handleChangeSignUp}
          placeholder="Enter your First Name..."
          type="text"
          autoComplete="firstname"
          name="firstname"
          value={signUp.firstname}
          required
        />

        <TextField
         className= {styles.input}
          type="text"
          placeholder="Enter your Last Name..."
          autoComplete="lastname"
          name="lastname"
          value={signUp.lastname}
          onChange={handleChangeSignUp}
          required
        />

        <TextField
         className= {styles.input}
          type="email"
          placeholder="Enter your email..."
          autoComplete="email"
          name="email"
          value={signUp.email}
          onChange={handleChangeSignUp}
          required
        />

        <TextField
         className= {styles.input}
          type="password"
          placeholder="Enter a password..."
          autoComplete="new-password"
          name="password"
          value={signUp.password}
          onChange={handleChangeSignUp}
          required
        />

        <Button  className={styles.button}variant="contained" type="submit">
          Register
        </Button>
        <Typography >
          Already have an account?
{<Link className= {styles.a} variant="contained" to = "/login">Login</Link>}
        </Typography>
        </Box>
      </form>
      </div>
    </>
  );
}
