import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  
  const navigate = useNavigate();

  //for signup newuser
  const [signUp, setSignUp] = useState({
    firstname: "",
    lastname:"",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    try {
        
        e.preventDefault();
        axios.post("http://localhost:3001/user/createuser",signUp).then(() =>alert("Sign up is successfully done"))
      setSignUp({
          email: "",
          password: "",
        }); 
        navigate("/login")
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
           onChange={handleChangeSignUp}
            type="text"
            autoComplete="firstname"
            name="firstname"
            value={signUp.firstname}
            required
          />
        </label>
        <label>
          Last name
          <input type="text" autoComplete="lastname" name="lastname"  value={signUp.lastname}  onChange={handleChangeSignUp} required />
        </label>
        <label>
          E-mail
          <input type="email" autoComplete="email" name="email"  value={signUp.email}  onChange={handleChangeSignUp} required />
        </label>
        <label>
          Password
          <input
            type="password"
            autoComplete="new-password"
            name="password"
            value={signUp.password}
            onChange={handleChangeSignUp}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
