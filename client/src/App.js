import "./App.css";
//components

import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
/* import Message from "./components/Message";
import Users from "./components/Users"; */

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/message" element={<Message />} />
        <Route path="/users" element={<Users />} /> */}
      
      </Routes>
    </div>
  );
}

export default App;
