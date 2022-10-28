import React, { createContext, useState } from "react";

export const MessageContext = createContext();

function Context({ children }) {
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


  return <MessageContext.Provider value = {{signUp, setSignUp,signIn, setSignIn}}>{children}
  
  </MessageContext.Provider>;
}

export default Context;
