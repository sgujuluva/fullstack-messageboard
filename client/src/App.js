import "./App.css";
//components

import Homepage from "./components/Homepage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Message from "./components/Message/Message";
import Users from "./components/Users/Users"; 

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
         <Route path="/login" element={<Login />} /> 
         <Route path="/message" element={<Message />} /> 
        <Route path="/users" element={<Users />} /> 
      
      </Routes>
    </div>
  );
}

export default App;
