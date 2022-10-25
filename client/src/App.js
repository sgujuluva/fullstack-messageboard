import './App.css';
import Homepage from "./components/Homepage";
import Register from './components/Register';
import Login from "./components/Login"
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
<Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Homepage/>}/>
</Routes>
          
        </div>
    );
}

export default App;
