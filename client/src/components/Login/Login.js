import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import {MessageContext} from "../context";
import {useNavigate} from "react-router-dom"
import axios from "axios"

export default function Login() {

const {signIn, setSignIn} = useContext(MessageContext);

const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/user/login", signIn)
            .then(data => localStorage.setItem("userId",data.data))
            .then(() => localStorage.setItem("show",JSON.stringify(true)));
            navigate("/message")
        } catch (error) {
            console.log(error)
        }
    };
    const handleChangeSignIn = (e) => {
        setSignIn({ ...signIn, [e.target.name]: e.target.value });
      };
    return (
        <>
            <Typography variant="h3" textAlign="center">Login</Typography>
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
                    <TextField type="email" 
                    placeholder="email"
                    autoComplete="email" name="email"
                     value={signIn.email}  onChange={handleChangeSignIn} required/>
              
                    <TextField type="password" 
                    placeholder = "password"
                    autoComplete="current-password" name="password"
                     value={signIn.password}  onChange={handleChangeSignIn} required/>
             
                <Button variant="contained" type="submit">Login</Button>
                </Box>
            </form>
        </>
    );
}