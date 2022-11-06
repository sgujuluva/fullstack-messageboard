import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const MessageContext = createContext();

function Context({ children }) {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  //for registering newuser
  const [signUp, setSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  //for login
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  //storing daata in local statte

  const userData = async (signIn) => {
    /*  [e.target.name]: e.target.value */
    try {
      await axios
        .post("http://localhost:3001/user/login", signIn ,{
          withCredentials: true,
        })
        .then( (data) =>
        localStorage.setItem("user", JSON.stringify(data.data.user))
        )
        .then(() => {
          localStorageUser();
        });
      setError("");
      navigate("/message");
      return;
    } catch (error) {
      console.log(error);
      setError(" The email address or password is incorrect ");
    }
  };
  // get the user details from local storage
  const localStorageUser = () => {
    if (localStorage.getItem("user") == "undefined") return;
    const user = JSON.parse(localStorage.getItem("user"));
    return setUser(user);
  };

  useEffect(() => {
    localStorageUser();
  
  }, []);

  return (
    <MessageContext.Provider value={{ signUp, setSignUp, signIn,userData, setSignIn , user,setUser}}>
      {children}
    </MessageContext.Provider>
  );
}

export default Context;
